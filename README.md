# Muslims by Choice — Hub Prototype

A clickable prototype of a resource hub for the Muslims by Choice (MBC) class at the Islamic Center of Greater Cincinnati (ICGC). It is for committee review and buy-in. The long-term platform has not been chosen yet.

## Pages

All site files live in `static-pages/`.

| File | Page | Purpose |
| --- | --- | --- |
| `index.html` | Start Here | Welcome, welcome video, choose your stage, next class, first steps, privacy |
| `explore.html` | Explore | Basics of Islam, Quran in English, shahada, visiting, checking sources online |
| `establish.html` | Establish | Learning to pray, Quran to memorize, daily tools, life as a new Muslim |
| `expand.html` | Expand | Further study, serving and mentoring, the wider community |
| `connect.html` | Connect | Schedule, first-visit guide, anonymous questions, WhatsApp, contact |

## Two versions

| Folder | Style | Live address (once Pages is on) |
| --- | --- | --- |
| `static-pages/` | Website styled like icgc.us | https://akmcgill.github.io/muslim-by-choice/static-pages/ |
| `classroom-pages/` | Learning platform styled like Google Classroom | https://akmcgill.github.io/muslim-by-choice/classroom-pages/ |

Both use the same content. The classroom version is organized into tabs:

| File | Tab | Purpose |
| --- | --- | --- |
| `index.html` | Stream | Class banner, pinned welcome video, announcement posts, upcoming classes |
| `classwork.html` | Classwork | Lessons and resources by topic (Explore, Establish, Expand), with "Mark as done" progress saved on the learner's device |
| `discussion.html` | Discussion | Moderated forum: category filters, pinned guidelines, sample threads, "start a discussion" form (demo only) |
| `calendar.html` | Calendar | Recurring classes and events, calendar embed placeholder |
| `questions.html` | Questions | Anonymous question form and answered questions |
| `community.html` | Community | Organizers, mentors, WhatsApp channel and groups, first visit |

## Committee notes

Notes for the committee (content to confirm or decide) are hidden by default. To see them:

- Click **Show committee notes** at the bottom of any page, or
- Add `?notes=1` to the end of a page address, e.g. `.../static-pages/index.html?notes=1`

## Viewing the site

Turn on GitHub Pages once: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main`, folder `/ (root)` → Save.** After a minute the site is live at:

https://akmcgill.github.io/muslim-by-choice/static-pages/

(GitHub Pages can only publish from the repo root or a `/docs` folder, so the address includes `static-pages/`.)

Note: a GitHub Pages site is public to anyone with the link. The pages ask search engines not to index them.

## Editing

- **Text:** open a page file in `static-pages/` or `classroom-pages/` on GitHub, click the pencil (Edit) icon, change the words between the tags, and click **Commit changes**. The site updates in about a minute.
- **Colors and fonts:** `static-pages/assets/site.css` (most styling there is written on each element) and `classroom-pages/assets/classroom.css` (change `--theme` at the top to recolor the whole classroom version).
- **Links to other pages:** `index.html`, `explore.html`, `establish.html`, `expand.html`, `connect.html`.

## Placeholders still to fill

Anything in square brackets (for example `[TIME]`, `[ENTRANCE]`, `[DATE]`) and any link that points to `#` is a placeholder. The anonymous question form is a demo only and does not send anything.

## Source

The design master lives in a Claude Design canvas. If the canvas changes, regenerate these files from it rather than editing both by hand.
