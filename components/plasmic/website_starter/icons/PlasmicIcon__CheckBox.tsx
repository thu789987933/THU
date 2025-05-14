/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CheckBoxIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CheckBoxIcon(props: CheckBoxIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 26"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M18.778 5.778H7.222c-.798 0-1.444.646-1.444 1.444v11.556c0 .798.646 1.444 1.444 1.444h11.556c.798 0 1.444-.646 1.444-1.444V7.222c0-.798-.646-1.444-1.444-1.444zM7.222 4.333a2.889 2.889 0 00-2.889 2.89v11.555a2.889 2.889 0 002.89 2.889h11.555a2.889 2.889 0 002.889-2.89V7.223a2.889 2.889 0 00-2.89-2.889H7.223z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CheckBoxIcon;
/* prettier-ignore-end */
