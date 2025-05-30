/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RosetteDiscountCheckFilledIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function RosetteDiscountCheckFilledIcon(
  props: RosetteDiscountCheckFilledIconProps
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
          "M12.01 2.011a3.2 3.2 0 012.113.797l.154.145.698.698c.192.19.442.31.71.341L15.82 4h1a3.2 3.2 0 013.195 3.018l.005.182v1c0 .27.092.533.258.743l.09.1.697.698a3.2 3.2 0 01.147 4.382l-.145.154-.698.698a1.2 1.2 0 00-.341.71l-.008.135v1a3.2 3.2 0 01-3.018 3.195l-.182.005h-1a1.2 1.2 0 00-.743.258l-.1.09-.698.697a3.2 3.2 0 01-4.382.147l-.154-.145-.698-.698a1.2 1.2 0 00-.71-.341L8.2 20.02h-1a3.2 3.2 0 01-3.195-3.018L4 16.82v-1a1.2 1.2 0 00-.258-.743l-.09-.1-.697-.698a3.2 3.2 0 01-.147-4.382l.145-.154.698-.698a1.2 1.2 0 00.341-.71L4 8.2v-1l.005-.182a3.2 3.2 0 013.013-3.013L7.2 4h1a1.2 1.2 0 00.743-.258l.1-.09.698-.697a3.2 3.2 0 012.269-.944zm3.697 7.282a1 1 0 00-1.414 0L11 12.585l-1.293-1.292-.094-.083a1 1 0 00-1.32 1.497l2 2 .094.083a1 1 0 001.32-.083l4-4 .083-.094a1 1 0 00-.083-1.32z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default RosetteDiscountCheckFilledIcon;
/* prettier-ignore-end */
