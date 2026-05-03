# blank-vite-app

A minimal Vite + React SPA template.

## Stack

- [Vite 7](https://vite.dev)
- [React 19](https://react.dev) (with [React Compiler](https://react.dev/learn/react-compiler))
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com) (via `@tailwindcss/vite`)
- [DaisyUI v5](https://daisyui.com)
- [@trenaryja/ui](https://github.com/trenaryja/ui) (ThemeProvider)
- [Biome](https://biomejs.dev) (lint + format)

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

# 3. (Optional) Delete apps/my-app/biome.jsonc to inherit the root config.
#    Optionally rewrite apps/my-app/tsconfig.json to extend @repo/config.

# 4. Install from the monorepo root
bun install
```

The app is auto-discovered via `apps/*` in your workspace config and inherits the root `turbo.json` pipeline.
