/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SqlIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SqlIcon(props: SqlIconProps) {
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
          "M12 8a2 2 0 012 2v4a2 2 0 01-4 0v-4a2 2 0 012-2zm5 0v8h4m-8-1l1 1M3 15a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 00-1-1H4a1 1 0 01-1-1V9a1 1 0 011-1h2a1 1 0 011 1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SqlIcon;
/* prettier-ignore-end */
