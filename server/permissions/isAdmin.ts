import { Permission, type Action } from "./baseModel";

export class IsAdmin extends Permission {
  override async hasPermission(action: Action, context?: any): Promise<boolean> {
    const { user } = await requireUserSession(context.event)
    if (user.role === 'admin') {
      return true
    }
    return false
  }
}