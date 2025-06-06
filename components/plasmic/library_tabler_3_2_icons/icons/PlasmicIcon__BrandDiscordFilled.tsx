/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandDiscordFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandDiscordFilledIcon(props: BrandDiscordFilledIconProps) {
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
          "M14.983 3l.123.006c2.014.214 3.527.672 4.966 1.673a1 1 0 01.371.488c1.876 5.315 2.373 9.987 1.451 12.28C20.891 19.452 19.288 21 17.5 21c-.732 0-1.693-.968-2.328-2.045.709-.129 1.41-.294 2.103-.493a1 1 0 00-.55-1.924c-3.32.95-6.13.95-9.45 0a1 1 0 00-.55 1.924c.717.204 1.416.37 2.103.494C8.193 20.031 7.232 21 6.5 21c-1.788 0-3.391-1.548-4.428-3.629-.888-2.217-.39-6.89 1.485-12.204a1 1 0 01.371-.488C5.367 3.678 6.88 3.22 8.894 3.006a1 1 0 01.935.435l.063.107.651 1.285.137-.016a12.97 12.97 0 012.643 0l.134.016.65-1.284a1 1 0 01.754-.54L14.983 3zM9 10a2 2 0 00-1.977 1.697l-.018.154L7 12l.005.15A2 2 0 109 10zm6 0a2 2 0 00-1.977 1.697l-.018.154L13 12l.005.15A2 2 0 1015 10z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BrandDiscordFilledIcon;
/* prettier-ignore-end */
