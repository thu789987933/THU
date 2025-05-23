/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BoomFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BoomFilledIcon(props: BoomFilledIconProps) {
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
          "M7.514 3.836c.151-.909 1.346-1.147 1.834-.366 2.294 3.67 4.275 4.048 5.758 1.083C15.577 3.609 17 3.945 17 5c0 2.448 1.552 4 4 4 .89 0 1.337 1.077.707 1.707-1.61 1.61-1.61 2.975 0 4.581.63.63.185 1.707-.706 1.708C18.553 16.999 18 17.552 18 20c0 .961-1.223 1.369-1.8.6-2.325-3.1-5.494-2.856-7.368-.045-.503.754-1.67.504-1.818-.39-.365-2.188-1.04-2.656-4.178-3.179a1 1 0 01-.543-1.693c1.618-1.618 1.618-3.027-.053-4.981l-.009-.013-.013-.014-.044-.062-.01-.011-.006-.013-.038-.066-.017-.028-.001-.004-.027-.066-.019-.041a1 1 0 01-.051-.233l-.002-.045L2 9.648a1 1 0 01.06-.328l.009-.023.023-.049.011-.029.009-.015.007-.016.019-.029.02-.035.012-.017.013-.022.027-.034.011-.016.018-.02.02-.025.021-.02.015-.017.035-.032.02-.019.009-.007.018-.015.055-.039.018-.015.008-.004.01-.007.061-.034.028-.016.004-.002.063-.026.044-.019a1 1 0 01.115-.032l.004-.002.267-.063c2.39-.613 3.934-2.19 4.411-4.523l.049-.262z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BoomFilledIcon;
/* prettier-ignore-end */
