/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SquareRoundedChevronLeftFilledIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function SquareRoundedChevronLeftFilledIcon(
  props: SquareRoundedChevronLeftFilledIconProps
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
          "M12 2l.324.001.318.004.616.017.299.013.579.034.553.046c4.785.464 6.732 2.411 7.196 7.196l.046.553.034.579c.005.098.01.198.013.299l.017.616L22 12l-.005.642-.017.616-.013.299-.034.579-.046.553c-.464 4.785-2.411 6.732-7.196 7.196l-.553.046-.579.034c-.098.005-.198.01-.299.013l-.616.017L12 22l-.642-.005-.616-.017-.299-.013-.579-.034-.553-.046c-4.785-.464-6.732-2.411-7.196-7.196l-.046-.553-.034-.579c-.005-.1-.01-.2-.013-.299l-.017-.616C2.002 12.432 2 12.218 2 12l.001-.324.004-.318.017-.616.013-.299.034-.579.046-.553c.464-4.785 2.411-6.732 7.196-7.196l.553-.046.579-.034c.098-.005.198-.01.299-.013l.616-.017c.21-.003.424-.005.642-.005zm1.707 6.293a1 1 0 00-1.414 0l-3 3-.083.094a1 1 0 00.083 1.32l3 3 .094.083a1 1 0 001.32-.083l.083-.094a1 1 0 00-.083-1.32L11.415 12l2.292-2.293.083-.094a1 1 0 00-.083-1.32z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SquareRoundedChevronLeftFilledIcon;
/* prettier-ignore-end */
