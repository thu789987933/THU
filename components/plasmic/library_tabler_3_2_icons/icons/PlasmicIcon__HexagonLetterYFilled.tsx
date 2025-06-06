/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HexagonLetterYFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HexagonLetterYFilledIcon(props: HexagonLetterYFilledIconProps) {
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
          "M13.666 1.429l6.75 3.98.096.063.093.078.106.074a3.22 3.22 0 011.284 2.39l.005.204v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.23 3.23 0 012 15.502V8.217c0-1.106.57-2.128 1.476-2.705l6.95-4.098c1-.552 2.214-.552 3.24.015zm.705 5.643a1 1 0 00-1.3.557L12 10.307l-1.072-2.678a1 1 0 00-1.856.742L11 13.194V16a1 1 0 00.883.993L12 17a1 1 0 001-1v-2.809l1.928-4.82a1 1 0 00-.45-1.25l-.107-.049z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default HexagonLetterYFilledIcon;
/* prettier-ignore-end */
