/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CompassFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CompassFilledIcon(props: CompassFilledIconProps) {
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
          "M17 3.34A10 10 0 112 12l.005-.324A10 10 0 0117 3.34zM12 18a1 1 0 100 2 1 1 0 000-2zm3.684-10.949l-6 2a1 1 0 00-.633.633L7.044 15.71l-.023.086-.017.113-.004.068v.044l.009.111.012.07.04.144.045.1.054.095.064.09.069.075.084.074.098.07.1.054.078.033.105.033.109.02.043.005.068.004h.044l.111-.009.07-.012.02-.006.019-.002.074-.022 6-2a1 1 0 00.633-.633l2-6a1 1 0 00-1.265-1.264zM14.419 9.58l-1.21 3.629-3.629 1.21 1.21-3.629 3.629-1.21zM5 11a1 1 0 100 2 1 1 0 000-2zm14 0a1 1 0 100 2 1 1 0 000-2zm-7-7a1 1 0 100 2 1 1 0 000-2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CompassFilledIcon;
/* prettier-ignore-end */
