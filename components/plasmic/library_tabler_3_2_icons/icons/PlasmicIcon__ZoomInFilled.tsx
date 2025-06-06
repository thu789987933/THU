/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ZoomInFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ZoomInFilledIcon(props: ZoomInFilledIconProps) {
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
          "M14 3.072a8 8 0 012.617 11.424l4.944 4.943a1.5 1.5 0 01-2.008 2.225l-.114-.103-4.943-4.944a8 8 0 01-12.49-6.332L2 10l.005-.285A8 8 0 0114 3.072zM10 6a1 1 0 00-.993.883L9 7v2H7l-.117.007a1 1 0 000 1.986L7 11h2v2l.007.117a1 1 0 001.986 0L11 13v-2h2l.117-.007a1 1 0 000-1.986L13 9h-2V7l-.007-.117A1 1 0 0010 6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ZoomInFilledIcon;
/* prettier-ignore-end */
