/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandFirebaseIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandFirebaseIcon(props: BrandFirebaseIconProps) {
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
          "M4.53 17.05l6.15-11.72h-.02c.38-.74 1.28-1.02 2.01-.63.26.14.48.36.62.62l1.06 2.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M15.47 6.45c.58-.59 1.53-.59 2.11-.01.22.22.36.5.41.81l1.5 9.11c.1.62-.2 1.24-.76 1.54l-6.07 2.9c-.46.25-1.01.26-1.46 0l-6.02-2.92c-.55-.31-.85-.92-.75-1.54L6.39 4.3c.12-.82.89-1.38 1.7-1.25.46.07.87.36 1.09.77l1.24 1.76m-5.85 11.6L15.5 6.5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandFirebaseIcon;
/* prettier-ignore-end */
