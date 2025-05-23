/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UvIndexIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function UvIndexIcon(props: UvIndexIconProps) {
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
          "M3 12h1m16 0h1M5.6 5.6l.7.7m12.1-.7l-.7.7M8 12a4 4 0 118 0m-4-8V3m1 13l2 5h1l2-5M6 16v3a2 2 0 004 0v-3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default UvIndexIcon;
/* prettier-ignore-end */
