/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SquareF0FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SquareF0FilledIcon(props: SquareF0FilledIconProps) {
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
          "M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005.195v12.666c0 1.96-1.537 3.56-3.472 3.662l-.195.005H5.667a3.667 3.667 0 01-3.662-3.472L2 18.333V5.667c0-1.96 1.537-3.56 3.472-3.662L5.667 2h12.666zM14.5 8a2.5 2.5 0 00-2.495 2.336L12 10.5v3l.005.164a2.5 2.5 0 004.99 0L17 13.5v-3l-.005-.164A2.5 2.5 0 0014.5 8zM10 8H8l-.117.007a1 1 0 00-.876.876L7 9v6l.007.117a1 1 0 00.876.876L8 16l.117-.007a1 1 0 00.876-.876L9 15v-2h1l.117-.007a1 1 0 000-1.986L10 11H9v-1h1l.117-.007a1 1 0 000-1.986L10 8zm4.5 2a.5.5 0 01.492.41l.008.09v3l-.008.09a.5.5 0 01-.984 0L14 13.5v-3l.008-.09A.5.5 0 0114.5 10z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SquareF0FilledIcon;
/* prettier-ignore-end */
