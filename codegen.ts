import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: [
    {
      [`https://phkocyrquh.execute-api.us-east-1.amazonaws.com/api`]: {
        headers: {
          Authorization: `Bearer eyJraWQiOiIyQjQrb1c4V25reGt6UkFmRks5bHc3OGNjbTk0OWZITmZJQkliUjdudWJZPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJiMDc1MGQxOS03NGZjLTQzMDktODM5ZC1iYWQxNmViY2FmY2YiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV94OUlPT3BTc1MiLCJ2ZXJzaW9uIjoyLCJjbGllbnRfaWQiOiI2dGNyYWg5a2ozZjJzNW5uMjUyNXE1cTJiMyIsImV2ZW50X2lkIjoiY2RiZjRjZjktNTZhYS00M2ZlLWFlNTEtMTBjZjZkYjI4YTI5IiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSIsImF1dGhfdGltZSI6MTY4MzYwOTIzNCwiZXhwIjoxNjgzNjM4MDM0LCJpYXQiOjE2ODM2MDkyMzQsImp0aSI6ImI0NGIyMDEyLWFiN2QtNDI1MS04NDYzLTQzMzg5MzUyZmY3ZCIsInVzZXJuYW1lIjoiYjA3NTBkMTktNzRmYy00MzA5LTgzOWQtYmFkMTZlYmNhZmNmIn0.Mcx3kQd85pXHnTRUHOyt_pa1UQiGKH7Va3jGKmOz93ZsMJCg3wq_3anT0CsGZ8TEY6KU7hzdEX-tx3yX0ClpSmrrP4ewxYKE24tW5nZJFQgZtwz0u9X95Tn20slTYNQdqmH3Oci0QWgUSzC1Ex9d3TRXKBeozD630HLm25KhF01vH-b2oxSI1EImOgp-I-BMpQE6XzqLzA0XGvhEcxbED-mEDkQ2SU8_lB5yP4lZFV9LpFqsa8y9ov7XvEPawAzPrNNCsp3T_kI26ex3xskSy3WBVQEX-ZpJCym70O6M612AqOabL0baiEVl9-gMX08ykYC2xZK6gxbBhzLAjBhQ-Q`,
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
