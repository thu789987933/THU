/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type OctagonOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function OctagonOffIcon(props: OctagonOffIconProps) {
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
          "M19.027 19.002a2.03 2.03 0 01-.65.444l-5.575 2.39a2.04 2.04 0 01-1.604 0l-5.575-2.39a2.036 2.036 0 01-1.07-1.07l-2.388-5.574a2.036 2.036 0 010-1.604l2.389-5.575c.103-.24.25-.457.433-.639m2.689-1.31l3.522-1.51a2.036 2.036 0 011.604 0l5.575 2.39c.48.206.863.589 1.07 1.07l2.388 5.574c.22.512.22 1.092 0 1.604l-1.509 3.522M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default OctagonOffIcon;
/* prettier-ignore-end */
