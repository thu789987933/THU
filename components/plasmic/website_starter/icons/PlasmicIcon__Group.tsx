/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GroupIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GroupIcon(props: GroupIconProps) {
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
        d={
          "M6.381 2.969c-.25 1.04-.694.841-.912 1.748A2.391 2.391 0 016.587.067c-.436 1.813.018 1.972-.206 2.902zM3.05 3.74c.911.558.585.92 1.38 1.407a2.391 2.391 0 01-4.077-2.5c1.59.975 1.88.592 2.696 1.092zm-.297 3.406c.813-.694 1.056-.273 1.765-.878A2.391 2.391 0 01.881 9.373c1.418-1.211 1.144-1.606 1.872-2.227zm3.148 1.335c-.409-.988.067-1.088-.29-1.95a2.391 2.391 0 011.83 4.419C6.726 9.227 6.266 9.365 5.9 8.481zM8.144 5.9c-1.066.083-1.015-.4-1.945-.328a2.392 2.392 0 014.768-.374c-1.86.146-1.87.627-2.823.701z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GroupIcon;
/* prettier-ignore-end */
