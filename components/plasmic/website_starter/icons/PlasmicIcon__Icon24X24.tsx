/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon24X24IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon24X24Icon(props: Icon24X24IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M3 5l5.176 5.177L13.353 5"} stroke={"currentColor"}></path>
    </svg>
  );
}

export default Icon24X24Icon;
/* prettier-ignore-end */
