/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type StormOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function StormOffIcon(props: StormOffIconProps) {
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
          "M9.884 9.874a3 3 0 004.24 4.246m.57-3.441a3.012 3.012 0 00-1.41-1.39"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M7.037 7.063a7 7 0 109.907 9.892m1.585-2.426A7 7 0 009.471 5.47m-4.102 8.766c-1.605-3.428-1.597-6.673-1-9.849"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M18.63 9.76a14.323 14.323 0 011.368 6.251m-.37 3.608c-.087.46-.187.92-.295 1.377M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default StormOffIcon;
/* prettier-ignore-end */
