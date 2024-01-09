import {
  PiFacebookLogoLight,
  PiLinkedinLogoLight,
  PiLinkLight,
} from "react-icons/pi";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedinIn,
  FaGithubSquare,
  FaDribbbleSquare,
  FaBehanceSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

import { FaAngleRight, FaTwitter } from "react-icons/fa";
import { BsThreads, BsWhatsapp, BsMessenger } from "react-icons/bs";

export const shareLinks = [
  {
    iconFirst: <PiFacebookLogoLight className="text-2xl" />,
    name: "Share on Facebook",

    lastIcon: <FaAngleRight />,
  },
  {
    iconFirst: <PiLinkedinLogoLight className="text-2xl" />,
    name: "Share on LinkedIn",
    lastIcon: <FaAngleRight />,
  },
  {
    iconFirst: <FaTwitter className="text-2xl" />,
    name: "Share on X",
    lastIcon: <FaAngleRight />,
  },
  {
    iconFirst: <BsThreads className="text-2xl" />,
    name: "Share on Threads",
    lastIcon: <FaAngleRight />,
  },
  {
    iconFirst: <BsWhatsapp className="text-2xl" />,
    name: "Share on Whatsapp",
    lastIcon: <FaAngleRight />,
  },
  {
    iconFirst: <BsMessenger className="text-2xl" />,
    name: "Share on Messenger",
    lastIcon: <FaAngleRight />,
  },
];

export const images = [
  "https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1694359/pexels-photo-1694359.jpeg?auto=compress&cs=tinysrgb&w=600",
];

export const projects = [
  {
    title: "SwiftCart - E-Commerce Platform",
    description:
      "Seamless online shopping platform with real-time inventory updates.",
    techUsed: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://example.com/swiftcart",
    image: "/images/placeholder.jpg",
  },
  {
    title: "ChatterHub - Real-Time Chat Application",
    description:
      "Dynamic real-time chat application for instant communication.",
    techUsed: ["React", "Firebase", "Socket.io", "Express"],
    link: "https://example.com/chatterhub",
    image: "/images/placeholder.jpg",
  },
  {
    title: "BudgetBuddy - Personal Finance Tracker",
    description:
      "Comprehensive finance tracker for managing income, expenses, and budgets.",
    techUsed: ["React", "Next.js", "Firebase", "D3.js"],
    link: "https://example.com/budgetbuddy",
    image: "/images/placeholder.jpg",
  },
  {
    title: "Blogify - Blog Platform",
    description:
      "Versatile blogging platform for content creators with a user-friendly editor.",
    techUsed: ["Next.js", "Node.js", "MongoDB", "Django"],
    link: "https://example.com/blogify",
    image: "/images/placeholder.jpg",
  },
  {
    title: "WeatherWise - Weather Dashboard",
    description:
      "Weather dashboard providing real-time weather information and forecasts.",
    techUsed: ["React", "Vue.js", "Third-party APIs", "Flask"],
    link: "https://example.com/weatherwise",
    image: "/images/placeholder.jpg",
  },
];

export const testimonials = [
  {
    name: "Emily Rodriguez",
    position: "Senior Software Engineer",
    company: "Tech Innovators Ltd",
    message:
      "Working with Alex was a delight! His coding skills and attention to detail transformed our project. He's a quick learner and always brought fresh insights to the table. I highly recommend him for any web development endeavor.",
    photo:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Carlos Moreno",
    position: "Product Manager",
    company: "Digital Solutions Inc.",
    message:
      "Alex's ability to create user-friendly and efficient applications is remarkable. His contributions to our team's projects significantly improved the overall user experience. He's not just a developer; he's a problem solver.",
    photo:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Jessica Chen",
    position: "UX/UI Designer",
    company: "Creative Minds Studio",
    message:
      "Collaborating with Alex on various projects was a fantastic experience. His understanding of design principles and seamless integration of front-end technologies make his work truly stand out. I look forward to future collaborations!",
    photo:
      "https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "David Kim",
    position: "CEO",
    company: "InnovateTech Solutions",
    message:
      "Alex's commitment to excellence and innovation is unparalleled. His projects showcase a perfect blend of creativity and technical expertise. It's a pleasure having him on board, and I'm excited to see his future endeavors.",
    photo:
      "https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export const socialMediaIcons = [
  {
    id: 1,
    icon: <FaFacebookSquare />,
    handle: "@alexjohnson",
    link: "https://www.facebook.com/alexjohnson",
  },
  {
    id: 2,
    icon: <FaTwitterSquare />,
    handle: "@alexjohnson",
    link: "https://twitter.com/alexjohnson",
  },
  {
    id: 3,
    icon: <FaInstagramSquare />,
    handle: "@alexjohnson",
    link: "https://www.instagram.com/alexjohnson",
  },
  {
    id: 4,
    icon: <FaLinkedinIn />,
    handle: "@alexjohnson",
    link: "https://www.linkedin.com/in/alexjohnson",
  },
  {
    id: 5,
    icon: <FaGithubSquare />,
    handle: "@alexjohnson",
    link: "https://github.com/alexjohnson",
  },
  {
    id: 6,
    icon: <FaDribbbleSquare />,
    handle: "@alexjohnson",
    link: "https://dribbble.com/alexjohnson",
  },
  {
    id: 7,
    icon: <FaBehanceSquare />,
    handle: "@alexjohnson",
    link: "https://www.behance.net/alexjohnson",
  },
  {
    id: 8,
    icon: <FaYoutubeSquare />,
    handle: "@alexjohnson",
    link: "https://www.youtube.com/user/alexjohnson",
  },
];
