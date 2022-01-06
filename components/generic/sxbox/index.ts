import defBox from "./define";
import genBox from "./generate";
import { Box, BoxProps } from "./base";

export default Box;
export { genBox, defBox };
export type { BoxProps };
// const Box1 = genBox({ w: 200, h: 200, bg: "red" });
// const Box2 = genBox({ w: 200, h: 200, my: "-10px", bg: "green" });
// <Box1 bg="yellow" className="123" mt="12px"></Box1>
// <Box2></Box2>
