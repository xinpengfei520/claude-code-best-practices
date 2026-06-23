# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Interactive web tutorial that teaches Claude Code CLI commands through an iTerm2-style terminal simulation. React 18 + TypeScript + Vite, deployed on Vercel.

## Commands

- `npm run dev` — start the Vite dev server
- `npm run check` — type-check only (`tsc -b --noEmit`), no output. Use this for a fast check.
- `npm run build` — type-check then production build. **Run this before considering a change done** — there are no automated tests, so the build is the only safety net.
- `npm run lint` — ESLint

## Architecture

- State lives in a single Zustand store (`src/store/`) persisted to localStorage under key `claude-tutorial-storage` (execution history capped at 50; completed-commands `Set` is serialized as an array and re-hydrated). Changing the persisted shape can break existing users' saved state.
- Command catalog (~39 commands with metadata) is data-driven in `src/data/commands.ts` — add/edit commands there, not in components.
- Import alias `@/` maps to `src/` (configured in tsconfig + vite).

## Conventions

- TypeScript `strict` is intentionally **off** (also `noUnusedLocals`/`noUnusedParameters` off). Match the existing loose style; don't enable strict mode without discussion.
- Tailwind dark mode is **class-based** (`dark:` toggled via a class, not system preference).
- Do not edit `postcss.config.js` (marked DON'T EDIT) or the Trae-badge Vite plugin in `vite.config.ts` — both are tool-managed.
- Commit messages follow Conventional Commits (`feat:`, `fix:`, `docs:`, etc.).
