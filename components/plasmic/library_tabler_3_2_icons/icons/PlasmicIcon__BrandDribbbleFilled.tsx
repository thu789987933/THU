/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandDribbbleFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandDribbbleFilledIcon(props: BrandDribbbleFilledIconProps) {
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
          "M14.384 14.38a22.874 22.874 0 011.056 4.863l.064.644.126 1.431a10 10 0 01-9.15-.98l2.08-2.087.246-.24c1.793-1.728 3.41-2.875 5.387-3.566l.191-.065zm6.09-.783l.414.003.981.014a9.997 9.997 0 01-4.319 6.704l-.054-.605c-.18-2.057-.55-3.958-1.163-5.814 1.044-.182 2.203-.278 3.529-.298l.611-.004h.001zm-7.869-3.181c.383.682.734 1.383 1.052 2.098-2.276.77-4.142 2.053-6.144 3.967l-.355.344-2.236 2.24a10 10 0 01-2.917-6.741L2 12l.004-.25H3.1l.467-.002c3.547-.026 6.356-.367 8.938-1.295l.1-.037zm9.388 1.202l-1.515-.02c-1.86-.003-3.45.124-4.865.402a26.114 26.114 0 00-1.163-2.38c1.393-.695 2.757-1.597 4.179-2.75l.428-.354.816-.682a10 10 0 012.098 5.409l.022.375zM7.33 3.158L8.596 4.68c1.145 1.398 2.121 2.713 2.949 3.985-2.26.766-4.739 1.052-7.883 1.081L3.1 9.75h-.844A10 10 0 017.33 3.158zM17 3.34c.53.306 1.026.657 1.483 1.046l-1.025.857c-1.379 1.128-2.688 1.993-4.034 2.649-.89-1.398-1.943-2.836-3.182-4.358l-.474-.574-.485-.584A10 10 0 0117 3.34z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BrandDribbbleFilledIcon;
/* prettier-ignore-end */
