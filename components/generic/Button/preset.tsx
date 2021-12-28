import { sxProps } from "@/system/sx";
import { TCustomButton } from "./base";
export { PresetType, FACTORY };

enum PresetType {
  Navigation_default50,
  Navigation_primary50,
  Navigation_primary36,
  Navigation_primary24,
}
type CustomButtonFactory = {
  [key in PresetType]: TCustomButton;
};
const FACTORY: CustomButtonFactory = {
  [PresetType.Navigation_default50]: {
    variant: "plain",
    height: 50,
    padding: "12px",
    borderRadius: 25,
    backgroundColor: "rgba(0, 0, 0, 0)",
    hoverBackgroundColor: "rgba(15, 20, 25, 0.1)",
    contentColor: "rgb(15, 20, 25)",
    rippleDisabled: true,
  },
  [PresetType.Navigation_primary50]: {
    variant: "plain",
    width: 226,
    height: 50,
    padding: "0 32px",
    borderRadius: 25,
    backgroundColor: "#1d9bf0", //rgba(29, 155, 240, 1)
    hoverBackgroundColor: "rgba(26, 140, 216, 1)",
    contentColor: "#fff",
    rippleDisabled: true,
    content: {
      fontSize: 17,
      fontWeight: 700,
      lineHeight: 20,
    },
    inner: { fontSize: 17, fontWeight: 700, lineHeight: 20 },
  },
  [PresetType.Navigation_primary36]: {
    variant: "plain",
    height: 36,
    padding: "0 16px",
    borderRadius: 9999,
    backgroundColor: "#1d9bf0",
    hoverBackgroundColor: "rgba(26, 140, 216, 1)",
    contentColor: "#fff",
    rippleDisabled: true,
    content: {
      fontSize: 15,
      fontWeight: 700,
      lineHeight: 18,
      letterSpacing: "normal",
    },
    inner: {
      fontSize: 15,
      fontWeight: 700,
      lineHeight: 18,
      letterSpacing: "normal",
    },
  },
  [PresetType.Navigation_primary24]: {
    variant: "plain",
    height: 24,
    padding: "0 10px",
    borderRadius: 12,
    backgroundColor: "rgba(29, 155, 240, 0)",
    hoverBackgroundColor: "rgba(29, 155, 240, 0.1)",
    contentColor: "rgba(29, 155, 240, 1)",
    rippleDisabled: true,
  },
};
