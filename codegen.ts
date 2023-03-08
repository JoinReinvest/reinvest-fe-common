import { CodegenConfig } from '@graphql-codegen/cli';
import { env } from './src/env'

const config: CodegenConfig = {
  schema: [
    {
      [env.apiUrl]: {
        headers: {
          Authorization: `Bearer ${env.token}`,
        },
      },
    },
  ],
  documents: ['src/graphql/**/*.{ts,tsx}'],
  ignoreNoDocuments: true,
  generates: {
    'src/graphql/models.ts': {
      plugins: ['typescript'],
    },
  },
};

export default config;
