/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CalendarExclamationIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CalendarExclamationIcon(props: CalendarExclamationIconProps) {
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
          "M15 21H6a2 2 0 01-2-2V7a2 2 0 012-2h12a2 2 0 012 2v5m-4-9v4M8 3v4m-4 4h16m-9 4h1m0 0v3m7-2v3m0 3v.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CalendarExclamationIcon;
/* prettier-ignore-end */
