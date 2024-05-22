"use client";

import BoldHeading from "@/components/bold-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { getRepoForks, getRepoStars } from "@/lib/github";
import { ChevronsUpDown, GitForkIcon, Star } from "lucide-react";
import Image from "next/image";
import Script from "next/script";
import { useEffect, useState } from "react";
import { SiJavascript, SiReact, SiTypescript } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [repoStars, setRepoStars] = useState<number>(0);
  const [repoForks, setRepoForks] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const stars = await getRepoStars("cvs0", "cvsCode");
        const forks = await getRepoForks("cvs0", "cvsCode");
        setRepoStars(stars);
        setRepoForks(forks);
      } catch (error) {
        console.error("Error fetching repository information:", error);
      }
    }

    fetchData();
  }, [setRepoStars, setRepoForks]);

  return (
    <>
      <div className="mx-auto max-w-4xl px-6">
        {/* Introduction Section */}
        <section className="mt-10">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>

          <BoldHeading heading="cvsCode" version isLoading={isLoading} />

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

          <div className="flex mt-6 justify-center">
            <SiTypescript className="lg:mr-6 mr-2 animate-pulse" size={40} />
            <SiJavascript className="lg:mr-6 mr-2 *:animate-pulse" size={40} />
            <SiReact className="lg:mr-6 animate-pulse" size={40} />
            <h1 className="ml-10 lg:ml-20 mr-2 text-4xl">{repoStars}</h1>
            <a
              target="_blank no-refferer"
              href="https://github.com/cvs0/CVSCode/stargazers"
              aria-label="Star github link"
            >
              <Star className=" text-yellow-500" size={40} />
            </a>
            <h1 className="ml-4 mr-2 text-4xl">{repoForks}</h1>
            <a
              target="_blank no-refferer"
              href="https://github.com/cvs0/CVSCode/forks"
              aria-label="Fork github link"
            >
              <GitForkIcon className="mr-6 text-slate-400" size={40} />
            </a>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2 mb-6">
            Features
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <li className="flex items-center space-x-2">
              <span className="text-xl text-indigo-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span className="font-semibold">Frequent updates</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-xl text-indigo-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span className="font-semibold">Loops</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-xl text-indigo-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span className="font-semibold">Function declarations</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-xl text-indigo-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span className="font-semibold">Native functions</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-xl text-indigo-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span className="font-semibold">High speed</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-xl text-indigo-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span className="font-semibold">Fast REPL</span>
            </li>
          </ul>
        </section>

        <h1 className="font-bold mt-10">
          Star our{" "}
          <span className="text-fixed hover:underline font-extrabold">
            <a href="https://github.com/cvs0/cvsCode">GitHub</a>
          </span>{" "}
          to find out when the newest features are releasing!
        </h1>
        <div className="mt-10 lg:flex flex-col space-x-8 items-center">
          <Collapsible
            open={open}
            onOpenChange={setOpen}
            className="lg:w-[350px] space-y-2 pb-5"
          >
            <div className="flex items-center justify-between space-x-4 px-4 mt-10">
              <h2 className="text-sm font-semibold">
                <span className="font-extrabold">cvsCode</span> upcoming
                features
              </h2>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="w-9 p-0">
                  <ChevronsUpDown className="h-4 w-4" />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <div className="rounded-md border px-4 py-3 font-mono text-sm">
              For Loops
            </div>
            <CollapsibleContent className="space-y-2">
              <div className="rounded-md border px-4 py-3 font-mono text-sm">
                Imports
              </div>
              <div className="rounded-md border px-4 py-3 font-mono text-sm">
                CVSCPM (Package Manager)
              </div>
            </CollapsibleContent>
          </Collapsible>

          <Accordion type="single" collapsible className="lg:w-full w-3/4">
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
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>

      <div className="relative bg-tech-pattern p-10">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        {/* First Image */}
        <div className="flex justify-end">
          <Image
            src="/images/main.cvs.png"
            alt="Image"
            width={1056}
            height={646}
          />
        </div>

        {/* Second Image */}
        <div className="flex justify-start">
          <Image
            src="/images/main.cvs-2.png"
            alt="Image"
            width={1056}
            height={646}
          />
        </div>

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </>
  );
}
