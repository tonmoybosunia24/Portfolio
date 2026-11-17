import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

const root = new URL('./', import.meta.url).pathname;

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/': root,
    },
  },
  test: {
    // Every test starts from fresh mocks, so no test depends on what an earlier one left behind.
    restoreMocks: true,
    unstubEnvs: true,
    unstubGlobals: true,
    setupFiles: ['./vitest.setup.ts'],
    // Logic only: server code, utilities and route handlers. UI components have no unit tests.
    environment: 'node',
    include: ['**/*.test.ts'],
    exclude: ['node_modules/**', '.next/**', 'e2e/**'],
    coverage: {
      provider: 'v8',
      include: ['app/**/*.ts', 'lib/**/*.ts', 'services/**', 'utils/**', 'proxy.ts', 'instrumentation.ts'],
      // Metadata routes are covered by the e2e tests instead.
      exclude: ['**/*.test.ts', 'app/{robots,sitemap}.ts'],
      reporter: ['text', 'html', 'lcov'],
      // CI fails when coverage drops below these. Raise them as the app grows; don't lower them to pass.
      thresholds: {
        lines: 80,
        statements: 80,
        functions: 80,
        branches: 75,
      },
    },
  },
});
