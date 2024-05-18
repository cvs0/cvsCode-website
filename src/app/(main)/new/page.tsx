"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="-mt-5">
      <div className="relative isolate overflow-hidden bg-white dark:bg-slate-900 px-6 lg:py-24 py-5 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-purple-500 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={150}
                height={100}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg
              x="10%"
              y={-1}
              className="overflow-visible fill-gray-50 dark:fill-purple-500/10"
            >
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        <div className="mx-auto flex max-w-2xl gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:items-start lg:gap-y-10">
          <div className="lg:mx-auto lg:flex lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8">
            <h1 className="lg:leading-[56px] font-satoshiBlack capitalize bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-gray-600 text-center dark:text-neutral-300">
              <TypeAnimation
                className="mt-4 text-2xl font-semibold tracking-tight text-center justify-center items-center"
                sequence={[
                  "A high-speed scripting language built on TypeScript",
                  1000,
                  "cvsCode",
                  1000,
                  "Speed + Efficiency",
                  1000,
                  "Long term support",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
              />
            </h1>
          </div>
        </div>
      </div>

      <div className="mt-5 px-1 lg:w-1/4 w-full inline-block">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How large is the dev team?</AccordionTrigger>
              <AccordionContent>
                cvsCode is currently only being developed by cvs0.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How can I contribute?</AccordionTrigger>
              <AccordionContent>
                You can make a pull-request with some useful bug-fixes or
                features. Read up on our guidelines{" "}
                <span className="text-blue-500 underline">
                  <a href="https://github.com/cvs0/CVSCode/tree/main?tab=readme-ov-file#pull-request-requirements">
                    here
                  </a>
                </span>
                .
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Is the project still being maintained?
              </AccordionTrigger>
              <AccordionContent>
                Yes, it is. I have some very exciting features coming soon.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
    </div>
  );
}
