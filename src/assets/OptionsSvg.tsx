import { SVGAttributes } from "react";

export function OptionsSvg({ ...rest }: SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M0 0h48v48H0z" fill="none" />
      <g id="Shopicon" stroke="white" fill="white">
        <circle cx="24" cy="24" r="5" />
        <circle cx="24" cy="11" r="5" />
        <circle cx="24" cy="37" r="5" />
      </g>
    </svg>
  );
}
