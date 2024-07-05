/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WEATHER_API: string
  readonly VITE_WEATHER_API_PATH: string
  readonly VITE_WEATHER_API_KEY: string
  readonly VITE_IP_API: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
