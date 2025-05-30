/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Badge3DFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Badge3DFilledIcon(props: Badge3DFilledIconProps) {
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
          "M19 4a3 3 0 013 3v10a3 3 0 01-3 3H5a3 3 0 01-3-3V7a3 3 0 013-3h14zM8.5 8H7a1 1 0 000 2h1.5a.5.5 0 01.09.992L8.5 11H8c-1.287 0-1.332 1.864-.133 1.993L8 13h.5a.5.5 0 010 1H7a1 1 0 000 2h1.5a2.5 2.5 0 002.5-2.5l-.005-.164a2.5 2.5 0 00-.477-1.312L10.499 12l.019-.024A2.5 2.5 0 008.5 8zM15 8h-1a1 1 0 00-1 1v6a1 1 0 001 1h1a3 3 0 003-3v-2a3 3 0 00-3-3zm0 2a1 1 0 011 1v2a1 1 0 01-.883.993L15 14v-4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Badge3DFilledIcon;
/* prettier-ignore-end */
