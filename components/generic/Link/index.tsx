import * as React from "react";
import styled from "@emotion/styled";
import { useClickable } from "@/hooks/Clickable";
type LinkProps = {
  children?: React.ReactNode;
  href?: string;
};

function Link(props: LinkProps) {
  const handleGotoLink = (e: React.MouseEvent) => {
    setTimeout(() => {
      if (props.href) window.open(props.href);
    }, 200);
  };
  const [Component] = useClickable(handleGotoLink);
  return <Component>{props.children}</Component>;
}
export { Link };
