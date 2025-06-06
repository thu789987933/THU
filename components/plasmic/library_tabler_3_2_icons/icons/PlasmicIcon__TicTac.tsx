/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TicTacIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TicTacIcon(props: TicTacIconProps) {
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
          "M4 6a2 2 0 104 0 2 2 0 00-4 0zm-1 6h18m-9-9v18m-8-5l4 4m-4 0l4-4m8-12l4 4m-4 0l4-4m-4 14a2 2 0 104 0 2 2 0 00-4 0z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TicTacIcon;
/* prettier-ignore-end */
