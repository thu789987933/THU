/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Line216IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Line216Icon(props: Line216IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 626 1"}
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
        d={"M0 .75h626"}
      ></path>
    </svg>
  );
}

export default Line216Icon;
/* prettier-ignore-end */
