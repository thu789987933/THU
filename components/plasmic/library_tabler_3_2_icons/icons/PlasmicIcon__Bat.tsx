/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BatIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BatIcon(props: BatIconProps) {
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
          "M17 16c.74-2.286 2.778-3.762 5-3-.173-2.595.13-5.314-2-7.5-1.708 2.648-3.358 2.557-5 2.5V4l-3 2-3-2v4c-1.642.057-3.292.148-5-2.5-2.13 2.186-1.827 4.905-2 7.5 2.222-.762 4.26.714 5 3 2.593 0 3.889.952 5 4 1.111-3.048 2.407-4 5-4zM9 8a3 3 0 106 0"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BatIcon;
/* prettier-ignore-end */
