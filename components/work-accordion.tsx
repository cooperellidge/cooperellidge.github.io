import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { experienceConfig } from "@/config/experience";

export function WorkAccordion() {
  return (
    <>
      {experienceConfig.jobs.map((job) => (
        <div className="py-8" key={job.company}>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            {job.company}
          </h3>
          {job.positions.map((position, idx) => (
            <Accordion
              type="single"
              collapsible
              className="w-full"
              key={position.title}
            >
              <AccordionItem value={position.title}>
                <AccordionTrigger>
                  <div className="flex flex-1 items-center justify-between">
                    <div className="text-left">{position.title}</div>
                    <div className="text-right font-extralight italics text-sm pr-2">
                      {position.tenure}
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="my-6 ml-6 list-disc [&>li]:mt-2">
                    {position.bio}
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      ))}
    </>
  );
}
