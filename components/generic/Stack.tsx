import * as React from "react";
import styled from "@emotion/styled";
type sxProps = {
  padding?: string;
  margin?: string;
};
type BasicStackProps = {
  padding?: string;
  margin?: string;
};
type BasicUnitProps = {
  eachPadding?: string;
  eachMargin?: string;
};
export type StackProps = {
  children?: React.ReactNode;
} & BasicStackProps &
  BasicUnitProps;
const genPropsForStack = (props: BasicStackProps): sxProps => {
  return {
    padding: props.padding,
    margin: props.margin,
  };
};
const genPropsForUnit = (props: BasicUnitProps): sxProps => {
  return {
    padding: props.eachPadding,
    margin: props.eachMargin,
  };
};
export default function Stack(props: StackProps) {
  let stackItems = React.Children.map(props.children, (child, index) => (
    <UnitWrapper key={index} {...genPropsForUnit(props)}>
      {child}
    </UnitWrapper>
  ));
  return <BasicStack {...genPropsForStack(props)}>{stackItems}</BasicStack>;
}
//classical way text-align: center& inline-block
const BasicStack = styled.div`
  text-align: center;
  padding: ${(props: sxProps) => props.padding};
  margin: ${(props: sxProps) => props.margin};
`;
const UnitWrapper = styled.span`
  display: inline-block;
  padding: ${(props: sxProps) => props.padding};
  margin: ${(props: sxProps) => props.margin};
`;
