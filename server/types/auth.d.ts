declare module '#auth-utils' {
  interface User {
    firstName?: string,
    lastName?: string,
    email: string,
    role: 'admin' | 'staff' | 'user',
    isActive: boolean,
    userID: string
  }
}

export { }