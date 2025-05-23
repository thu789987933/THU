/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CherryIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CherryIcon(props: CherryIconProps) {
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
          "M4 16.5a3.5 3.5 0 107 0 3.5 3.5 0 00-7 0zM14 18a3 3 0 106 0 3 3 0 00-6 0zm-5-5c.366-2 1.866-3.873 4.5-5.6M17 15c-1.333-2.333-2.333-5.333-1-9"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M5 6c3.667-2.667 7.333-2.667 11 0-3.667 2.667-7.333 2.667-11 0z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CherryIcon;
/* prettier-ignore-end */
