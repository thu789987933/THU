/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandCitymapperIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandCitymapperIcon(props: BrandCitymapperIconProps) {
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
          "M3 11a1 1 0 11-1 1.013 1 1 0 011-1V11zm18 0a1 1 0 11-1 1.013 1 1 0 011-1V11zM8 12h8m-3-3l3 3-3 3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandCitymapperIcon;
/* prettier-ignore-end */
