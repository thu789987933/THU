/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowBigDownLinesFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowBigDownLinesFilledIcon(
  props: ArrowBigDownLinesFilledIconProps
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
          "M9 8l-.117.007A1 1 0 008 9v1.999L5.414 11A2 2 0 004 14.414L10.586 21a2 2 0 002.828 0L20 14.414a2 2 0 00.434-2.18l-.068-.145A2 2 0 0018.586 11L16 10.999V9a1 1 0 00-1-1H9zm6-6a1 1 0 01.117 1.993L15 4H9a1 1 0 01-.117-1.993L9 2h6zm0 3a1 1 0 01.117 1.993L15 7H9a1 1 0 01-.117-1.993L9 5h6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowBigDownLinesFilledIcon;
/* prettier-ignore-end */
