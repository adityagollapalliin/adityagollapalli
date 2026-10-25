# Hero intro backup — 2026-10-25

The hero ("hi, my name is Aditya Gollapalli") intro text as it was before the
2026-10-25 change to an AI-research focus.

## Original text

I build data pipelines, SaaS integrations, and workflow automation — mostly in Snowflake environments. I'm comfortable picking up an unfamiliar platform API, working out what it can and cannot do, and turning that into a spec another team can build against.

## How to revert

In `src/data/resume.ts`, `profile.tagline` is now an array of paragraphs.
Replace its contents with the single original paragraph:

```ts
  tagline: [
    "I build data pipelines, SaaS integrations, and workflow automation — mostly in Snowflake environments. I'm comfortable picking up an unfamiliar platform API, working out what it can and cannot do, and turning that into a spec another team can build against.",
  ],
```

No other file needs to change; the hero and the page's meta description both
read from this field. Alternatively, `git revert` the commit titled
"Update hero intro to AI research focus".
