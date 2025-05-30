/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AspectRatioFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AspectRatioFilledIcon(props: AspectRatioFilledIconProps) {
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
          "M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zM9 7a1 1 0 01.117 1.993L9 9H7v2a1 1 0 01-.883.993L6 12a1 1 0 01-.993-.883L5 11V8a1 1 0 01.883-.993L6 7h3zm9 5a1 1 0 01.993.883L19 13v3a1 1 0 01-.883.993L18 17h-3a1 1 0 01-.117-1.993L15 15h2v-2a1 1 0 01.883-.993L18 12z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AspectRatioFilledIcon;
/* prettier-ignore-end */
