/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SquareF5FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SquareF5FilledIcon(props: SquareF5FilledIconProps) {
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
          "M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005.195v12.666c0 1.96-1.537 3.56-3.472 3.662l-.195.005H5.667a3.667 3.667 0 01-3.662-3.472L2 18.333V5.667c0-1.96 1.537-3.56 3.472-3.662L5.667 2h12.666zM16 8h-3l-.117.007a1 1 0 00-.857.764l-.02.112L12 9v3l.007.117a1 1 0 00.764.857l.112.02L13 13h2v1h-1.033l-.025-.087-.049-.113a1 1 0 00-1.893.45c0 .867.63 1.587 1.458 1.726l.148.018.144.006H15l.157-.006a2 2 0 001.819-1.683l.019-.162L17 14v-1l-.006-.157a2 2 0 00-1.683-1.819l-.162-.019L15 11h-1v-1h2l.117-.007a1 1 0 00.857-.764l.02-.112L17 9l-.007-.117a1 1 0 00-.764-.857l-.112-.02L16 8zm-6 0H8l-.117.007a1 1 0 00-.876.876L7 9v6l.007.117a1 1 0 00.876.876L8 16l.117-.007a1 1 0 00.876-.876L9 15v-2h1l.117-.007a1 1 0 000-1.986L10 11H9v-1h1l.117-.007a1 1 0 000-1.986L10 8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SquareF5FilledIcon;
/* prettier-ignore-end */
