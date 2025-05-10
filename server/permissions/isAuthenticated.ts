import { Permission, type Action } from "./baseModel";

export class IsAuthenticated extends Permission {
  override async hasPermission(action: Action, context?: any): Promise<boolean> {
    if (await requireUserSession(context.event)) {
      return true
    }
    return false
  }
}