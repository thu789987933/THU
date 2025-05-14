/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group1329IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group1329Icon(props: Group1329IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 6"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M1 1l4.004 4 4.003-4"} stroke={"currentColor"}></path>
    </svg>
  );
}

export default Group1329Icon;
/* prettier-ignore-end */
