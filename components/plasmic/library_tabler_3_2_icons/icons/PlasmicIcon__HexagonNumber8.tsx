/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HexagonNumber8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HexagonNumber8Icon(props: HexagonNumber8IconProps) {
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
          "M19.875 6.27A2.225 2.225 0 0121 8.218v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.27 2.27 0 01-2.184 0l-6.75-4.27A2.225 2.225 0 013 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 012.25 0l6.75 3.98h-.033z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M12 12h-1m0 0a1 1 0 01-1-1V9a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1m-2 0h2m-2 0a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 00-1-1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default HexagonNumber8Icon;
/* prettier-ignore-end */
