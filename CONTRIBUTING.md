# Contributing to LLVM-FLOW

This repository (`kc-ml2/llvm-flow`) is the **single source of truth** for both
`llvm-flow-api/` and `llvm-flow-frontend/`. Deploy repositories are synced from
here automatically — please do not send changes to them.

## Pull request rules

1. Branch off `main`. Do not commit to `main` directly.
2. Use a descriptive branch name, e.g. `feat/obfuscation-passes` or `fix/cfg-render`.
3. Keep one PR to one concern. Split unrelated changes.
4. Run the formatter before committing:
   - API — `cd llvm-flow-api && uv run ruff format . && uv run ruff check .`
   - Frontend — `cd llvm-flow-frontend && npx prettier --write "src/**/*.{ts,tsx}"`
5. In the PR description, say what changed and how you verified it.
6. Open the PR against `main` in this repository.
7. After review comments, push follow-up commits and use **Re-request review**.

## Adding an LLVM pass

If the pass needs an external plugin (`--load-pass-plugin`), state in the PR
which **exact LLVM version** it is built against — plugins are ABI-locked to one
`opt` version, and the image ships LLVM 14–20. The plugin must build from source
inside the Docker image; prebuilt binaries are not accepted for the hosted demo.
Keep the pass behind a capability check so the UI degrades gracefully when the
plugin is absent.

## License

Contributions are licensed under the project's [MIT License](LICENSE). Keep
third-party plugin source in its own directory with its own license file.
