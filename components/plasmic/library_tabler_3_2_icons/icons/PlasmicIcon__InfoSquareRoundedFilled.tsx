/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InfoSquareRoundedFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function InfoSquareRoundedFilledIcon(
  props: InfoSquareRoundedFilledIconProps
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
          "M12 2l.642.005.616.017.299.013.579.034.553.046c4.687.455 6.65 2.333 7.166 6.906l.03.29.046.553.041.727.006.15.017.617L22 12l-.005.642-.017.616-.013.299-.034.579-.046.553c-.455 4.687-2.333 6.65-6.906 7.166l-.29.03-.553.046-.727.041-.15.006-.617.017L12 22l-.642-.005-.616-.017-.299-.013-.579-.034-.553-.046c-4.687-.455-6.65-2.333-7.166-6.906l-.03-.29-.046-.553-.041-.727-.006-.15-.017-.617-.004-.318v-.648l.004-.318.017-.616.013-.299.034-.579.046-.553c.455-4.687 2.333-6.65 6.906-7.166l.29-.03.553-.046.727-.041.15-.006.617-.017c.21-.003.424-.005.642-.005zm0 9h-1l-.117.007a1 1 0 000 1.986L11 13v3l.007.117a1 1 0 00.876.876L12 17h1l.117-.007a1 1 0 00.876-.876L14 16l-.007-.117a1 1 0 00-.764-.857l-.112-.02L13 15v-3l-.007-.117a1 1 0 00-.876-.876L12 11zm.01-3l-.127.007a1 1 0 000 1.986L12 10l.127-.007a1 1 0 000-1.986L12.01 8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default InfoSquareRoundedFilledIcon;
/* prettier-ignore-end */
