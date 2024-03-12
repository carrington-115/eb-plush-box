import { ReactNode } from "react";

export interface headerLinkType {
  url: string;
  name: string;
  icon?: boolean;
  iconLink?: ReactNode;
}

export interface btnType {
  text?: boolean;
  name?: string;
  bgColor: string;
  btnAction: () => void;
  color: string;
  icon?: boolean;
  iconLink?: ReactNode;
  status: string;
  shadow?: boolean;
}
