import {
  productFour,
  productOne,
  productThree,
  productTwo,
} from "../../assets";
import { pageLinkTypes, productType } from "../../types/vartypes";

export const pageLinks: pageLinkTypes[] = [
  { name: "Home", to: "/home" },
  { name: "Shopping", to: "/shopping" },
  { name: "About us", to: "/about" },
  { name: "Contact us", to: "/contact" },
];

export const products: productType[] = [
  {
    imageUrl: productOne,
    productName: "Wedding gift",
    price: 100,
    likeStatus: false,
    likes: 100,
  },
  {
    imageUrl: productTwo,
    productName: "Valentine gift",
    price: 50,
    likeStatus: false,
    likes: 0,
  },
  {
    imageUrl: productThree,
    productName: "Thanksgiving gift",
    price: 100,
    likeStatus: false,
    likes: 0,
  },
  {
    imageUrl: productFour,
    productName: "Couples gift",
    price: 100,
    likeStatus: false,
    likes: 0,
  },
  {
    imageUrl: productOne,
    productName: "Wedding gift",
    price: 100,
    likeStatus: false,
    likes: 100,
  },
  {
    imageUrl: productTwo,
    productName: "Valentine gift",
    price: 50,
    likeStatus: false,
    likes: 0,
  },
  {
    imageUrl: productThree,
    productName: "Thanksgiving gift",
    price: 100,
    likeStatus: false,
    likes: 0,
  },
  {
    imageUrl: productFour,
    productName: "Couples gift",
    price: 100,
    likeStatus: false,
    likes: 0,
  },
];
