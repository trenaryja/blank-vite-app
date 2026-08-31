# blank-vite-app

A minimal Vite + React SPA template.

## Stack

- [Vite](https://vite.dev)
- [React](https://react.dev) (with [React Compiler](https://react.dev/learn/react-compiler))
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com) (via `@tailwindcss/vite`)
- [DaisyUI](https://daisyui.com)
- [@trenaryja/ui](https://github.com/trenaryja/ui) (ThemeProvider)
- [@trenaryja/config](https://github.com/trenaryja/config) (ESLint + Prettier + tsconfig)
- [@t3-oss/env-core](https://env.t3.gg) (env validation, see `src/env.ts`)

## Usage

### Standalone

Use the GitHub template button, or via CLI:

```sh
gh repo create my-app --template trenaryja/blank-vite-app --clone
cd my-app
bun install
bun dev
```

### Inside a Turborepo

```sh
# 1. Copy the template into your apps/ folder (no git history)
bunx degit trenaryja/blank-vite-app apps/my-app

# 2. Update the name in apps/my-app/package.json
#    "name": "@repo/my-app"

# 3. Install from the monorepo root
bun install
```

The app is auto-discovered via `apps/*` in your workspace config and inherits the root `turbo.json` pipeline.
