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

- Timeline Page

  - [x] includes the home page(/home) and the user page(/{username}),
        the home page displays all the tweets, the user page displays only the tweets of the user
  - [x] redirect the index page(/) to the home page(/home)

- Register & Login & Logout

  - [x] unique username password without security
  - [x] as options in the left-side AppBar of timeline pages(/)(/{username})
  - [x] start with the home page(/) of a user named @tourist if a user hasn't logged in
  - [x] keep the logged-in status in local session after a user successfully registers or logs in
  - [x] transfer to her/his timeline page(/{username}) after a user successfully registers or logs in
  - [x] transfer to the home page(/) of a user named @tourist after a user logs out

- Tweets in the timeline page

  - [x] each tweet owns a unique incremental integer ID
  - [x] users can post text tweets
  - [x] tweets are in a descending order
  - [x] tweets can be edited only by the posters
  - [x] tweets can be deleted only by the posters
  - [ ] transfer to the detail page(/tweet/{tweet ID}) after clicking a tweet

- AppBar

  - [x] appears in leftside of the home page(/home) and the user page(/{username})
  - [x] users can post a tweet quickly by clicking the _Tweet_ Button
  - [x] users can go to the home page(/) by clicking the _Home_ Navigation Button
  - [x] users can go to her/his timeline page(/{username}) by clicking the _Profile_ Navigation Button

- Tweets in the detail page

## How I Made it

This little project is basically out of these principles:

- _Readable Code Comes 1st_
- _Reusable Code Comes 2nd_
- _A UI Library Helps to Reduce the Mental Burden and the Possibility of Making Mistakes_

Now let's look through the practices of above principles.

### Component, Component, Component

Component = Props => UI

Here are 3 types of Components in the project.

| Type              | Role                   | Dependencies                   |
| ----------------- | ---------------------- | ------------------------------ |
| Generic Component | Atom utility           | none / other Generic Component |
| Common Component  | Reusable business      | Generic Component              |
| Page Component    | Usual business, Chores | Generic & Common Component     |

#### Generic Component

As the most atomic Components, Generic Components serve as the reinforcement from UI lib ([Thoughts about building my own UI lib](TODO)).

You can find them in [@/components/generic](TODO) and [@/ui]().

#### Common Component

As the reusable business Components, Common Component are _dumb_ waiting to receive props.

They have nothing to do with State or Store in spite of containing a fair amount of reusable business logic.

---

**NOTE**

Why some dumb Components are not called Common Components

Some dumb Components are so simple to be written that they serve as _Widgwets_ around their parent Components Like [Avatar]().

Some Components are too specific in business to be reused across the Pages like [PasswordForm]().

---

You can use Common Components safely and update State or Store in their parent Components.

You can find them in [@/components/common](TODO).

#### Page Component

As the logic elements of Pages, Page Components are _"people"_ of the Page _"nation"_.

They are everywhere and serve as all kinds of jobs.

You can find them in [@/components/common](TODO).

---

### Component Babysitter
