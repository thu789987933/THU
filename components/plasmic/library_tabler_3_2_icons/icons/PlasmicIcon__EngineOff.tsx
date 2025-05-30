/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EngineOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EngineOffIcon(props: EngineOffIconProps) {
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
          "M3 10v6m9-11v3m-2-3h4m-9 8H3m13 3h-1v2a1 1 0 01-1 1h-3.465a1 1 0 01-.832-.445L8 16H6v-6h2l.99-.99M12 8h1.382a1 1 0 01.894.553l1.448 2.894a1 1 0 00.894.553H18v-2h2a1 1 0 011 1v6M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default EngineOffIcon;
/* prettier-ignore-end */
