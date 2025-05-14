/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Line217IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Line217Icon(props: Line217IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 742 1"}
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
        d={"M0 .75h742"}
      ></path>
    </svg>
  );
}

export default Line217Icon;
/* prettier-ignore-end */
