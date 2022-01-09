import { PropsWithChildren, useContext } from "react";
import styled from "@emotion/styled";
import { genCustomBox } from "@/components/generic/containers/Box";
import { defineCustomButton, ButtonPreset } from "@/components/generic/Button";
import { Navigation, Logo } from "./widgets";
import { useRouter } from "next/router";
import { underConstruction } from "@/utils/helper";
import {
  IconHome,
  IconExplore,
  IconNotifications,
  IconMessages,
  IconBookmarks,
  IconLists,
  IconProfile,
  IconMore,
} from "./icons";
import { UserStore } from "@/stores/user";
import { useModal } from "@/hooks/Modal";
import EditTweetCard from "@/components/modals/EditTweetCard";
export default function NavigationMenuCard(
  props: PropsWithChildren<TNavigationMenuCard>
) {
  const router = useRouter();
  const { state, dispatch } = useContext(UserStore);
  const [showEditTweet, hideEditTweet, EditTweetModal] = useModal(
    "edit-tweet-modal-container"
  );
  const handleOpenEditTweetModal = () => {
    let scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    showEditTweet();
  };
  const handleCloseEditTweetModal = () => {
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "0";
    hideEditTweet();
  };
  const handleGotoHomeTimelinePage = () => {
    router.push("/home");
  };
  const handleGotoUserTimelinePage = () => {
    router.push(`/${state.username}`);
  };
  return (
    <Component>
      <Logo></Logo>
      <Navigation
        name={"Home"}
        icon={IconHome}
        onSelect={() => {
          handleGotoHomeTimelinePage();
        }}
      />
      <Navigation
        name={"Explore"}
        icon={IconExplore}
        onSelect={() => {
          underConstruction();
        }}
      />
      <Navigation
        name={"Notifications"}
        icon={IconNotifications}
        onSelect={() => {
          underConstruction();
        }}
      />
      <Navigation
        name={"Messages"}
        icon={IconMessages}
        onSelect={() => {
          underConstruction();
        }}
      />
      <Navigation
        name={"Bookmarks"}
        icon={IconBookmarks}
        onSelect={() => {
          underConstruction();
        }}
      />
      <Navigation
        name={"Lists"}
        icon={IconLists}
        onSelect={() => {
          underConstruction();
        }}
      />
      <Navigation
        name={"Profile"}
        icon={IconProfile}
        onSelect={() => {
          handleGotoUserTimelinePage();
        }}
      />
      <Navigation
        name={"More"}
        icon={IconMore}
        onSelect={() => {
          underConstruction();
        }}
      />
      <TweetButton onClick={() => handleOpenEditTweetModal()}>
        Tweet
      </TweetButton>
      <EditTweetModal>
        <EditTweetCard onClose={handleCloseEditTweetModal} variant="Create" />
      </EditTweetModal>
    </Component>
  );
}
type TNavigationMenuCard = {};
const Component = genCustomBox(
  {
    vertical: true,
  },
  {
    w: "100%",
    overflow: "hidden",
    flexShrink: "0",
    AI: "flex-start",
  }
);
const genButton50Primary = defineCustomButton(
  ButtonPreset.Navigation_primary50
);
const TweetButton = genButton50Primary({
  wrapper: { my: "12px" },
  inner: {
    letterSpacing: "normal",
    fontSize: 17,
    lineHeight: 20,
    fontWeight: 700,
  },
});
