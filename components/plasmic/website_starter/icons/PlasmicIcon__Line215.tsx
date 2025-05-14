/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Line215IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Line215Icon(props: Line215IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 92 1"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        opacity={".5"}
        stroke={"currentColor"}
        strokeWidth={".5"}
        d={"M0 .75h92"}
      ></path>
    </svg>
  );
}

export default Line215Icon;
/* prettier-ignore-end */
