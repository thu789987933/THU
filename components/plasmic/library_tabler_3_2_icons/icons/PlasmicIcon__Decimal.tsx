/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DecimalIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DecimalIcon(props: DecimalIconProps) {
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
          "M17 8a2 2 0 012 2v4a2 2 0 01-4 0v-4a2 2 0 012-2zm-7 0a2 2 0 012 2v4a2 2 0 01-4 0v-4a2 2 0 012-2zm-5 8h.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DecimalIcon;
/* prettier-ignore-end */
