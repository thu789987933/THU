/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CoinYenFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CoinYenFilledIcon(props: CoinYenFilledIconProps) {
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
          "M17 3.34A10 10 0 112 12l.005-.324A10 10 0 0117 3.34zm-1.445 3.828a1 1 0 00-1.387.277L12 10.696l-2.168-3.25a1 1 0 00-1.286-.337l-.1.059a1 1 0 00-.278 1.387L9.798 11H9a1 1 0 00-.993.883L8 12a1 1 0 001 1h2v1H9a1 1 0 00-.993.883L8 15a1 1 0 001 1h2v1a1 1 0 00.883.993L12 18l.117-.007A1 1 0 0013 17v-1h2a1 1 0 00.993-.883L16 15a1 1 0 00-1-1h-2v-1h2a1 1 0 00.993-.883L16 12a1 1 0 00-1-1h-.799l1.631-2.445a1 1 0 00-.184-1.317l-.093-.07z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CoinYenFilledIcon;
/* prettier-ignore-end */
