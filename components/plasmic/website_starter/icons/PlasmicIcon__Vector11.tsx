/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector11Icon(props: Vector11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 9"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.25 6.75A.751.751 0 011.5 6H0c0 .976.63 1.801 1.5 2.112V9H3v-.888C3.87 7.802 4.5 6.976 4.5 6c0-1.24-1.01-2.25-2.25-2.25a.751.751 0 010-1.5c.413 0 .75.337.75.75h1.5c0-.977-.63-1.802-1.5-2.112V0H1.5v.888C.63 1.198 0 2.023 0 3c0 1.24 1.01 2.25 2.25 2.25a.751.751 0 010 1.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector11Icon;
/* prettier-ignore-end */
