/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AdjustmentsExclamationIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AdjustmentsExclamationIcon(
  props: AdjustmentsExclamationIconProps
) {
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
          "M4 10a2 2 0 104 0 2 2 0 00-4 0zm2-6v4m0 4v8m4-4a2 2 0 104 0 2 2 0 00-4 0zm2-12v10m0 4v2m4-13a2 2 0 104 0 2 2 0 00-4 0zm2-3v1m0 4v3m1 4v3m0 3v.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default AdjustmentsExclamationIcon;
/* prettier-ignore-end */
