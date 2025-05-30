/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ScriptIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ScriptIcon(props: ScriptIconProps) {
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
          "M17 20H6a3 3 0 010-6h11a3 3 0 000 6zm0 0h1a3 3 0 003-3V6a2 2 0 00-2-2H9a2 2 0 00-2 2v8"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ScriptIcon;
/* prettier-ignore-end */
