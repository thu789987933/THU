/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CircleArrowDownRightFilledIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function CircleArrowDownRightFilledIcon(
  props: CircleArrowDownRightFilledIconProps
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
          "M17 3.34a10 10 0 11-14.995 8.984L2 12l.005-.324A10 10 0 0117 3.34zM15 8l-.117.007A1 1 0 0014 9v3.585L9.707 8.293l-.094-.083a1 1 0 00-1.32 1.497L12.585 14H9l-.117.007A1 1 0 009 16l6.034.001a.998.998 0 00.186-.025l.053-.014.066-.02.13-.059.093-.055A.98.98 0 0016 15V9l-.007-.117A1 1 0 0015 8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CircleArrowDownRightFilledIcon;
/* prettier-ignore-end */
