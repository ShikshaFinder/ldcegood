import React from "react";
import { HeroParallax } from "../components/ui/hero-parallax";
import { Button } from "../components/ui/moving-border";
import Link from "next/link";

export default function HeroParallaxDemo() {
  return (
    <>
      <a href="https://shikshafinder.com/">
        <Button
          borderRadius="1.75rem"
          className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          Shiksha Finder
        </Button>
      </a>
      <HeroParallax products={products} />
    </>
  );
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
    link: "https://platform.shikshafinder.com",
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
    title: "Contact us",
    link: "https://shikshafinder.com/contactus",
    thumbnail:
      "https://images.unsplash.com/photo-1528747045269-390fe33c19f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    title: "Blog",
    link: "https://shikshafinder.com/blog",
    thumbnail:
      "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
