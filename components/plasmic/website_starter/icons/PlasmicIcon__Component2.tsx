/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Component2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Component2Icon(props: Component2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M9.367 11.685L5.125 7.442l.707-.707 3.535 3.536 3.536-3.536.707.707-4.243 4.243z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Component2Icon;
/* prettier-ignore-end */
