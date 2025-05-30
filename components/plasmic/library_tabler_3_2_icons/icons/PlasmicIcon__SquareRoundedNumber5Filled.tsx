/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SquareRoundedNumber5FilledIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function SquareRoundedNumber5FilledIcon(
  props: SquareRoundedNumber5FilledIconProps
) {
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
          "M12 2l.642.005.616.017.299.013.579.034.553.046c4.687.455 6.65 2.333 7.166 6.906l.03.29.046.553.041.727.006.15.017.617L22 12l-.005.642-.017.616-.013.299-.034.579-.046.553c-.455 4.687-2.333 6.65-6.906 7.166l-.29.03-.553.046-.727.041-.15.006-.617.017L12 22l-.642-.005-.616-.017-.299-.013-.579-.034-.553-.046c-4.687-.455-6.65-2.333-7.166-6.906l-.03-.29-.046-.553-.041-.727-.006-.15-.017-.617-.004-.318v-.648l.004-.318.017-.616.013-.299.034-.579.046-.553c.455-4.687 2.333-6.65 6.906-7.166l.29-.03.553-.046.727-.041.15-.006.617-.017c.21-.003.424-.005.642-.005zm2 5h-4a1 1 0 00-.993.883L9 8v4a1 1 0 00.883.993L10 13h3v2h-2l-.007-.117A1 1 0 009 15a2 2 0 001.85 1.995L11 17h2a2 2 0 001.995-1.85L15 15v-2a2 2 0 00-1.85-1.995L13 11h-2V9h3a1 1 0 00.993-.883L15 8a1 1 0 00-.883-.993L14 7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SquareRoundedNumber5FilledIcon;
/* prettier-ignore-end */
