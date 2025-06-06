/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PlayerTrackNextFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PlayerTrackNextFilledIcon(
  props: PlayerTrackNextFilledIconProps
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
          "M2 5v14c0 .86 1.012 1.318 1.659.753l8-7a1 1 0 000-1.506l-8-7C3.012 3.682 2 4.141 2 5zm11 0v14c0 .86 1.012 1.318 1.659.753l8-7a1 1 0 000-1.506l-8-7C14.012 3.682 13 4.141 13 5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PlayerTrackNextFilledIcon;
/* prettier-ignore-end */
