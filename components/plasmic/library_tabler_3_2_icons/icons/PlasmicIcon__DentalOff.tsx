/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DentalOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DentalOffIcon(props: DentalOffIconProps) {
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
          "M19.277 15.281C19.74 13.531 20 11.437 20 9c0-3.74-1.908-5-4-5-1.423 0-2.92.911-4 1.5C10.926 4.914 9.417 4 8 4M5.157 5.153C4.45 5.937 4 7.17 4 9c0 4.899 1.056 8.41 2.671 10.537.573.756 1.97.521 2.567-.236.398-.505.819-1.439 1.262-2.801.292-.771.892-1.504 1.5-1.5.602 0 1.21.737 1.5 1.5.443 1.362.864 2.295 1.262 2.8.597.759 2 .993 2.567.237.305-.402.59-.853.852-1.353M12 5.5L15 7M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DentalOffIcon;
/* prettier-ignore-end */
