/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group8Icon(props: Group8IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 11"}
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
          "M.092 3.633C.092 2.306.046 1.175 0 .24h3.025l.161 1.458h.069C3.713 1.022 4.859 0 6.715 0c2.291 0 4.01 1.436 4.01 4.568v6.311H7.242V4.983c0-1.372-.504-2.307-1.764-2.307-.963 0-1.535.63-1.764 1.24-.092.218-.138.522-.138.827v6.136H.094V3.633H.092z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group8Icon;
/* prettier-ignore-end */
