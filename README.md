# LAZTAR PEEP2026 Trainee Notes

Technical notes, learning summaries, and progress documentation from my trainee journey at LAZTAR Software & Digital Solutions Co., Ltd.

## Live Site

[LAZTAR PEEP 2026 Trainee Notes](https://HuyMinhDev.github.io/LAZTAR-PEEP2026-Trainee-Notes/)

## Tech Stack

* Hugo
* hugo-theme-learn
* GitHub Pages
* GitHub Actions

## Local Development

Run locally:

```bash
hugo server
```

Build production site:

```bash
hugo --minify
```

## Content Structure

```text
content/
├── week-01/
│   ├── _index.md
│   ├── _index.vi.md
│   ├── day-01.md
│   └── day-01.vi.md
├── week-02/
├── week-03/
└── week-04/
```

* `.md` → English content
* `.vi.md` → Vietnamese content
* Keep matching filenames for language switching support

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions.
