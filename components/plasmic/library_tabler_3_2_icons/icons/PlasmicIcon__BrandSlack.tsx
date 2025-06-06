/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandSlackIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandSlackIcon(props: BrandSlackIconProps) {
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
          "M16 12V6a2 2 0 10-4 0v6h6a2 2 0 10-2-2m-4 6h6a2 2 0 000-4h-6v6a2 2 0 102-2m-6-4v6a2 2 0 004 0v-6H6a2 2 0 102 2m4-6H6a2 2 0 100 4h6V6a2 2 0 10-2 2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandSlackIcon;
/* prettier-ignore-end */
