/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowBigRightLinesIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowBigRightLinesIcon(props: ArrowBigRightLinesIconProps) {
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
          "M12 9V5.414a1 1 0 011.707-.707l6.586 6.586a1 1 0 010 1.414l-6.586 6.586A1 1 0 0112 18.586V15H9V9h3zM3 9v6m3-6v6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ArrowBigRightLinesIcon;
/* prettier-ignore-end */
