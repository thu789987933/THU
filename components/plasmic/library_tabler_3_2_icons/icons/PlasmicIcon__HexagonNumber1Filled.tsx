/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HexagonNumber1FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HexagonNumber1FilledIcon(props: HexagonNumber1FilledIconProps) {
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
          "M10.425 1.414a3.33 3.33 0 013.216 0l6.775 3.995c.067.04.127.084.18.133l.008.007.107.076a3.222 3.222 0 011.284 2.39l.005.203v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.225 3.225 0 012 15.502V8.217a3.21 3.21 0 011.65-2.808l6.775-3.995zm.952 5.803l-.084.076-2 2-.083.094a1 1 0 000 1.226l.083.094.094.083a1 1 0 001.226 0l.094-.083.293-.293V16l.007.117a1 1 0 001.986 0L13 16V8l-.006-.114c-.083-.777-1.008-1.159-1.617-.669z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default HexagonNumber1FilledIcon;
/* prettier-ignore-end */
