/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandReactNativeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandReactNativeIcon(props: BrandReactNativeIconProps) {
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
          "M6.357 9C3.72 9.68 2 10.845 2 12.175 2 14.282 6.405 16 11.85 16c.74 0 1.26-.039 1.95-.097"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M9.837 15.9c-.413-.596-.806-1.133-1.18-1.8-2.751-4.9-3.488-9.77-1.63-10.873 1.15-.697 3.047.253 4.974 2.254"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M6.429 15.387c-.702 2.688-.56 4.716.56 5.395 1.783 1.08 5.387-1.958 8.043-6.804.36-.67.683-1.329.968-1.978"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M12 18.52c1.928 2 3.817 2.95 4.978 2.253 1.85-1.102 1.121-5.972-1.633-10.873-.384-.677-.777-1.204-1.18-1.8"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M17.66 15c2.612-.687 4.34-1.85 4.34-3.176C22 9.714 17.592 8 12.155 8c-.747 0-1.266.029-1.955.087"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M8 12c.285-.66.607-1.308.968-1.978 2.647-4.844 6.253-7.89 8.046-6.801 1.11.679 1.262 2.706.56 5.393m-5.314 3.401h-.01c-.01.13-.12.24-.26.24a.263.263 0 01-.25-.26c0-.14.11-.25.24-.25h-.01c.13-.01.25.11.25.24"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandReactNativeIcon;
/* prettier-ignore-end */
