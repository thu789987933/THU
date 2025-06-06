/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Badge4KFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Badge4KFilledIcon(props: Badge4KFilledIconProps) {
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
          "M19 4a3 3 0 013 3v10a3 3 0 01-3 3H5a3 3 0 01-3-3V7a3 3 0 013-3h14zm-9 4a1 1 0 00-1 1v2H8V9a1 1 0 00-2 0v2a2 2 0 002 2h1v2a1 1 0 102 0V9a1 1 0 00-1-1zm7.555.168a1 1 0 00-1.387.277L15 10.196V9a1 1 0 00-.883-.993L14 8a1 1 0 00-1 1v6a1 1 0 002 0v-1.196l1.168 1.75a1 1 0 001.286.337l.1-.059.094-.07a1 1 0 00.184-1.317L16.202 12l1.63-2.445a1 1 0 00-.277-1.387z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Badge4KFilledIcon;
/* prettier-ignore-end */
