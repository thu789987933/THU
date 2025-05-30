/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandVivaldiIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandVivaldiIcon(props: BrandVivaldiIconProps) {
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
          "M21.648 6.808c-2.468 4.28-4.937 8.56-7.408 12.836-.397.777-1.366 1.301-2.24 1.356-.962.102-1.7-.402-2.154-1.254-1.563-2.684-3.106-5.374-4.66-8.064-.943-1.633-1.891-3.266-2.83-4.905a2.47 2.47 0 01-.06-2.45A2.493 2.493 0 014.381 3.02a2.39 2.39 0 012.287 1.281c.697 1.19 2.043 3.83 2.55 4.682A3.92 3.92 0 0012.5 11c2.126.133 3.974-.95 4.21-3.058 0-.164.228-3.178.846-3.962.619-.784 1.64-1.155 2.606-.893a2.484 2.484 0 011.814 2.062 2.57 2.57 0 01-.343 1.674"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandVivaldiIcon;
/* prettier-ignore-end */
