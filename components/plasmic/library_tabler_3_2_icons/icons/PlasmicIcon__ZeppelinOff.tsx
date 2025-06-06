/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ZeppelinOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ZeppelinOffIcon(props: ZeppelinOffIconProps) {
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
          "M15.773 15.783c-.723.141-1.486.217-2.273.217-2.13 0-4.584-.926-7.364-2.777L4 15v-3.33A46.078 46.078 0 012 10a46.07 46.07 0 012-1.67V5l2.135 1.778c.13-.087.261-.172.39-.256m2.564-1.42C10.69 4.367 12.16 4 13.5 4c4.694 0 8.5 2.686 8.5 6 0 1.919-1.276 3.627-3.261 4.725"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M10 15.5V20h6v-4M3 3l18 18"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ZeppelinOffIcon;
/* prettier-ignore-end */
