import { PropsWithChildren, useState } from "react";
import styled from "@emotion/styled";
import { genCustomBox, genBox } from "@/components/generic/containers/Box";

export default function TweetTabCard() {
  const Component = genCustomBox({}, { h: 54 });
  const Content = genCustomBox({}, { w: "100%" });
  const [whichSelected, setWhichSelected] = useState<TTabSeletions>("Tweets");
  return (
    <Component>
      <Content>
        <EachTab
          name={"Tweets"}
          selected={whichSelected === "Tweets" ? true : false}
          onSelect={(tabName) => setWhichSelected(tabName)}
        >
          Tweets
        </EachTab>
        <EachTab
          name={"Tweets & replies"}
          selected={whichSelected === "Tweets & replies" ? true : false}
          onSelect={(tabName) => setWhichSelected(tabName)}
        >
          Tweets & replies
        </EachTab>
        <EachTab
          name={"Media"}
          selected={whichSelected === "Media" ? true : false}
          onSelect={(tabName) => setWhichSelected(tabName)}
        >
          Media
        </EachTab>
        <EachTab
          name={"Likes"}
          selected={whichSelected === "Likes" ? true : false}
          onSelect={(tabName) => setWhichSelected(tabName)}
        >
          Likes
        </EachTab>
      </Content>
    </Component>
  );
}
type TTabSeletions = "Tweets" | "Tweets & replies" | "Media" | "Likes";
function EachTab(props: PropsWithChildren<TEachTab>) {
  const Component = genCustomBox(
    { borderbox: true },
    {
      flexGrow: "1",
      px: "16px",
      cursor: "pointer",
      transition: "background .15s ease",
      hoverBg: "rgba(15,20,25,0.1)",
      AI: "center",
      JC: "center",
    }
  );
  const Content = genCustomBox(
    {},
    {
      position: "relative",
      h: "100%",
      JC: "center", //BRILLIANT! it works for absolute children
      AI: "center",
      fontSize: 15,
      lineHeight: 20,
      fontWeight: 500,
      color: "rgb(83, 100, 113)",
      letterSpacing: "normal",
    }
  );
  const Indicator = genBox({
    display: props.selected ? "block" : "none",
    position: "absolute",
    bottom: 0,
    minWidth: 56,
    w: "100%",
    h: 4,
    bg: "rgb(29, 155, 240)",
    borderRadius: 2,
  });
  return (
    <Component
      onClick={() => {
        props.onSelect(props.name);
      }}
    >
      <Content>
        {props.children}
        <Indicator></Indicator>{" "}
      </Content>
    </Component>
  );
}
type TEachTab = {
  selected?: boolean;
  name: TTabSeletions;
  onSelect: (value: TTabSeletions) => void;
};
