declare namespace NodeJS {
  interface ProcessEnv {
    HOST: string;
    USER: string;
    DATABASE: string;
    PASSWORD: string;
    DB_PORT: number;
    PORT: number;
  }
}
