import { ExperienceConfig } from "@/types/experience"
import { siteConfig } from "./site"

export const experienceConfig: ExperienceConfig = {
  jobs: [
    {
      company: "iO Energy",
      positions: [
        {
          title: "Software Engineer",
          bio: "Did lots of stuff.",
          tenure: "Sep 2023 - Now"
        }
      ]
    },
    {
      company: "Saab Australia",
      positions: [
        {
          title: "Software Engineer",
          bio: "Did lots of stuff.",
          tenure: "Jan 2023 - Sep 2023"
        },
        {
          title: "Early Careers Lead",
          bio: "Did lots of stuff.",
          tenure: "Sep 2022 - Sep 2023"
        },
        {
          title: "Graduate Engineer",
          bio: "Did lots of stuff.",
          tenure: "Jan 2023 - Sep 2023"
        },
        {
          title: "Undergraduate Engineer",
          bio: "Did lots of stuff.",
          tenure: "Jan 2021 - Dec 2022"
        },
      ]
    },
  ],
  projects: [
    // {
    //   title: "Explore Your Electricity",
    //   description: "Dashboard for analysing your electrcity usage",
    //   tech: [
    //     "Python",
    //     "Streamlit",
    //     "nemreader",
    //     "pandas"
    //   ],
    //   deploy: {
    //     display: "Streamlit",
    //     href: "https://www.github.com/cooperellidge/explore-your-electricity"
    //   },
    //   source: {
    //     href: "https://www.github.com/cooperellidge/template-wedding"
    //   }
    // },
    {
      title: "Wedding Site",
      description: "Event site for my wedding, with passcode, RSVPs, notifications, and Maps",
      source: {
        href: "https://www.github.com/cooperellidge/template-wedding"
      },
      tech: [
        "React",
        "Material UI",
        "AWS Lambda",
        "AWS DynamoDB",
        "AWS SES",
        "AWS Amplify",
        "Terraform"
      ],
    },
    {
        title: "Resume Repo",
        description: "LaTeX resume with GitHub CI/CD",
        deploy: {
          display: "GitHub Pages",
          href: siteConfig.links.resume,
        },
        source: {
          href: "https://www.github.com/cooperellidge/resume"
        },
        tech: [
          "LaTeX",
          "GitHub Actions"
        ],
    },
    {
      title: "Personal Site",
      description: "This website you're seeing now!",
      deploy: {
        display: "GitHub Pages",
        href: "https://cooperellidge.github.io",
      },
      source: {
        href: "https://www.github.com/cooperellidge/cooperellidge.github.io"
      },
      tech: [
        "Next.js",
        "Typescript",
        "shadcn/ui"
      ],
    },
  ],
}