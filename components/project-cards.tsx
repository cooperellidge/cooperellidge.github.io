import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { experienceConfig } from "@/config/experience";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ScrollArea } from "./ui/scroll-area";
import { Badge } from "./ui/badge";

export function ProjectCards({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {experienceConfig.projects.map((project) => (
          <CarouselItem key={project.title}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className="grid w-full items-center gap-4">
                    {/* <div className="flex flex-col space-y-1.5"></div> */}
                    <span className="text-2xl font-semibold">
                      {project.title}
                    </span>
                    <p>{project.description}</p>
                    {project?.deploy && (
                      <Link
                        target="_blank"
                        rel="noreferrer"
                        href={project.deploy.href}
                        className={cn(buttonVariants({ variant: "outline" }))}
                      >
                        Deployed with {project.deploy.display}
                      </Link>
                    )}
                    {project?.source && (
                      <Link
                        target="_blank"
                        rel="noreferrer"
                        href={project.source.href}
                        className={cn(buttonVariants({ variant: "outline" }))}
                      >
                        <GitHubLogoIcon className="mr-2 h-4 w-4" />
                        GitHub
                      </Link>
                    )}
                    <div>
                      {project.tech.map((tech, idx) => (
                        <Badge
                          variant={idx === 0 ? "default" : "secondary"}
                          className="m-1 text-sm"
                          key={tech}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
