# Twitter-Shadow

This is an exercise for _React_ & _Typescript_ by building a very simple Twitter.

There is no backend involved and all the data is stored locally.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- [React](https://reactjs.org/docs/hooks-intro.html) with Functional Components and Hooks
- [Typescript](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html)
- [Nextjs](https://nextjs.org/docs/getting-started) project bootstrapper
- [emotion](https://github.com/emotion-js/emotion) CSS-in-JS support
- [RuetifyUI](https://github.com/KyLoc20/Ruetify-UI) self-hosted UI lib adherent to [Material-UI](https://mui.com/) and [Vuetify](https://vuetifyjs.com/en/)

## Features

- Register & Login & Logout
  - [x] unique username password without security
  - [ ] as options in the timeline page(/)(/{username})
  - [x] everyone starts with the tourist timeline page(/)
  - [ ] keep the logged-in status in local session after a user successfully registers or logs in
  - [ ] transfer to her/his timeline page(/{username}) after a user successfully registers or logs in
  - [ ] transfer to the tourist timeline page(/) after a user logs out
- Tweets in the timeline page
  - [ ] all tweets are readable but can be edited or deleted only by the posters
  - [x] tweets are in a descending order
  - [x] each tweet owns a unique incremental integer ID
  - [x] users can post text tweets
  - [ ] transfer to the detail page(/tweet/{tweet ID}) after clicking a tweet
- Tweets in the detail page
