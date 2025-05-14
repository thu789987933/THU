/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse67IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse67Icon(props: Ellipse67IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 23 22"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <ellipse
        cx={"11.01"}
        cy={"11"}
        rx={"11.01"}
        ry={"11"}
        fill={"currentColor"}
      ></ellipse>
    </svg>
  );
}

export default Ellipse67Icon;
/* prettier-ignore-end */
