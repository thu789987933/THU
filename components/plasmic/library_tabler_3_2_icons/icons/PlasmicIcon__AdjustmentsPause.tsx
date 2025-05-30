/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AdjustmentsPauseIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AdjustmentsPauseIcon(props: AdjustmentsPauseIconProps) {
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
          "M4 10a2 2 0 104 0 2 2 0 00-4 0zm2-6v4m0 4v8m7.627-5.164a2 2 0 10-.62 2.892M12 4v10m0 4v2m4-13a2 2 0 104 0 2 2 0 00-4 0zm2-3v1m-1 12v5m4-5v5M18 9v4.5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default AdjustmentsPauseIcon;
/* prettier-ignore-end */
