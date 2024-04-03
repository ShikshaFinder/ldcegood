import React from "react";
import { HeroParallax } from "../components/ui/hero-parallax";
// import { ButtonsCard } from "../components/ui/tailwindcss-buttons";

export default function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
 const products = [
  {
    title: "About Shiksha Finder",
    link: "https://shikshafinder.com",
    thumbnail: "/skillclass.png",
  },
  {
    title: "Marketing for Educational Institutes",
    link: "https://platform.shikshafinder.com/marketing",
    thumbnail: "/marketingschool.png",
  },
  {
    title: "Students",
    link: "https://shikshafinder.com",
    thumbnail:
      "https://images.unsplash.com/photo-1629872430082-93d8912beccf?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    title: "Schools",
    link: "https://editorially.org",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1680807869780-e0876a6f3cd5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Skill classes",
    link: "https://shikshafinder.com/skillclass",
    thumbnail: "/skillclass.png",
  },
  {
    title: "Skill classes",
    link: "https://shikshafinder.com/skillclass",
    thumbnail: "/skillclass.png",
  },

  {
    title: "Contact us",
    link: "https://shikshafinder.com/contactus",
    thumbnail:
      "https://images.unsplash.com/photo-1528747045269-390fe33c19f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "About us",
    link: "https://shikshafinder.com/aboutus",
    thumbnail: "/aboutus.png",
  },
  {
    title: "Blog",
    link: "https://shikshafinder.com/blog",
    thumbnail:
      "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];
