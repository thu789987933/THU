/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CircleLetterHFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CircleLetterHFilledIcon(props: CircleLetterHFilledIconProps) {
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
          "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm2 5a1 1 0 00-1 1v3h-2V8a1 1 0 00-.883-.993L10 7a1 1 0 00-1 1v8a1 1 0 102 0v-3h2v3a1 1 0 00.883.993L14 17a1 1 0 001-1V8a1 1 0 00-1-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CircleLetterHFilledIcon;
/* prettier-ignore-end */
