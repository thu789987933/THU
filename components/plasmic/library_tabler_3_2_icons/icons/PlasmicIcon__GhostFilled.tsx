/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GhostFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GhostFilledIcon(props: GhostFilledIconProps) {
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
          "M12 3a8 8 0 017.996 7.75L20 11l-.001 6.954.01.103a2.78 2.78 0 01-1.468 2.618l-.163.08c-1.053.475-2.283.248-3.129-.593l-.137-.146a.65.65 0 00-1.024 0 2.65 2.65 0 01-4.176 0 .65.65 0 00-.512-.25c-.2 0-.389.092-.55.296a2.78 2.78 0 01-4.859-2.005l.008-.091L4 11l.004-.25A8 8 0 0112 3zm2.82 10.429a1 1 0 00-1.391-.25 2.5 2.5 0 01-2.858 0 1 1 0 00-1.142 1.642 4.5 4.5 0 005.142 0 1 1 0 00.25-1.392h-.001zM10.01 9l-.127.007A1 1 0 0010 11l.127-.007A1 1 0 0010.01 9zm4 0l-.127.007A1 1 0 0014 11l.127-.007A1 1 0 0014.01 9z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GhostFilledIcon;
/* prettier-ignore-end */
