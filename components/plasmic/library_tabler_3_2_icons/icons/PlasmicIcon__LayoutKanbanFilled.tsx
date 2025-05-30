/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LayoutKanbanFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LayoutKanbanFilledIcon(props: LayoutKanbanFilledIconProps) {
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
          "M10 3a1 1 0 110 2H4a1 1 0 010-2h6zm10 0a1 1 0 110 2h-6a1 1 0 110-2h6zM8 7a3 3 0 013 3v8a3 3 0 01-3 3H6a3 3 0 01-3-3v-8a3 3 0 013-3h2zm10 0a3 3 0 013 3v2a3 3 0 01-3 3h-2a3 3 0 01-3-3v-2a3 3 0 013-3h2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LayoutKanbanFilledIcon;
/* prettier-ignore-end */
