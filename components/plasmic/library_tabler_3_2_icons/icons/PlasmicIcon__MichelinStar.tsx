/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MichelinStarIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MichelinStarIcon(props: MichelinStarIconProps) {
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
          "M14.792 17.063c0 .337.057.618.057.9 0 1.8-1.238 3.037-2.982 3.037-1.8 0-2.98-1.238-2.98-3.206v-.731c-.957.675-1.576.9-2.42.9-1.518 0-2.925-1.463-2.925-3.094 0-1.181.844-2.194 2.082-2.756l.28-.113c-1.574-.787-2.362-1.688-2.362-2.925 0-1.687 1.294-3.094 2.925-3.094.675 0 1.52.338 2.138.788l.281.112c0-.337-.056-.619-.056-.844C8.83 4.237 10.067 3 11.81 3c1.8 0 2.981 1.237 2.981 3.206V6.6l-.056.281c.956-.675 1.575-.9 2.419-.9 1.519 0 2.925 1.463 2.925 3.094 0 1.181-.844 2.194-2.081 2.756l-.282.169c1.575.787 2.363 1.688 2.363 2.925 0 1.688-1.294 3.094-2.925 3.094-.675 0-1.575-.281-2.138-.788l-.225-.169.001.001z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MichelinStarIcon;
/* prettier-ignore-end */
