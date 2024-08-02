import { hrtime } from "process";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Ezzat's Portfolio",
  description: "",
  navItems: [
    // {
    //   label: "Home",
    //   href: "/",
    // },
    {
      label: "Experience",
      href: "/experience",
    },
    {
      label: "Education",
      href: "/education",
    },
    {
      label: "Skills",
      href: "/skills",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Resume",
      href: "/resume",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],

  links: {
    github: "https://github.com/EzzatEsam",
    linkedin: "https://www.linkedin.com/in/ezzatesam/",
    itchio: "https://ezzatesam.itch.io/",
    // twitter: "https://twitter.com/getnextui",
    // docs: "https://nextui.org",
    // discord: "https://discord.gg/9b6yyZKmH4",
    // sponsor: "https://patreon.com/jrgarciadev",
  },
};
