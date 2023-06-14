import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: [
    {
      [`https://phkocyrquh.execute-api.us-east-1.amazonaws.com/api`]: {
        headers: {
          Authorization: `Bearer eyJraWQiOiIyQjQrb1c4V25reGt6UkFmRks5bHc3OGNjbTk0OWZITmZJQkliUjdudWJZPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJiMDc1MGQxOS03NGZjLTQzMDktODM5ZC1iYWQxNmViY2FmY2YiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV94OUlPT3BTc1MiLCJ2ZXJzaW9uIjoyLCJjbGllbnRfaWQiOiI2dGNyYWg5a2ozZjJzNW5uMjUyNXE1cTJiMyIsImV2ZW50X2lkIjoiZmZjZjRmY2EtYjA4MC00Mzc5LWFhNzctMDJiMzRhZGM4YTg3IiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSIsImF1dGhfdGltZSI6MTY4NjcyNDY3OSwiZXhwIjoxNjg2NzUzNDc5LCJpYXQiOjE2ODY3MjQ2NzksImp0aSI6IjEyYzg2MzY5LTg5ODYtNDM0My05NjRjLWM2ZDgyYzE3MmU2ZiIsInVzZXJuYW1lIjoiYjA3NTBkMTktNzRmYy00MzA5LTgzOWQtYmFkMTZlYmNhZmNmIn0.snnfMvSxrz5Zmo6MZzLRKdEJTCq5x7xpTcgCsiOAJR94R_FEgvwgXm9OT1Y3LLn80TvUbujQFCya2Q3bywuavBixJ4pWgmpPvk-AAaI9Pc0WfXfyo8Wxr_aP_GmquFUIdulXFJzmZ41UmcmpitsasPJ9DA3PBQLXg28WanxGI9Q7J2E9wux5mFrLsVxwaJ6kpRCrNNWxI8dnX0vHO-xHjmXc80kmtx-Nlu52HtEBdc2N8h-hzxAofTeyresaXVS0l54JBtXPB30ampN-mIAG-n3FhMwFiq3_L2E7175RhV2mXDwC9K76KFeInnYYCE3cuCGQ3IX-vSD6IDKp8dHQXw`,
        },
      },
    },
  ],
  documents: ['src/**/*.{ts,tsx}'],
  ignoreNoDocuments: true,
  generates: {
    'src/types/graphql.ts': {
      plugins: ['typescript'],
    },
  },
};

export default config;
