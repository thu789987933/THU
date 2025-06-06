/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CircleKeyFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CircleKeyFilledIcon(props: CircleKeyFilledIconProps) {
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
          "M12 2c5.523 0 10 4.477 10 10A10 10 0 1112 2zm2 5a3 3 0 00-2.98 2.65l-.015.174L11 10l.005.176c.019.319.087.624.197.908l.09.209-3.5 3.5-.082.094a1 1 0 000 1.226l.083.094 1.5 1.5.094.083a1 1 0 001.226 0l.094-.083.083-.094a1 1 0 000-1.226l-.083-.094-.792-.793.585-.585.793.792.094.083a1 1 0 001.403-1.403l-.083-.094-.792-.793.792-.792A3 3 0 1014 7zm0 2a1 1 0 110 2 1 1 0 010-2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CircleKeyFilledIcon;
/* prettier-ignore-end */
