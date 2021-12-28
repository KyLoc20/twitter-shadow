import { sxProps } from "@/system/sx";
export { PresetType, PRESET_FACTORY };
//default #0f1419
//light #536471
//primary #1d9bf0
enum PresetType {
  Navigation_default20,
  Title_default20,
  Content_default15,
  Content_light15,
  Content_light13,
  Content_primary14,
}
type CustomTextFactory = {
  [key in PresetType]: sxProps;
};

const PRESET_FACTORY: CustomTextFactory = {
  //Title
  [PresetType.Title_default20]: {
    fontSize: 20,
    fontWeight: 700,
    color: "#0f1419",
    letterSpacing: "normal",
  },
  //Content
  [PresetType.Content_primary14]: {
    fontSize: 14,
    color: "#1d9bf0",
    letterSpacing: "normal",
  },
  [PresetType.Content_default15]: {
    fontSize: 15,
    fontWeight: 400,
    color: "#0f1419",
    letterSpacing: "normal",
  },
  [PresetType.Content_light15]: {
    fontSize: 15,
    fontWeight: 400,
    color: "#536471",
    letterSpacing: "normal",
  },
  [PresetType.Content_light13]: {
    fontSize: 13,
    fontWeight: 400,
    color: "#536471",
    letterSpacing: "normal",
  },
  //Navigation
  [PresetType.Navigation_default20]: {
    fontSize: 20,
    fontWeight: 400,
    color: "#0f1419",
    letterSpacing: "normal",
  },
};
