import styled from "@emotion/styled";
import { default as Icon, TIconSVG } from "@/components/generic/Icon";
import { genCustomBox } from "@/components/generic/containers/Box";
import { genCustomText, HTMLTag, TextPreset } from "@/components/generic/Text";
import { defineCustomButton, ButtonPreset } from "@/components/generic/Button";
import { IconTwitter } from "./icons";
export { Navigation, Logo };
function Navigation({ icon, name, onSelect }: TNavigation) {
  const Button = genButton50();
  const Text = genCustomText(HTMLTag.span, TextPreset.Navigation_default20, {
    lineHeight: 24,
    ml: "20px",
    mr: "16px",
  });
  return (
    <Button
      onClick={() => {
        onSelect(name);
      }}
    >
      <Icon svg={icon} />
      <Text>{name}</Text>
    </Button>
  );
}
type TNavigation = {
  name: string;
  icon: TIconSVG;
  onSelect: (name: string) => void;
};
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

const genButton50 = defineCustomButton(ButtonPreset.Navigation_default50);
