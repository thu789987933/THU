/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HelpOctagonFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HelpOctagonFilledIcon(props: HelpOctagonFilledIconProps) {
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
          "M14.897 1a4 4 0 012.664 1.016l.165.156 4.1 4.1a4 4 0 011.168 2.605l.006.227v5.794a4 4 0 01-1.016 2.664l-.156.165-4.1 4.1a4 4 0 01-2.603 1.168l-.227.006H9.103a3.999 3.999 0 01-2.664-1.017l-.165-.156-4.1-4.1a4 4 0 01-1.168-2.604L1 14.897V9.103a4 4 0 011.016-2.664l.156-.165 4.1-4.1a4 4 0 012.605-1.168L9.104 1h5.793zM12 15a1 1 0 00-.993.883L11 16l.007.127a1 1 0 001.986 0L13 16.01l-.007-.127A1 1 0 0012 15zm1.368-6.673a2.98 2.98 0 00-3.631.728 1 1 0 001.44 1.383l.171-.18a.98.98 0 011.11-.15 1 1 0 01-.34 1.886l-.232.012A1 1 0 0011.997 14a3 3 0 001.371-5.673z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default HelpOctagonFilledIcon;
/* prettier-ignore-end */
