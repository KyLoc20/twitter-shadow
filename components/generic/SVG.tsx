import * as React from "react";
import styled from "@emotion/styled";
const BasicSVG = styled.svg``;
export type SVGProps = {
  width: number;
  height: number;
  viewBox: string;
  group: GroupProps[];
};
export default function SVG(props: React.PropsWithChildren<SVGProps>) {
  return (
    <BasicSVG
      width={`${props.width}px`}
      height={`${props.height}px`}
      viewBox={props.viewBox}
    >
      {props.group.map((group, index) => (
        <Group {...group} key={index}></Group>
      ))}
    </BasicSVG>
  );
}
type SVGBase = {
  stroke?: string;
  strokeWidth?: string; //todo
  fill?: string;
  hoverFill?: string; //todo
};
export type GroupProps = {
  transform?: string;
  path?: PathProps[];
  rect?: RectProps[];
  circle?: CircleProps[];
  ellipse?: EllipseProps[];
  polygon?: PolygonProps[];
  group?: GroupProps[];
} & SVGBase;
function Group(props: GroupProps) {
  return (
    <g
      transform={props.transform}
      fill={props.fill ? props.fill : "currentColor"}
      stroke={props.stroke ? props.stroke : "currentColor"}
      strokeWidth={props.strokeWidth}
    >
      {props.path &&
        props.path.map((path, index) => <Path {...path} key={index}></Path>)}
      {props.rect &&
        props.rect.map((rect, index) => <Rect {...rect} key={index}></Rect>)}
      {props.circle &&
        props.circle.map((circle, index) => (
          <Circle {...circle} key={index}></Circle>
        ))}
      {props.ellipse &&
        props.ellipse.map((ellipse, index) => (
          <Ellipse {...ellipse} key={index}></Ellipse>
        ))}
      {props.polygon &&
        props.polygon.map((polygon, index) => (
          <Polygon {...polygon} key={index}></Polygon>
        ))}
      {props.group &&
        props.group.map((subGroup, index) => (
          <Group {...subGroup} key={index}></Group>
        ))}
    </g>
  );
}
export type PathProps = {
  d: string;
} & SVGBase;
function Path(props: PathProps) {
  return <path d={props.d} fill={props.fill} />;
}
export type EllipseProps = {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
} & SVGBase;
function Ellipse(props: EllipseProps) {
  return (
    <ellipse
      cx={props.cx}
      cy={props.cy}
      rx={props.rx}
      ry={props.ry}
      fill={props.fill}
    />
  );
}

export type RectProps = {
  width: number;
  height: number;
  cx: number;
  cy: number;
  rx?: number;
  ry?: number;
} & SVGBase;
function Rect(props: RectProps) {
  return (
    <rect
      width={props.width}
      height={props.height}
      cx={props.cx}
      cy={props.cy}
      rx={props.rx}
      ry={props.ry}
      fill={props.fill}
    />
  );
}
export type CircleProps = {
  cx: number;
  cy: number;
  r: number;
} & SVGBase;
function Circle(props: CircleProps) {
  return <circle cx={props.cx} cy={props.cy} r={props.r} fill={props.fill} />;
}
export type PolygonProps = {
  points: string;
} & SVGBase;
function Polygon(props: PolygonProps) {
  return <polygon points={props.points} fill={props.fill} />;
}

export { Group, Path, Ellipse, Polygon, Rect, Circle };
