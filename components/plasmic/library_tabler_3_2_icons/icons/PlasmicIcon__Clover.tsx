/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CloverIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CloverIcon(props: CloverIconProps) {
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
          "M12 10L8.603 6.56a2.104 2.104 0 010-2.95 2.04 2.04 0 012.912 0L12 4l.485-.39a2.04 2.04 0 012.912 0 2.104 2.104 0 010 2.95L12 10zm0 4l-3.397 3.44a2.104 2.104 0 000 2.95 2.041 2.041 0 002.912 0L12 20l.485.39a2.041 2.041 0 002.912 0 2.104 2.104 0 000-2.95L12 14zm2-2l3.44-3.397a2.104 2.104 0 012.95 0 2.041 2.041 0 010 2.912L20 12l.39.485a2.041 2.041 0 010 2.912 2.104 2.104 0 01-2.95 0L14 12zm-4 0L6.56 8.603a2.104 2.104 0 00-2.95 0 2.04 2.04 0 000 2.912L4 12l-.39.485a2.04 2.04 0 000 2.912 2.104 2.104 0 002.95 0L10 12z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CloverIcon;
/* prettier-ignore-end */
