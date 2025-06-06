/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandLivewireIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandLivewireIcon(props: BrandLivewireIconProps) {
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
          "M20.982 18.777C20.61 19.325 20.33 20 19.576 20c-1.269 0-1.337-1.913-2.607-1.913-1.27 0-1.2 1.913-2.47 1.913-1.268 0-1.337-1.913-2.607-1.913-1.269 0-1.2 1.913-2.47 1.913-1.268 0-1.337-1.913-2.607-1.913-1.27 0-1.2 1.913-2.47 1.913-.398 0-.679-.189-.915-.448A10.414 10.414 0 012 14.262C2 8.593 6.477 4 12 4c5.524 0 10 4.594 10 10.261 0 1.62-.366 3.152-1.018 4.516z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M20.982 18.777C20.61 19.325 20.33 20 19.576 20c-1.269 0-1.337-1.913-2.607-1.913-1.27 0-1.2 1.913-2.47 1.913-1.268 0-1.337-1.913-2.607-1.913-1.269 0-1.2 1.913-2.47 1.913-1.268 0-1.337-1.913-2.607-1.913-1.27 0-1.2 1.913-2.47 1.913-.398 0-.679-.189-.915-.448A10.414 10.414 0 012 14.262C2 8.593 6.477 4 12 4c5.524 0 10 4.594 10 10.261 0 1.62-.366 3.152-1.018 4.516z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M11.5 16c3.167 0 4.5-1.748 4.5-4.231C16 9.285 13.986 7 11.5 7 9.015 7 7 9.286 7 11.769S8.333 16 11.5 16z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M10 11a1 1 0 100-2 1 1 0 000 2z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandLivewireIcon;
/* prettier-ignore-end */
