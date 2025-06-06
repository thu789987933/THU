/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BowFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BowFilledIcon(props: BowFilledIconProps) {
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
          "M21 2l.081.003.12.017.111.03.111.044.098.052.096.067.09.08a.9.9 0 01.097.112l.071.11.031.062.034.081.024.076.03.148L22 3v4a1 1 0 01-2 0V5.414l-2.07 2.07C19.231 9.108 20 11.19 20 13.5c0 2.703-1.047 5.462-2.793 7.207a1 1 0 01-1.414 0l-5.543-5.542L7 18.414V21a1 1 0 11-2 0v-2H3a1 1 0 01-.993-.883L2 18a1 1 0 011-1h2.584l3.251-3.25-5.542-5.543a1 1 0 01-.002-1.412C5.036 5.04 7.78 4 10.5 4c2.31 0 4.393.768 6.015 2.07L18.584 4H17a1 1 0 01-.993-.883L16 3a1 1 0 011-1h4zm-4.495 6.91L12.415 13l4.595 4.594a9.1 9.1 0 00.985-3.795L18 13.5c0-1.754-.55-3.336-1.495-4.59zM10.5 6c-1.44 0-2.89.36-4.098.987L11 11.585l4.09-4.09C13.836 6.55 12.254 6 10.5 6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BowFilledIcon;
/* prettier-ignore-end */
