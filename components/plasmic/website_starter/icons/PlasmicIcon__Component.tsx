/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ComponentIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ComponentIcon(props: ComponentIconProps) {
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
          "M9.367 6.2l-4.242 4.242.707.707 3.535-3.535 3.536 3.535.707-.707L9.367 6.2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ComponentIcon;
/* prettier-ignore-end */
