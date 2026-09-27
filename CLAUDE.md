# Marketix Studio website

Next.js 14 rebuild of marketixstudio.com (a Pune performance-marketing agency), replacing
WordPress. Content lives in typed TS files under `content/` — there is no CMS.

**Read before any work:**
- `docs/PROJECT_CONTEXT.md` — decisions, rejected directions, audit, open items. The history the code can't show.
- `design.md` — the locked design system. Every UI change must follow it.

## Hard rules
- **Never fabricate** metrics, testimonials, clients, logos, prices or results. Unknown → "metric to confirm".
- **Must not look or read like Vistrow** (sister brand whose codebase this was cloned from).
  No Vistrow chrome, section rhythm, copy or blog content.
- Follow `design.md`: violet `#C82AEF` on dark, Plus Jakarta Sans only, no gradient text,
  no section eyebrows, no Aurora/blobs, glow only on hover/focus, one entrance animation per page.
- No hand-drawn browser/phone/dashboard chrome — real screenshots in `<figure>` only.
- Run Hallmark's slop test (`.claude/skills/hallmark/references/slop-test.md`) before shipping UI.
- Install third-party tools project-scoped only, after vetting them. The user wants only well-starred repos.

## Gotchas
- Don't run `npm run build` while `npm run dev` is up — it corrupts `.next`. Stop dev, `rm -rf .next`, restart.
- Every component in `components/ui/bits/` (react-bits) needs `"use client"`.
- `grep` is aliased to ugrep in this shell — use `/usr/bin/grep` or Python for searches.
- Dev server: `.claude/launch.json` → `marketix-dev` on port 3000.
- Real (production) speed: `npm run preview` / launch config `marketix-preview` on port 3001. It builds into `.next-preview`, so it is safe to run while dev is up. The dev server compiles each page on first visit and always feels slow; judge speed on the preview.

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
