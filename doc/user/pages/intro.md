---
sidebar_position: 1
slug: /
---

# Introduction

**markdown-query** is a CLI, invoked as `mq`, that selects elements out of a Markdown document with a jq-like, path-based query. Where `jq` walks a JSON tree, `mq` walks a Markdown document's parsed structure (its Abstract Syntax Tree, or AST) — headings, paragraphs, lists, links, and so on — and lets you pull out exactly the pieces you want.

Given this file:

```markdown title="doc.md"
# Components

Some *text* with a [link](url).
```

You can ask for just the link:

```bash
mq 'link' doc.md
```

```text
[link](url)
```

Or just its destination:

```bash
mq --raw 'link.destination' doc.md
```

```text
url
```

The rest of this guide covers:

- [CLI usage](./cli-usage) — invocation, stdin, the `--raw` flag, and error behavior.
- [Query language](./query-language) — how selectors chain and search the document.
- [Indexing and slicing](./indexing-and-slicing) — narrowing matches with `[N]` and `[a:b]`.
- [Attributes](./attributes) — pulling a scalar value (like `.destination` or `.text`) out of a matched node.
- [Output formats](./output-formats) — how a match gets printed, and how `--raw` and `.attribute` change that.
- [Reserved queries](./reserved-queries) — the three whole-document modes: `.`, `describe`, and `tree`.
- [Examples](./examples) — a worked cookbook against one sample document.

## Installing

`mq` isn't published as a versioned module yet, so install it by building from source:

```bash
git clone https://github.com/NutshellEngineering/markdown-query.git
cd markdown-query
go build -o mq ./cmd/mq
```

This produces an `mq` binary you can put on your `PATH`, or you can run it directly with `go run ./cmd/mq <query> [file]` from inside the repository.
