import defBox from "./define";
import genBox from "./generate";
import { Box, BoxProps } from "./base";

export default Box;
export { genBox, defBox };
export type { BoxProps };

/**
 * Inline CSS Styles, ref to https://reactjs.org/docs/faq-styling.html
 * According to the React Docs using the style attributes as the primary means of styling elements is generally NOT recommended.
 * For STATIC styles using the className and external stylesheets is recommended.
 * For DYNAMICALLY-computed styles at render time using the style is recommended.
 */

// const Box1 = genBox({ w: 200, h: 200, bg: "red" });
// const Box2 = genBox({ w: 200, h: 200, my: "-10px", bg: "green" });
// <Box1 bg="yellow" className="123" mt="12px"></Box1>
// <Box2></Box2>
