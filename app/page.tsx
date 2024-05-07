import Link from "next/link";

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { DownloadIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { WorkAccordion } from "@/components/work-accordion";
import { ProjectCards } from "@/components/project-cards";

import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="border-b">
      <div className="container flex-1 items-start">
        <PageHeader>
          <PageHeaderHeading>Cooper Ellidge</PageHeaderHeading>
          <PageHeaderDescription>
            I am a software engineer interested in full-stack development and
            data science. This page is a WIP so please forgive the
            mobile-unfriendlyness and missing content!
          </PageHeaderDescription>
          <PageActions>
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.resume}
              className={cn(buttonVariants())}
            >
              Download CV
              <DownloadIcon />
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.github}
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              <GitHubLogoIcon className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </PageActions>
        </PageHeader>
        <div className="flex flex-col md:mx-4 lg:mx-96 pb-12">
          <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Work Experience
          </h2>
          <WorkAccordion />
        </div>
        <div className="flex flex-col md:mx-4 lg:mx-96 pb-12">
          <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Projects
          </h2>
          <div className="flex items-center justify-center">
            <ProjectCards />
          </div>
        </div>
      </div>
    </div>
  );
}
