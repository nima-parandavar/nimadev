import { Document, Model, Types, Error } from 'mongoose'
import type { ServerFile } from 'nuxt-file-storage'
import type { Action, PermissionMap } from '../permissions/baseModel'

abstract class BaseModel<T extends Document> {
  protected model: Model<T>
  protected permissions: PermissionMap

  constructor(model: Model<T>, permissions: PermissionMap = {}) {
    this.model = model
    this.permissions = permissions
  }

  protected async checkPermissions(action: Action, context?: any): Promise<void> {
    const permissions = this.permissions[action] || []
    for (const permission of permissions) {
      const isAllowed = await permission.hasPermission(action, context)
      if (!isAllowed) {
        throw createError({ status: 403, statusCode: 403, message: 'Forbidden' })
      }
    }
  }

  protected async uploadFile(to: string, file: ServerFile) {
    const name = generateFileName(file.name)
    await storeFileLocally(file, name.filename, to)

    return {
      filename: name.filename,
      ext: name.ext,
      fullPath: `${to}/${name.filename}.${name.ext}`
    }
  }

  async create(data: Partial<T>, context?: any): Promise<T> {
    await this.checkPermissions('create', context)
    const instance = new this.model({ ...data })
    return await instance.save()
  }

  async delete(id: string | Types.ObjectId, context?: any): Promise<T | null> {
    await this.checkPermissions('delete', context)
    if (!Types.ObjectId.isValid(id)) {
      throw new Error(`${id} is not valid`)
    }
    return await this.model.findByIdAndDelete({ _id: id })
  }

  async update(id: string | Types.ObjectId, data: Partial<T>, context?: any): Promise<T | null> {
    await this.checkPermissions('update', context)
    if (!Types.ObjectId.isValid(id)) {
      throw new Error(`${id} is not valid`)
    }
    const instance = await this.model.findByIdAndUpdate({ _id: id }, { $set: data })
    return instance
  }

  async retrieve(findBy: object, context?: any): Promise<T | null | Error> {
    await this.checkPermissions('retrieve', context)
    try {
      return await this.model.findOne(findBy)
    } catch {
      throw createError({
        status: 404,
        statusCode: 404,
        message: `instance not found`
      })
    }
  }

  async list(filter?: object, sort?: object, limit?: number, skip?: number, context?: any): Promise<T[]> {
    await this.checkPermissions('list', context)
    if (limit && skip) {
      return await this.model.find({ ...filter }).sort({ ...sort }).limit(limit).skip(skip)
    }
    return await this.model.find({ ...filter }).sort({ ...sort })
  }
}

export default BaseModel
