/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InfoSquareFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function InfoSquareFilledIcon(props: InfoSquareFilledIconProps) {
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
          "M19 2a3 3 0 012.995 2.824L22 5v14a3 3 0 01-2.824 2.995L19 22H5a3 3 0 01-2.995-2.824L2 19V5a3 3 0 012.824-2.995L5 2h14zm-7 9h-1l-.117.007a1 1 0 000 1.986L11 13v3l.007.117a1 1 0 00.876.876L12 17h1l.117-.007a1 1 0 00.876-.876L14 16l-.007-.117a1 1 0 00-.764-.857l-.112-.02L13 15v-3l-.007-.117a1 1 0 00-.876-.876L12 11zm.01-3l-.127.007a1 1 0 000 1.986L12 10l.127-.007a1 1 0 000-1.986L12.01 8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default InfoSquareFilledIcon;
/* prettier-ignore-end */
