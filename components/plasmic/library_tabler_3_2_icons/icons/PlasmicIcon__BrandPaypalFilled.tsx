/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandPaypalFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandPaypalFilledIcon(props: BrandPaypalFilledIconProps) {
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
          "M12.5 2c3.113 0 5.309 1.785 5.863 4.565C20.088 7.75 21 9.717 21 12c0 2.933-2.748 5.384-5.783 5.496L15 17.5h-1.754l-.466 2.8a1.998 1.998 0 01-1.823 1.597l-.157.003H8.12a1.5 1.5 0 01-1.182-.54 1.495 1.495 0 01-.348-1.07l.042-.29H5c-1.004 0-1.914-.864-1.994-1.857L3 18l.01-.141L5.003 3.905l.003-.048c.072-.894.815-1.682 1.695-1.832l.156-.02L7 2h5.5zm5.812 7.35l-.024.087c-.706 2.403-3.072 4.436-5.555 4.557L12.5 14H9.997v.05l-.025.183-1.2 5a1.001 1.001 0 01-.019.07l-.088.597h2.154l.595-3.564a1 1 0 01.865-.829l.121-.007H15c2.073 0 4-1.67 4-3.5 0-1.022-.236-1.924-.688-2.65z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BrandPaypalFilledIcon;
/* prettier-ignore-end */
