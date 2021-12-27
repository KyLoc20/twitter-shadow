import styled from "@emotion/styled";
import { default as Icon, TIconSVG } from "@/components/generic/Icon";
import {
  genBox,
  genCustomBox,
  defineCustomBox,
} from "@/components/generic/containers/Box";
import {
  IconHome,
  IconExplore,
  IconNotifications,
  IconMessages,
  IconBookmarks,
  IconLists,
  IconProfile,
  IconMore,
  IconTwitter,
} from "./icons";
export { NAVIGATION_ITEMS, Logo };

type NavigationItem = {
  name: string;
  url: string;
  icon: TIconSVG;
};
const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    name: "Home",
    url: "",
    icon: IconHome,
  },
  {
    name: "Explore",
    url: "",
    icon: IconExplore,
  },
  {
    name: "Notifications",
    url: "",
    icon: IconNotifications,
  },
  {
    name: "Messages",
    url: "",
    icon: IconMessages,
  },
  {
    name: "Bookmarks",
    url: "",
    icon: IconBookmarks,
  },
  {
    name: "Lists",
    url: "",
    icon: IconLists,
  },
  {
    name: "Profile",
    url: "",
    icon: IconProfile,
  },
  {
    name: "More",
    url: "",
    icon: IconMore,
  },
];
function Logo() {
  const LogoWrapper = genCustomBox(
    {},
    {
      w: "100%",
      h: 50,
      AI: "center",
    }
  );
  return (
    <LogoWrapper>
      <Icon svg={IconTwitter} />
    </LogoWrapper>
  );
}
