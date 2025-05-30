/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ZoomCheckFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ZoomCheckFilledIcon(props: ZoomCheckFilledIconProps) {
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
          "M14 3.072a8 8 0 012.617 11.424l4.944 4.943a1.5 1.5 0 01-2.008 2.225l-.114-.103-4.943-4.944a8 8 0 01-12.49-6.332L2 10l.005-.285A8 8 0 0114 3.072zm-.293 4.22a1 1 0 00-1.414 0L9 10.586 7.707 9.293l-.094-.083a1 1 0 00-1.32 1.497l2 2 .094.083a1 1 0 001.32-.083l4-4 .083-.094a1 1 0 00-.083-1.32v-.001z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ZoomCheckFilledIcon;
/* prettier-ignore-end */
