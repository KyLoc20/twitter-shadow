import * as React from "react";
import styled from "@emotion/styled";
import { Link } from "../generic/Link";
type FamousCaseCardProps = {
  children?: React.ReactNode;
  winWidth?: number;
  zIndex: number;
  offsetX: number;
  offsetY: number;
  scale: number;
  imgUrl: string;
  caseLink: string;
  name: string;
};
type CaseProps = {
  url: string;
};
export default function FamousCaseCard(props: FamousCaseCardProps) {
  const { zIndex, offsetX, offsetY, scale, name } = props;
  const computedTransform = React.useMemo(() => {
    return `scale(${scale}) translate3d(${offsetX}px, ${offsetY}px, 0)`;
  }, [offsetX, offsetY, scale]);
  const computedZIndex = React.useMemo(() => {
    return zIndex;
  }, [zIndex]);
  const computedMargin = React.useMemo(() => {
    const w = props.winWidth || 1024;
    if (w >= 1024) return "0 calc(7.142857142857143vw - 165px)";
    //(100vw/7-330px)/2
    else undefined;
  }, [props.winWidth]);
  const computedFlex = React.useMemo(() => {
    const w = props.winWidth || 1024;
    if (w >= 1024) return "1 1 330px";
    else if (w > 640) return "1 1 33.33%";
    else return "1 1 100%";
  }, [props.winWidth]);
  const computedPadding = React.useMemo(() => {
    const w = props.winWidth || 1024;
    if (w >= 1024) return undefined;
    else return "8px";
  }, [props.winWidth]);
  const computedBoxShadow = React.useMemo(() => {
    const w = props.winWidth || 1024;
    if (w >= 1024)
      return "0 10px 20px rgba(0, 0, 0, 0.08), 0 5px 12px rgb(0, 0, 0, 0.1)";
    else return undefined;
  }, [props.winWidth]);

  return (
    <Component
      style={{
        zIndex: computedZIndex,
        transform: computedTransform,
        margin: computedMargin,
        padding: computedPadding,
        flex: computedFlex,
        boxShadow: computedBoxShadow,
      }}
    >
      <Link href={props.caseLink}>
        <Image className="image" url={props.imgUrl}></Image>
        <NameInfo className="name-info">{name}</NameInfo>
      </Link>
    </Component>
  );
}
//todo [Image] -> opacity using <img>
const Component = styled.div`
  box-sizing: border-box;
  border-radius: 7px;
  .name-info {
    opacity: 0;
  }
  .image {
    opacity: 0.8;
    transition: all 0.5s ease;
  }
  &:hover {
    opacity: 1;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    .name-info,
    .image {
      opacity: 1;
    }
  }
  background: #fff;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Image = styled.div`
  border-radius: 7px;
  max-width: 100%;
  height: 192px;
  background: url(${(props: CaseProps) => props.url});
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
`;
const NameInfo = styled.div`
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  bottom: 0px;
  padding: 1rem;
  text-align: center;
  color: white;
  background: rgba(0, 0, 0, 0.8);
  transition: opacity 0.6s ease 0s;
  opacity: 0;
`;
