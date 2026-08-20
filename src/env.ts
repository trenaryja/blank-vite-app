import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'

// Validated at app boot — a malformed var throws here naming the key, not `undefined` deep in a
// component. `src/main.tsx` imports this for its side effect, so it runs before the app renders.
// This is a scaffold: the schema below is an example. Replace it, and delete anything unused.
export const env = createEnv({
	// An SPA has no server half — every var is inlined into the bundle and public. A secret that
	// needs to stay secret needs a backend, not an entry here.
	clientPrefix: 'VITE_',
	client: {
		VITE_SITE_URL: z.url().optional(),
	},
	// Vite replaces `import.meta.env` with a static object at build time. It is undefined in
	// `vite.config.ts`, which runs in Node — importing this module there validates nothing and
	// throws no error, so don't.
	runtimeEnv: import.meta.env,
	emptyStringAsUndefined: true, // a set-but-blank var reads as missing, not ''
	skipValidation: !!process.env.SKIP_ENV_VALIDATION, // escape hatch for lint/typecheck-only CI
})
