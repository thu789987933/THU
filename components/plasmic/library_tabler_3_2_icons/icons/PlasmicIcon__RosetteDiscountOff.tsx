/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RosetteDiscountOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RosetteDiscountOffIcon(props: RosetteDiscountOffIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M9 15l3-3m2-2l1-1m-5.852.145A.498.498 0 009.5 10a.5.5 0 00.35-.142m4.298 4.287A.498.498 0 0014.5 15a.5.5 0 00.35-.142"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M8.887 4.89a2.2 2.2 0 00.863-.53l.7-.7a2.2 2.2 0 013.12 0l.7.7c.412.41.97.64 1.55.64h1a2.2 2.2 0 012.2 2.2v1c0 .58.23 1.138.64 1.55l.7.7a2.199 2.199 0 010 3.12l-.7.7a2.2 2.2 0 00-.528.858m-.757 3.248a2.192 2.192 0 01-1.555.644h-1a2.2 2.2 0 00-1.55.64l-.7.7a2.199 2.199 0 01-3.12 0l-.7-.7a2.2 2.2 0 00-1.55-.64h-1a2.2 2.2 0 01-2.2-2.2v-1a2.2 2.2 0 00-.64-1.55l-.7-.7a2.2 2.2 0 010-3.12l.7-.7A2.2 2.2 0 005 8.2v-1c0-.604.244-1.152.638-1.55M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default RosetteDiscountOffIcon;
/* prettier-ignore-end */
