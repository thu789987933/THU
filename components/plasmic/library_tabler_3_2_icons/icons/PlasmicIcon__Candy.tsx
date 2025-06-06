/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CandyIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CandyIcon(props: CandyIconProps) {
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
          "M7.05 11.293l4.243-4.243a2 2 0 012.828 0l2.829 2.83a2 2 0 010 2.828l-4.243 4.243a2 2 0 01-2.828 0L7.05 14.12a2 2 0 010-2.828v.001zm9.193-2.121l3.086-.772a1.5 1.5 0 00.697-2.516L17.81 3.667a1.5 1.5 0 00-2.44.47L14.122 7.05"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M9.172 16.243L8.4 19.329a1.5 1.5 0 01-2.516.697L3.667 17.81a1.5 1.5 0 01.47-2.44l2.913-1.248"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CandyIcon;
/* prettier-ignore-end */
