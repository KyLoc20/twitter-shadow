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

> _Component = (Props) => UI_

Here are 3 types of Components in the project.

| Type              | Role                   | Dependencies                   |
| ----------------- | ---------------------- | ------------------------------ |
| Generic Component | Atom utility           | none / other Generic Component |
| Common Component  | Reusable business      | Generic Component              |
| Page Component    | Usual business, Chores | Generic & Common Component     |

#### Generic Component

As the most atomic Components, Generic Components serve as the reinforcement from UI lib.

You can find them in [@/components/generic](https://github.com/KyLoc20/twitter-shadow/tree/master/components/generic) and [@/ui](https://github.com/KyLoc20/twitter-shadow/tree/master/ui).

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
> Some dumb Components are so simple to be written that they serve as _Widgwets_ around their parent Components Like [Avatar](https://github.com/KyLoc20/twitter-shadow/blob/master/components/common/TweetEditor/widgets.tsx).
>
> Some Components are too specific in business to be reused across the Pages like [PasswordForm](https://github.com/KyLoc20/twitter-shadow/blob/master/components/modals/SignInCard/SignIn/PasswordForm.tsx).

You can use Common Components safely and update State or Store in their parent Components.

You can find them in [@/components/common](https://github.com/KyLoc20/twitter-shadow/tree/master/components/common).

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

- It is a large compound Component which combines Page Components including [Avatar](https://github.com/KyLoc20/twitter-shadow/blob/master/components/common/TweetEditor/widgets.tsx) and [Tools](https://github.com/KyLoc20/twitter-shadow/blob/master/components/common/TweetEditor/widgets.tsx) and Generic Components including [AutosizeTextarea](https://github.com/KyLoc20/twitter-shadow/blob/master/components/generic/Textarea/AutosizeTextarea.tsx) and [Button](https://github.com/KyLoc20/twitter-shadow/blob/master/components/generic/Button/index.tsx).
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

### Unstyled Component

Generic Components are useful _"bricks"_ when building Page Components especially [Unstyled Components](https://github.com/KyLoc20/blogs-behind-shadow/blob/master/UnstyledComponent.md) such as [Box](https://github.com/KyLoc20/twitter-shadow/blob/master/components/generic/containers/Box/index.tsx).

If you need an Avatar, let's try it with inline CSS styles:

```ts
function SimpleAvatar(props: { url: string }) {
  return (
    <div
      style={{
        marginRight: "12px",
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        background: `no-repeat url(${props.url})`,
        backgroundSize: "contain",
      }}
    ></div>
  );
}
```

It is a little tiring to write these styles but it's OK.

But you feel shity when you need a _LARGER_ Avatar, so you seal this with _Props_ adding some _"sweet"_ short names for a relief:

```ts
type TSweetAvatar = {
  url: string;
  m?: string; //margin
  w?: number; //width
  h?: number; //height
};
function SweetAvatar(props: TSweetAvatar) {
  return (
    <div
      style={{
        margin: props.m,
        width: props.w ? `${props.w}px` : "48px",
        height: props.h ? `${props.h}px` : "48px",
        borderRadius: "50%",
        background: `no-repeat url(${props.url})`,
        backgroundSize: "contain",
      }}
    ></div>
  );
}
//require a larger width and height
const LargerAvatarCase = () => (
  <SweetAvatar url="xxx" m="0 12px 0 0" w={64} h={64}></SweetAvatar>
);
```

How about making a Generic Component supports all the CSS properties?

Here the Unstyled Component [Box](https://github.com/KyLoc20/twitter-shadow/blob/master/components/generic/containers/Box/index.tsx) comes:

```ts
import Box from "@/components/generic/containers/Box";

const LargerAvatarUsingBoxCase = () => (
  <Box
    m="0 12px 0 0"
    w={64}
    h={64}
    borderRadius={"50%"}
    bg="no-repeat url(xxx)"
    bgSize="contain"
  ></Box>
);
```

No need to write an Avatar any more, just write styles into _Props_ as you want.

You can refer to [sxProps](https://github.com/KyLoc20/twitter-shadow/blob/master/system/sx.tsx) to check the supported CSS properties of Unstyled Components including [Box](https://github.com/KyLoc20/twitter-shadow/blob/master/components/generic/containers/Box/index.tsx), [Button](https://github.com/KyLoc20/twitter-shadow/blob/master/components/generic/Button/index.tsx), [Text](https://github.com/KyLoc20/twitter-shadow/blob/master/components/generic/Text/index.tsx).

---

### Component Babysitter

> _Babysitter = (...args) => Component with some Props_

Unstyled Components are powerful but not enough:

- Cumbersome that components receive style object as props in JSX -> To seperate styles from JSX
- Box with styles is not _READABLE_ -> To name components individually or not
- Need some custom props in different situations -> To provide _REUSABLE_ custom components

Here the Component Babysitter [genCustomBox](https://github.com/KyLoc20/twitter-shadow/blob/master/components/generic/containers/Box/custom.tsx) and [defineCustomBox](https://github.com/KyLoc20/twitter-shadow/blob/master/components/generic/containers/Box/custom.tsx).

#### genCustomBox

```ts
import { genCustomBox } from "@/components/generic/containers/Box";

const AvatarUsingCustomBoxCase = () => {
  //a Container {display: flex; flex-direction: column;}
  const Wrapper = genCustomBox({ vertical: true }, {});
  const MyAvatar = genCustomBox(
    { noFlex: true }, //display: block;
    {
      w: 48,
      h: 48,
      p: "2px", //padding
      borderRadius: "50%",
      bg: `no-repeat url(xxx)`,
      bgSize: "contain",
    }
  );
  return (
    <Wrapper>
      <MyAvatar />
      <MyAvatar />
      <MyAvatar />
    </Wrapper>
  );
};
```

Now your Unstyled Components own their names `Wrapper` and `MyAvatar` which is easier to understand what they are for.

You use a [TCustomBox](https://github.com/KyLoc20/twitter-shadow/blob/master/components/generic/containers/Box/custom.tsx) object as the 1st argument.

-> To provide some short-cut settings like `flex-direction` or `box-sizing`

You use a [sxProps](https://github.com/KyLoc20/twitter-shadow/blob/master/system/sx.tsx) object as the 2nd argument.

-> To provide CSS properties as you want

#### defineCustomBox

```ts
import {
  defineCustomBox,
  genCustomBox,
} from "@/components/generic/containers/Box";

const AvatarUsingDefinedBoxCase = () => {
  //provide Box with {display: block}
  const genBlockBox = defineCustomBox({ noFlex: true });
  const Wrapper = genBlockBox();
  const MyAvatar = genBlockBox({
    w: 48,
    h: 48,
    p: "2px", //padding
    borderRadius: "50%",
    bg: `no-repeat url(xxx)`,
    bgSize: "contain",
  });
  return (
    <Wrapper>
      <MyAvatar />
      <MyAvatar />
      <MyAvatar />
    </Wrapper>
  );
};
```

By default `genCustomBox` provides you with a `display: flex`, you have to specify for each if you don't want.

Now by using `defineCustomBox` you can customize your `genCustomBox` and using `genCustomBox` to customize your `Box`.

Wonderful!

#### Write a Button

```js
import { genCustomButton } from "@/components/generic/Button";

const FollowButton = genCustomButton({
  variant: "plain",
  depressed: true,
  borderRadius: 18,
  rippleDisabled: true,
  height: 36,
  padding: "0 16px",
  backgroundColor: "rgb(15, 20, 25)",
  hoverBackgroundColor: "rgb(39, 44, 48)",
  inner: {
    color: "#fff",
    lineHeight: 18,
    fontSize: 15,
    fontWeight: 700,
    letterSpacing: "normal",
  },
});

function InteractionButtonGroup(props: TInteractionButtonGroup) {
  const Wrapper = genCustomBox();
  const handleSelect = () => props.onSelect("follow");
  return (
    <Wrapper>
      <FollowButton onClick={handleSelect}>Follow</FollowButton>
    </Wrapper>
  );
}
type TInteractionButtonGroup = {
  onSelect: (value: string) => void,
};
```

FollowButton in UserProfileCard:

![FollowButton](/docs/FollowButton.png)

#### Write a Button using Box

In spite of the given Unstyled Component [Button](https://github.com/KyLoc20/twitter-shadow/blob/master/components/generic/Button/index.tsx), let's make a `Button` using `genCustomBox` which is based on [Box](https://github.com/KyLoc20/twitter-shadow/blob/master/components/generic/containers/Box/index.tsx).

```js
import { genCustomBox } from "@/components/generic/containers/Box";

const NotifyButton = genCustomBox(
  {},
  {
    mr: "8px",
    mb: "12px",
    h: 34,
    w: 34,
    borderRadius: 9999,
    border: "1px solid rgb(207, 217, 222)",
    hoverBg: "rgba(15, 20, 25,0.1)",
    transition: "background 0.15s ease",
    cursor: "pointer",
    JC: "center",
    AI: "center",
  }
);

function InteractionButtonGroup(props: TInteractionButtonGroup) {
  const Wrapper = genCustomBox();
  const handleSelect = () => props.onSelect("notify");
  return (
    <Wrapper>
      <NotifyButton onClick={handleSelect}>
        <Icon svg={IconNotify} />
      </NotifyButton>
    </Wrapper>
  );
}
type TInteractionButtonGroup = {
  onSelect: (value: string) => void,
};
```

NotifyButton in UserProfileCard:

![NotifyButton](/docs/NotifyButton.png)
