import {
  Product1,
  Product2,
  Product3,
  Product4,
} from "../assets/images";

import type { Product } from "./types";

export const products: Product[] = [
  {
    id: "black-pepper",
    name: "103 Black Pepper Chicken Chop",
    price: 6.9,
    image: Product1,
    category: "Chicken Chop",
  },
  {
    id: "dum-biryani",
    name: "Chicken Dum Briyani",
    price: 10.02,
    image: Product2,
    category: "For You",
  },
  {
    id: "mandi",
    name: "Mandi Kozhi Porichu Briyani",
    price: 6.9,
    image: Product3,
    category: "For You",
  },
  {
    id: "tikka",
    name: "Chicken Spicy Tikka Masala",
    price: 10.02,
    image: Product4,
    category: "Chicken Chop",
  },
];

export const categories = [
  "For You",
  "Chicken Chop",
  "Fish",
  "Burger",
  "Sandwiches",
  "Platters",
  "Drinks",
];