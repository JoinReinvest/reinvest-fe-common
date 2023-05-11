import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: [
    {
      [`https://phkocyrquh.execute-api.us-east-1.amazonaws.com/api`]: {
        headers: {
          Authorization: `Bearer eyJraWQiOiIyQjQrb1c4V25reGt6UkFmRks5bHc3OGNjbTk0OWZITmZJQkliUjdudWJZPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJiMDc1MGQxOS03NGZjLTQzMDktODM5ZC1iYWQxNmViY2FmY2YiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV94OUlPT3BTc1MiLCJ2ZXJzaW9uIjoyLCJjbGllbnRfaWQiOiI2dGNyYWg5a2ozZjJzNW5uMjUyNXE1cTJiMyIsImV2ZW50X2lkIjoiYmFkNWJhYzktZjFkOS00NDU1LThhNTgtOThhNzA2ZDlkNzE4IiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSIsImF1dGhfdGltZSI6MTY4MzgwMzMxNywiZXhwIjoxNjgzODMyMTE3LCJpYXQiOjE2ODM4MDMzMTcsImp0aSI6IjM5NTdmNGZkLWE1Y2MtNGI1MS1hNGIzLWU3YWY3MThmMjlkYSIsInVzZXJuYW1lIjoiYjA3NTBkMTktNzRmYy00MzA5LTgzOWQtYmFkMTZlYmNhZmNmIn0.Le--LidKwsutySp0SGOuzmUHlLw7bKfxaRBcVefBecDkoJ1NobivBIZEUZEX7zCcTckcsvLBWo0B-5R9yEx8jjJQKW1ZQWEaJiHJWZuUvRvYW2T16v95mej5Wn7eQWz0FpAgSJ8JNpd9s6s8mH1qddJXXYqju2sNx6aMyojsVXyqRxUhqV80ggFM1fUeyZHiVo9xRzRHbrkt3aBqvSw_L2rl8sWAWNguACc5ARxneLYeFLnd_e6kXw8SkMOvkm-l0SPocMbAzkhsp7C5-xhg8R-lCCkf954FazrSAjCVmdqvpFDy_wpUqtpQCDOBBlpJLtVG8Bmhm8YzG3rhEWlvMQ`,
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
