/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeviceIpadIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DeviceIpadIcon(props: DeviceIpadIconProps) {
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
          "M18 2a3 3 0 012.995 2.824L21 5v14a3 3 0 01-2.824 2.995L18 22H6a3 3 0 01-2.995-2.824L3 19V5a3 3 0 012.824-2.995L6 2h12zm-3 15H9l-.117.007a1 1 0 000 1.986L9 19h6l.117-.007a1 1 0 000-1.986L15 17z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DeviceIpadIcon;
/* prettier-ignore-end */
