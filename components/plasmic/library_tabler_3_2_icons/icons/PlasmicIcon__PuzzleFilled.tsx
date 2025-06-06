/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PuzzleFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PuzzleFilledIcon(props: PuzzleFilledIconProps) {
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
          "M10 2a3 3 0 012.995 2.824L13 5v1h3a2 2 0 011.995 1.85L18 8v3h1a3 3 0 01.176 5.995L19 17h-1v3a2 2 0 01-1.85 1.995L16 22h-3a2 2 0 01-1.995-1.85L11 20v-1a1 1 0 00-1.993-.117L9 19v1a2 2 0 01-1.85 1.995L7 22H4a2 2 0 01-1.995-1.85L2 20v-3a2 2 0 011.85-1.995L4 15h1a1 1 0 00.117-1.993L5 13H4a2 2 0 01-1.995-1.85L2 11V8a2 2 0 011.85-1.995L4 6h3V5a3 3 0 013-3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PuzzleFilledIcon;
/* prettier-ignore-end */
