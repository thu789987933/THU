/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowBigLeftLinesFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowBigLeftLinesFilledIcon(
  props: ArrowBigLeftLinesFilledIconProps
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
          "M9.586 4L3 10.586a2 2 0 000 2.828L9.586 20a2 2 0 002.18.434l.145-.068A2 2 0 0013 18.586V16h2a1 1 0 001-1V9l-.007-.117A1 1 0 0015 8l-2-.001V5.414A2 2 0 009.586 4zM21 8a1 1 0 01.993.883L22 9v6a1 1 0 01-1.993.117L20 15V9a1 1 0 011-1zm-3 0a1 1 0 01.993.883L19 9v6a1 1 0 01-1.993.117L17 15V9a1 1 0 011-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowBigLeftLinesFilledIcon;
/* prettier-ignore-end */
