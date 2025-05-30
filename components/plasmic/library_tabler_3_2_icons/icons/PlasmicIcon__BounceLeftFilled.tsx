/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BounceLeftFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BounceLeftFilledIcon(props: BounceLeftFilledIconProps) {
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
          "M8.486 11.143a1 1 0 011.371.343c1.045 1.74 1.83 3.443 2.392 5.237l.172.581.092-.13c2.093-2.921 4.48-3.653 7.565-2.7l.238.077a.999.999 0 01.132 1.844 1.001 1.001 0 01-.764.054c-2.932-.978-4.73-.122-6.79 3.998-.433.866-1.721.673-1.88-.283-.46-2.76-1.369-5.145-2.871-7.65a1 1 0 01.343-1.371zM6 4a3 3 0 100 6 3 3 0 000-6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BounceLeftFilledIcon;
/* prettier-ignore-end */
