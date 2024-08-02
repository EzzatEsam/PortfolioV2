import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};


export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  link?: string;
}