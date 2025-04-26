import { ArticleSchema } from "~/server/models/article.schema"
import { join, dirname } from "path"
import { mkdir, writeFile } from 'fs/promises'

export default defineEventHandler(async (event) => {
  const formData = await readFormData(event)
  const { mount } = useRuntimeConfig(event)

  try {
    const file = formData.get('cover') as File
    const slug = formData.get('slug')
    const title = formData.get('title')
    const status = formData.get('status') === 'true' ? 'published' : 'draft'
    const tags = formData.get('tags')?.toString().split(',') || []
    const body = formData.get('body')

    let coverURL: string = ''

    if (file) {
      const ext = file.name.split('.').at(-1)
      const buffer = Buffer.from(await file.arrayBuffer())

      coverURL = join(process.cwd(), mount, 'articles', `${slug ? slug : file.name.replaceAll(' ', '-')}.${ext}`)

      await mkdir(dirname(coverURL), { recursive: true })

      await writeFile(coverURL, buffer)
    }
    return await new ArticleSchema({
      cover: `articles/${String(slug ? slug : file.name.replaceAll(' ', '-'))}`,
      title,
      slug,
      body,
      status
    }).save()
  }
  catch (error) {
    return error
  }
})
