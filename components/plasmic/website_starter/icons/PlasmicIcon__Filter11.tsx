/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Filter11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Filter11Icon(props: Filter11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 26"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M4.333 8.032c-1.365-1.365-.398-3.699 1.532-3.699h14.27c1.93 0 2.897 2.334 1.532 3.7l-5.417 5.416v7.134c0 1.34-1.529 2.104-2.6 1.3l-3.033-2.275a2.166 2.166 0 01-.867-1.733v-4.426L4.333 8.032zM20.134 6.5H5.865l5.417 5.417c.406.406.635.957.635 1.532v4.426l2.166 1.625v-6.051c0-.575.229-1.126.635-1.532L20.134 6.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Filter11Icon;
/* prettier-ignore-end */
