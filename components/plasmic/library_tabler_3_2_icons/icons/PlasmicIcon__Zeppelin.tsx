/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ZeppelinIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ZeppelinIcon(props: ZeppelinIconProps) {
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
          "M13.5 4c4.694 0 8.5 2.686 8.5 6s-3.806 6-8.5 6c-2.13 0-4.584-.926-7.364-2.777L4 15v-3.33A46.078 46.078 0 012 10a46.07 46.07 0 012-1.67V5l2.135 1.778C8.915 4.926 11.37 4 13.5 4z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M10 15.5V20h6v-4"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ZeppelinIcon;
/* prettier-ignore-end */
