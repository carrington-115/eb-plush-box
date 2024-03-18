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

export interface productType {
  imageUrl: string;
  productName: string;
  price: number;
  likeStatus: boolean;
  likes: number;
}

export interface stepsSectionType {
  title: string;
  steps: string[];
}

export interface pageLinkTypes {
  name: string;
  to: string;
}

export interface hamMenuType {
  status: boolean;
  closeActivity: () => void;
}

export type testimonialMessageType = {
  name: string;
  message: string;
};

export interface testimonyType {
  profileImage: string;
  testifierMessage: testimonialMessageType;
}

export interface inputFieldType {
  type: string;
  inputType?: string;
  placeholder?: string;
  inputName: string;
  dropDown?: dropDownValuesType;
}

export type dropDownValuesType = {
  dropDownName: string;
  dropDownValues: string[];
};

export interface rateInputType {
  unRated: ReactNode;
  rated: ReactNode;
}

export interface accordionType {
  title: string;
  message: string;
}
