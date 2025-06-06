/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TopologyStarRingIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TopologyStarRingIcon(props: TopologyStarRingIconProps) {
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
          "M14 20a2 2 0 10-4 0 2 2 0 004 0zm0-16a2 2 0 10-4 0 2 2 0 004 0zm-8 8a2 2 0 10-4 0 2 2 0 004 0zm16 0a2 2 0 10-4 0 2 2 0 004 0zm-8 0a2 2 0 10-4 0 2 2 0 004 0zm-8 0h4m4 0h4m-4.5-6.5l5 5m-13 3l5 5m3 0l5-5m-8-8l-5 5M12 6v4m0 4v4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TopologyStarRingIcon;
/* prettier-ignore-end */
