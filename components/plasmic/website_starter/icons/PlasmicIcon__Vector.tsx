/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VectorIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VectorIcon(props: VectorIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M17.771 15.562l-3.508-3.505a.844.844 0 00-.598-.246h-.574A7.315 7.315 0 007.32 0 7.315 7.315 0 000 7.312a7.315 7.315 0 007.32 7.312c1.7 0 3.262-.577 4.504-1.547v.573c0 .225.088.44.246.597l3.509 3.505c.33.33.866.33 1.193 0l.996-.995c.33-.33.33-.864.003-1.195zM7.32 11.812a4.5 4.5 0 110-9 4.5 4.5 0 110 9z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */
