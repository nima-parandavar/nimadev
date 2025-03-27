import type { Color, Mode } from "./theme"

declare module 'nuxt/schema' {
  interface AppConfigInput {
    theme?: {
      primaryColor: Color,
      mode: Mode,
      loadingIcon?: string
    }
  }
}

export { }