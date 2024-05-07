import { MainNavItem, SidebarNavItem } from "@/types/nav"

interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Resume",
      href: "/resume",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    // {
    //   title: "Blog",
    //   href: "/blog",
    // },
  ],
  sidebarNav: [],
}