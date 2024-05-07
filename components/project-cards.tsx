"use client";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
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
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-full">
      <Carousel setApi={setApi} className="md:px-4">
        <CarouselContent>
          {experienceConfig.projects.map((project) => (
            <CarouselItem
              className="xs:basis-1/1 sm:basis-1/2 min-w-[360px]"
              key={project.title}
            >
              <div className="p-1 w-full">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div className="grid w-full items-center gap-4">
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
      <div className="py-2 text-center text-sm text-muted-foreground">
        {current} of {count}
      </div>
    </div>
  );
}
