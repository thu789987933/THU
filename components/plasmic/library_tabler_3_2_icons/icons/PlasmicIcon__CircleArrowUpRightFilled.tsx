/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CircleArrowUpRightFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CircleArrowUpRightFilledIcon(
  props: CircleArrowUpRightFilledIconProps
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
          "M17 3.34a10 10 0 11-14.995 8.984L2 12l.005-.324A10 10 0 0117 3.34zM15 8H9l-.117.007A1 1 0 008 9l.007.117A1 1 0 009 10h3.584l-4.291 4.293-.083.094a1 1 0 001.497 1.32L14 11.414V15l.007.117A1 1 0 0016 15V9l-.007-.117-.029-.149-.035-.105-.054-.113-.071-.111a1.008 1.008 0 00-.097-.112l-.09-.08-.096-.067-.098-.052-.11-.044-.112-.03-.126-.017L15 8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CircleArrowUpRightFilledIcon;
/* prettier-ignore-end */
