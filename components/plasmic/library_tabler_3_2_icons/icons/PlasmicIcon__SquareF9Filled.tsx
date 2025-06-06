/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SquareF9FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SquareF9FilledIcon(props: SquareF9FilledIconProps) {
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
          "M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005.195v12.666c0 1.96-1.537 3.56-3.472 3.662l-.195.005H5.667a3.667 3.667 0 01-3.662-3.472L2 18.333V5.667c0-1.96 1.537-3.56 3.472-3.662L5.667 2h12.666zM15.25 8h-1.5l-.144.006A1.75 1.75 0 0012 9.75v1.5l.006.144A1.75 1.75 0 0013.75 13H15v1h-1.033l-.025-.087A1 1 0 0012 14.25c0 .966.784 1.75 1.75 1.75h1.5l.144-.006A1.75 1.75 0 0017 14.25v-4.5l-.006-.144A1.75 1.75 0 0015.25 8zM10 8H8l-.117.007A1 1 0 007 9v6l.007.117A1 1 0 008 16l.117-.007A1 1 0 009 15v-2h1l.117-.007A1 1 0 0010 11H9v-1h1l.117-.007A1 1 0 0010 8zm5 2v1h-1v-1h1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SquareF9FilledIcon;
/* prettier-ignore-end */
