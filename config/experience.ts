import { ExperienceConfig } from "@/types/experience"
import { siteConfig } from "./site"

export const experienceConfig: ExperienceConfig = {
  jobs: [
    {
      company: "pointData",
      positions: [
        {
          title: "Software Engineer",
          bio: "I am currently improving the data platform to increase reliability, observability, and automations. I've just started, so as more things come up... I'll add them!",
          tenure: "Jun 2024 - Now"
        }
      ]
    },
    {
      company: "iO Energy",
      positions: [
        {
          title: "Software Engineer",
          bio: "I developed core retailing services, by building and integrating backend services to manage retail plans as well as improving signup services. I contrbuted to the sales platform’s frontend, directly improving user experiences. Leaning on my modelling experiences, I developed a load estimation forecast, enhancing tools for risk management and settlements.",
          tenure: "Aug 2023 - Jun 2024"
        }
      ]
    },
    {
      company: "Saab Australia",
      positions: [
        {
          title: "Software Engineer",
          bio: "As a software engineer, I used my full-stack engineering skills to develop naval operator user interfaces and enhanced tactical capabilities using Java, Vue.js, Typescript, and DDS in a MVVM software architecture. I succesfully presented new capability to the customer during contract milestone demonstrations.",
          tenure: "Jan 2023 - Aug 2023"
        },
        {
          title: "Early Careers Lead",
          bio: "I coordinated over 50 graduates and interns for Saab’s Early Careers Programs, including developing the programs’ strategic direction, determining rotations, providing mentorship, and organising events.",
          tenure: "Sep 2022 - Sep 2023"
        },
        {
          title: "Graduate Engineer",
          bio: "During my Graduate Program, I gained wide experience across multiple engineering disciplines. I gained invaluable software expereince building modules for Saab's combat management system. I conducted requirements analysis and produced design doucments for Defence's deployable hospital, receiving a company recognition award nomination for my efforts. I also used Python to model the complex dynamics of autonomous vehicles.",
          tenure: "Jan 2021 - Dec 2022"
        },
        {
          title: "Undergraduate Engineer",
          bio: "During this internship, I created and evaluated machine learning models to improve environmental measurements. This model was successfully deployed and tested during sea trials.",
          tenure: "Nov 2019 - Feb 2020"
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
      description: "Site for my wedding, with passcode, RSVPs, notifications, and Maps",
      deploy: {
        display: "Source available soon",
        href: "#",
        disabled: true
      },
      // source: {
      //   href: "https://www.github.com/cooperellidge/template-wedding"
      // },
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
          display: "Download CV",
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
      title: "Electricity Dashboard",
      description: "Personal Streamlit dashboard to analyse my household electricity usage",
      tech: [
        "Python",
        "Streamlit",
        "nemreader",
        "pandas"
      ],
    },
    {
      title: "Personal Site",
      description: "This website you're seeing now!",
      deploy: {
        display: "You're here!",
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
