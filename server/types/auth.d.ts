declare module "#auth-utils" {
  interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    role: "admin" | "user";
  }
}

export {};
