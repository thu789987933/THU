/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MailFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MailFilledIcon(props: MailFilledIconProps) {
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
          "M22 7.535V17a3 3 0 01-2.824 2.995L19 20H5a3 3 0 01-2.995-2.824L2 17V7.535l9.445 6.297.116.066a1 1 0 00.878 0l.116-.066L22 7.535z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M19 4c1.08 0 2.027.57 2.555 1.427L12 11.797l-9.555-6.37a2.999 2.999 0 012.354-1.42L5 4h14z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MailFilledIcon;
/* prettier-ignore-end */
