/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SignLeftFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SignLeftFilledIcon(props: SignLeftFilledIconProps) {
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
          "M14 2a1 1 0 01.993.883L15 3v2h3a1 1 0 01.993.883L19 6v5a1 1 0 01-.883.993L18 12h-3v8h1a1 1 0 01.117 1.993L16 22h-4a1 1 0 01-.117-1.993L12 20h1v-8H8a1 1 0 01-.694-.28l-.087-.095-2-2.5a1 1 0 01-.072-1.147l.072-.103 2-2.5a1 1 0 01.652-.367L8 5h5V3a1 1 0 011-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SignLeftFilledIcon;
/* prettier-ignore-end */
