# Social Anti-Fake News System

A single-page application for crowd-sourcing votes and comments to determine whether news is fake or not. Built with React + Vite and deployed on Vercel. No backend; all user-submitted votes/comments are stored in sessionStorage and will clear upon reload as required.

## Features

- Home page: list of news with filters (All, Fake, Not Fake)
- Adjustable page size and pagination
- Each news card shows title, summary, reporter, date-time, current status, and vote counts
- Detail page: full details and event image, community verdict, and paginated comments
- Vote page: submit vote (fake/not fake), comment, and evidence image URL
- Mock data preloaded to demonstrate pagination
- SPA storage: votes/comments saved to sessionStorage (cleared on reload)

## Tech Stack

- React 18, React Router
- Vite build tool
- Deployed on Vercel (static build)

## Getting Started

```bash
# Install
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview build locally
npm run preview
```

## Deployment (Vercel)

- Ensure you have a Vercel account and CLI installed (`npm i -g vercel`).
- From the project root:

```bash
vercel
# Or non-interactive
vercel --prod
```

- This project includes `vercel.json` to rewrite all routes to `index.html` for SPA routing.

## Data & Storage

- Mock news data is in `src/data/news.js`.
- Votes/comments are stored in `sessionStorage` under key `safs_votes_v1`.
- Aggregations compute Fake vs Not Fake counts and the derived status per news item.

## Group Info (replace with your details)

- Group Name: <Your Group Name>
- Members:
  - <Student ID：20232088> - <Student Name：Weijingke(Submerge)>Responsible for 85% of the project
  - <Student ID:20232084> - <Student Name:zhairuitong>Responsible for 15% of the project

## Links

- Deployed site: <https://finallabmidwork2.vercel.app/>
- Demo video (2-3 minutes): <https://www.douyin.com/user/self?modal_id=7570334288747688698&showSubTab=private_post>

## Notes

- As per requirement, user-submitted data is not persisted to a server and may be removed on page reload.
- The app is a single-page application designed for easy deployment to Vercel.
