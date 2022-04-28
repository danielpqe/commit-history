declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: string;
    PORT: string;
    BASE_URL: string;
    OWNER: string;
    REPO: string;
  }
}
//   BASE_API='https://api.github.com'
// OWNER='danielpqe'
// REPO='commit-history'
