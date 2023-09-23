import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

const listItems = [
  {
    id: 1,
    href: "#home",
    text: "Home",
  },
  {
    id: 2,
    href: "#about",
    text: "About",
  },
  {
    id: 3,
    href: "#services",
    text: "Services",
  },
  {
    id: 4,
    href: "#tours",
    text: "Tours",
  },
];

const socialLinks = [
  {
    id: 1,
    href: "https://www.facebook.com",
    className: "fab fa-facebook",
  },
  {
    id: 2,
    href: "https://www.twitter.com",
    className: "fab fa-twitter",
  },
  {
    id: 3,
    href: "https://www.squarespace.com",
    className: "fab fa-squarespace",
  },
];

const services = [
  {
    id: 1,
    className: "fas fa-wallet fa-fw",
    title: "Saving Money",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    className: "fas fa-tree fa-fw",
    title: "Endless Hiking",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    className: "fas fa-socks fa-fw",
    title: "Amazing Comfort",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

const tours = [
  {
    id: 1,
    date: "August 26th, 2020",
    img: tour1,
    title: "Tibet Adventure",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "China",
    days: "6 Days",
    price: "$2100",
  },
  {
    id: 2,
    date: "October 1st, 2020",
    img: tour2,
    title: "Best of Java",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Indonesia",
    days: "11 Days",
    price: "$1400",
  },

  {
    id: 3,
    date: "September 15th, 2020",
    img: tour3,
    title: "Explore Hong Kong",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Hong Kong",
    days: "8 Days",
    price: "$5000",
  },
  {
    id: 4,
    date: "December 5th, 2019",
    img: tour4,
    title: "Kenya Highlights",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Kenya",
    days: "20 Days",
    price: "$3300",
  },
];

export { listItems, socialLinks, services, tours };
