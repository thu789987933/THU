/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HelpSquareRoundedFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HelpSquareRoundedFilledIcon(
  props: HelpSquareRoundedFilledIconProps
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
          "M12 2l.642.005.616.017.299.013.579.034.553.046c4.687.455 6.65 2.333 7.166 6.906l.03.29.046.553.041.727.006.15.017.617L22 12l-.005.642-.017.616-.013.299-.034.579-.046.553c-.455 4.687-2.333 6.65-6.906 7.166l-.29.03-.553.046-.727.041-.15.006-.617.017L12 22l-.642-.005-.616-.017-.299-.013-.579-.034-.553-.046c-4.687-.455-6.65-2.333-7.166-6.906l-.03-.29-.046-.553-.041-.727-.006-.15-.017-.617-.004-.318v-.648l.004-.318.017-.616.013-.299.034-.579.046-.553c.455-4.687 2.333-6.65 6.906-7.166l.29-.03.553-.046.727-.041.15-.006.617-.017c.21-.003.424-.005.642-.005zm0 13a1 1 0 00-.993.883L11 16l.007.127a1 1 0 001.986 0L13 16.01l-.007-.127A1 1 0 0012 15zm1.368-6.673a2.98 2.98 0 00-3.631.728 1 1 0 001.44 1.383l.171-.18a.98.98 0 011.11-.15 1 1 0 01-.34 1.886l-.232.012A1 1 0 0011.997 14a3 3 0 001.371-5.673z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default HelpSquareRoundedFilledIcon;
/* prettier-ignore-end */
