export type Action = 'retrieve' | 'list' | 'update' | 'delete' | 'create'

export abstract class Permission {
  abstract hasPermission(action: Action, context?: any): boolean | Promise<Boolean>
}

export type PermissionMap = Record<string, Permission[]>