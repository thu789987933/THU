/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PlayerSkipBackFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PlayerSkipBackFilledIcon(props: PlayerSkipBackFilledIconProps) {
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
          "M19.496 4.136l-12 7a1 1 0 000 1.728l12 7A1 1 0 0021 19V5a1 1 0 00-1.504-.864zM4 4a1 1 0 01.993.883L5 5v14a1 1 0 01-1.993.117L3 19V5a1 1 0 011-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PlayerSkipBackFilledIcon;
/* prettier-ignore-end */
