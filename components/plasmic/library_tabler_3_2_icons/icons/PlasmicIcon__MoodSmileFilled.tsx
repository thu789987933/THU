/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MoodSmileFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MoodSmileFilledIcon(props: MoodSmileFilledIconProps) {
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
          "M17 3.34a10 10 0 11-14.995 8.984L2 12l.005-.324A10 10 0 0117 3.34zm-1.8 10.946a1 1 0 00-1.414.014 2.5 2.5 0 01-3.572 0 1 1 0 00-1.428 1.4 4.501 4.501 0 006.428 0 1 1 0 00-.014-1.414zM9.01 9l-.127.007A1 1 0 009 11l.127-.007A1 1 0 009.01 9zm6 0l-.127.007A1 1 0 0015 11l.127-.007A1 1 0 0015.01 9z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MoodSmileFilledIcon;
/* prettier-ignore-end */
