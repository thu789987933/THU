/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CircleArrowRightFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CircleArrowRightFilledIcon(
  props: CircleArrowRightFilledIconProps
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
          "M12 2l.324.005a10 10 0 11-.648 0L12 2zm.613 5.21a1 1 0 00-1.32 1.497L13.584 11H8l-.117.007A1 1 0 008 13h5.584l-2.291 2.293-.083.094a1 1 0 001.497 1.32l4-4 .073-.082.064-.089.062-.113.044-.11.03-.112.017-.126L17 12l-.007-.118-.029-.148-.035-.105-.054-.113-.071-.111a1.004 1.004 0 00-.097-.112l-4-4-.094-.083z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CircleArrowRightFilledIcon;
/* prettier-ignore-end */
