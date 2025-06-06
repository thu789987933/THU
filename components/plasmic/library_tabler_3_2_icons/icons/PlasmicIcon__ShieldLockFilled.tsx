/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ShieldLockFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ShieldLockFilledIcon(props: ShieldLockFilledIconProps) {
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
          "M11.998 2l.118.007.059.008.061.013.111.034a.99.99 0 01.217.112l.104.082.255.218a11 11 0 007.189 2.537l.342-.01a1 1 0 011.005.717 13 13 0 01-9.208 16.25 1 1 0 01-.502 0A13 13 0 012.54 5.718a1 1 0 011.005-.717 11 11 0 007.531-2.527l.263-.225.096-.075a.993.993 0 01.217-.112l.112-.034a.968.968 0 01.119-.021L11.998 2zM12 9a2 2 0 00-1.995 1.85L10 11l.005.15A2 2 0 0011 12.731V14.5l.007.117A1 1 0 0013 14.5l.001-1.768A2 2 0 0012 9z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ShieldLockFilledIcon;
/* prettier-ignore-end */
