/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MapCancelIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MapCancelIcon(props: MapCancelIconProps) {
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
          "M12 18.5L9 17l-6 3V7l6-3 6 3 6-3v8M9 4v13m6-10v6m1 6a3 3 0 106 0 3 3 0 00-6 0zm1 2l4-4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MapCancelIcon;
/* prettier-ignore-end */
