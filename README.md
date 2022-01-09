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

Now let's look through the practices of above principles.

### Component, Component, Component

Component = (Props) => UI

Here are 3 types of Components in the project.

| Type              | Role                   | Dependencies                   |
| ----------------- | ---------------------- | ------------------------------ |
| Generic Component | Atom utility           | none / other Generic Component |
| Common Component  | Reusable business      | Generic Component              |
| Page Component    | Usual business, Chores | Generic & Common Component     |

#### Generic Component

As the most atomic Components, Generic Components serve as the reinforcement from UI lib ([Thoughts about building my own UI lib](TODO)).

You can find them in [@/components/generic](TODO) and [@/ui]().

> _A UI Library Should Help to Reduce the Mental Burden and the Possibility of Making Mistakes_

Take the Component [Textfield](https://github.com/KyLoc20/twitter-shadow/blob/master/components/generic/Textfield/index.tsx) for example.

You can find the practices in some forms like [@/components/modals/SignInCard/SignIn/PasswordForm.tsx](https://github.com/KyLoc20/twitter-shadow/blob/master/components/modals/SignInCard/SignIn/PasswordForm.tsx).

```ts
type TPasswordForm = {
  username: string;
  onAfterSubmit: Function;
};
function PasswordForm(props: React.PropsWithChildren<TPasswordForm>) {
  return (
    <>
      <Textfield
        id="username-disabled-input"
        prompt="Phone, email, or username"
        defaultValue={props.username}
        disabled
      />
      <Textfield
        id="password-input"
        ref={passwordTextfieldRef}
        prompt="Password"
        secretly
        onChange={handleInputPassword}
      />
    </>
  );
}
```

Textfield in PasswordForm:

![Textfield](/docs/Textfield.png)

What does [Textfield](https://github.com/KyLoc20/twitter-shadow/blob/master/components/generic/Textfield/index.tsx) do?

- Its appearance and behavior are aligned with a UI lib refering to [Material Design](https://material.io/components/text-fields) and [mym-UI](https://mym-ui.vercel.app/select).
- It provides a reusable input which owns HTML attributes such as _ref_ and _defaultValue_.
- It provides readable props such as _secretly_ which means `<input type="password" />`.

#### Common Component

As the reusable business Components, Common Component are _dumb_ waiting to receive props.

They have nothing to do with State or Store in spite of containing a fair amount of reusable business logic.

> **_NOTE:_**  
> Why some dumb Components are not called Common Components?
>
> Some dumb Components are so simple to be written that they serve as _Widgwets_ around their parent Components Like [Avatar]().
>
> Some Components are too specific in business to be reused across the Pages like [PasswordForm]().

You can use Common Components safely and update State or Store in their parent Components.

You can find them in [@/components/common](TODO).

Take the Component [TweetEditor](https://github.com/KyLoc20/twitter-shadow/blob/master/components/common/TweetEditor/index.tsx) for example.

You can find the practices in the scenes where users need to edit their tweets like [@/components/timeline/MainContentCard/TweetEditorCard](https://github.com/KyLoc20/twitter-shadow/blob/master/components/timeline/MainContentCard/TweetEditorCard/index.tsx).

```ts
function TweetEditorCard() {
  const { state: userState, dispatch: userDispatch } = useContext(UserStore);
  const { state: tweetState, dispatch: tweetDispatch } = useContext(TweetStore);
  //use a ref to control the inner <textarea>
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const handleCreateTweet = () => {
    const elTextarea = textareaRef.current;
    //make sure input valid
    if (elTextarea == null || elTextarea.value === "") return;
    //use the ref to get value from the inner <textarea>
    const content = elTextarea.value;
    const user: Poster = {
      nickname: userState.nickname,
      username: userState.username,
      avatarUrl: userState.avatarUrl,
    };
    //make a POST request to create a Tweet
    API.Tweet.postCreateTweet({ content, user }).then((tid) => {
      //update the Store when successful
      const doCreateTweet: TweetActions = {
        type: TweetActionTypes.Create,
        payload: _genTweetInstance(tid, content, user),
      };
      tweetDispatch(doCreateTweet);
      //use the ref to control the inner <textarea>
      elTextarea.value = "";
    });
  };
  return (
    <TweetEditor
      ref={textareaRef}
      user={userState}
      submitButtonMetaText="Tweet"
      textareaId="main-tweet-editor-textarea"
      textareaPlaceholder="What's happening?"
      onSubmit={handleCreateTweet}
    />
  );
}
```

TweetEditor when creating tweets:

![TweetEditor when creating tweets](/docs/TweetEditor1.png)

TweetEditor when updating tweets:

![TweetEditor when updating tweets](/docs/TweetEditor2.png)

What does [TweetEditor](https://github.com/KyLoc20/twitter-shadow/blob/master/components/common/TweetEditor/index.tsx) do?

- It is a large compound Component which combines Page Components including [Avatar](TODO) [ControlPanel](TODO) and Generic Components including [AutosizeTextarea](https://github.com/KyLoc20/twitter-shadow/blob/master/components/generic/Textarea/AutosizeTextarea.tsx) and [Button](https://github.com/KyLoc20/twitter-shadow/blob/master/components/generic/Button/index.tsx).
- It is reusable across the Big Page Components [TweetEditorCard](https://github.com/KyLoc20/twitter-shadow/blob/master/components/timeline/MainContentCard/TweetEditorCard/index.tsx) from [timeline](https://github.com/KyLoc20/twitter-shadow/tree/master/components/timeline) which allows to write tweets in Timeline Page and [EditorCard](https://github.com/KyLoc20/twitter-shadow/blob/master/components/modals/EditTweetCard/EditorCard/index.tsx) from [modals](https://github.com/KyLoc20/twitter-shadow/tree/master/components/modals/EditTweetCard) which allows to post tweets quickly from the left-side AppBar or edit tweets' content in each Tweet.
- It is dumb therefore you always mess with Store and API in its parent Components.

#### Page Component

As the logic elements of Pages, Page Components are _"people"_ of the Page _"nation"_.

They are everywhere and serve as all kinds of jobs.

You can find them in [@/components/timeline](https://github.com/KyLoc20/twitter-shadow/tree/master/components/timeline) and [@/components/modals](https://github.com/KyLoc20/twitter-shadow/tree/master/components/modals).

> **_CONVENTION:_**  
> Why many Page Components are named as "xxCard"?
>
> They are "smart" or "container" which dealing with API and Store.
>
> I choose to name them all as "Card" instead of "Container"

> **_CONVENTION:_**  
> What are Widgets for?
>
> For a "Card" Page Component there are some small dumb Page Components and constant varibles like STYLE or ICON.
>
> They are regarded as "Widgets" put aside the regarding Page Components like [TopBannerCard's Widgets](https://github.com/KyLoc20/twitter-shadow/blob/master/components/timeline/MainContentCard/TopBannerCard/widgets.tsx)

---

### Component Babysitter
