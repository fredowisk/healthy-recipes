interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {
  readonly NG_APP_API_URL: string;
  readonly NG_APP_API_SECRET: string;
  [key: string]: any;
}
