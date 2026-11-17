import { vi } from 'vitest';

// `server-only` throws when imported outside a React Server Component bundle. Tests run server modules
// directly, so it is replaced with an empty module here.
vi.mock('server-only', () => ({}));
