/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse76IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse76Icon(props: Ellipse76IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 7"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"3.5"}
        cy={"3.5"}
        r={"3.15"}
        stroke={"currentColor"}
        strokeWidth={".7"}
      ></circle>
    </svg>
  );
}

export default Ellipse76Icon;
/* prettier-ignore-end */
