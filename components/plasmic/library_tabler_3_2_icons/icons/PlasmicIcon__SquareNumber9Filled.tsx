/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SquareNumber9FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SquareNumber9FilledIcon(props: SquareNumber9FilledIconProps) {
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
          "M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005.195v12.666c0 1.96-1.537 3.56-3.472 3.662l-.195.005H5.667a3.667 3.667 0 01-3.662-3.472L2 18.333V5.667c0-1.96 1.537-3.56 3.472-3.662L5.667 2h12.666zM13 7h-2l-.15.005a2 2 0 00-1.844 1.838L9 9v2l.005.15a2 2 0 001.838 1.844L11 13h2v2h-2l-.007-.117A1 1 0 009 15a2 2 0 001.85 1.995L11 17h2l.15-.005a2 2 0 001.844-1.838L15 15V9l-.005-.15a2 2 0 00-1.838-1.844L13 7zm0 2v2h-2V9h2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SquareNumber9FilledIcon;
/* prettier-ignore-end */
