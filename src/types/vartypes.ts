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
  image: string;
  steps: string[];
  btnName: string;
  bgColor: string;
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

export interface mobileHeadType {
  signInStatus: boolean;
  menuActivity: () => void;
  setSignInFunc: () => void;
  setOrderFunc: () => void;
  orderNumber: number;
  userNameInitial: string;
}

export interface sliderType {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  lazyload: boolean;
}

export interface productViewerType {
  display: boolean;
  productPrice: number;
  title: string;
  description: string;
  listDetails: string[];
  sliderImages: string[];
}

export interface stepCompPropsType {
  number: number;
  title: string;
}

export interface cartProductType {
  productImage: string;
  productName: string;
  productPrice: number;
}

export interface cartListElementPropsType {
  readonly id: string;
  image: string;
  name: string;
  price: number;
  removeElementAction: () => void;
}
export interface cartListPropsType {
  cartProducts: cartListElementPropsType[];
  totalPrice: number;
  checkoutBtnAction: () => void;
}

export interface contactCompPropsType {
  name: string;
  description: string;
  btnAction: () => void;
}

export interface thirdPartyBtnPropsType {
  icon: ReactNode;
  name: string;
  btnAction: () => void;
}

export interface formPropsType {
  type: string;
  submitAction: () => void;
}

export interface accordionPropsType {
  faqsContent: accordionType[];
}
