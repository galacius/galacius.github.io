/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_RELEASE_BASE_URL: string
  readonly VITE_APP_RELEASE_API_URL: string
  readonly VITE_APP_GITHUB_URL: string
  readonly VITE_APP_GITHUB_REPO_API_URL: string
  readonly VITE_APP_AUTHOR_URL: string
  readonly VITE_APP_PLUGINS_GITHUB_URL: string
  readonly VITE_APP_PLUGINS_RELEASE_API_URL: string
  readonly VITE_GA_MEASUREMENT_ID?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
