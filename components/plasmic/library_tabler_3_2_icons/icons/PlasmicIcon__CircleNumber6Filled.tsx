/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CircleNumber6FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CircleNumber6FilledIcon(props: CircleNumber6FilledIconProps) {
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
          "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm1 5h-2l-.15.005a2 2 0 00-1.844 1.838L9 9v6l.005.15a2 2 0 001.838 1.844L11 17h2l.15-.005a2 2 0 001.844-1.838L15 15v-2l-.005-.15a2 2 0 00-1.838-1.844L13 11h-2V9h2l.007.117A1 1 0 0015 9a2 2 0 00-1.85-1.995L13 7zm0 6v2h-2v-2h2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CircleNumber6FilledIcon;
/* prettier-ignore-end */
