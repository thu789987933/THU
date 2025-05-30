/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandGithubCopilotIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandGithubCopilotIcon(props: BrandGithubCopilotIconProps) {
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
        d={"M4 18v-5.5c0-.667.167-1.333.5-2"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M12 7.5c0-1-.01-4.07-4-3.5-3.5.5-4 2.5-4 3.5 0 1.5 0 4 3 4 4 0 5-2.5 5-4zM4 12c-1.333.667-2 1.333-2 2 0 1 0 3 1.5 4 3 2 6.5 3 8.5 3s5.499-1 8.5-3c1.5-1 1.5-3 1.5-4 0-.667-.667-1.333-2-2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M20 18v-5.5c0-.667-.167-1.333-.5-2"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M12 7.5v-.297l.01-.269.027-.298.013-.105.033-.215c.014-.073.029-.146.046-.22l.06-.223c.336-1.118 1.262-2.237 3.808-1.873 2.838.405 3.703 1.797 3.93 2.842l.036.204c0 .033.01.066.013.098l.016.185v.661l-.015.394-.02.271c-.122 1.366-.655 2.845-2.962 2.845-3.256 0-4.524-1.656-4.883-3.081l-.053-.242a3.881 3.881 0 01-.036-.235l-.021-.227a3.505 3.505 0 01-.007-.215H12zM10 15v2m4-2v2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandGithubCopilotIcon;
/* prettier-ignore-end */
