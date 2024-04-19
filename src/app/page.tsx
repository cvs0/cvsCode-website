"use client"

import BoldHeading from "@/components/bold-heading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { SiJavascript, SiReact, SiTypescript } from 'react-icons/si';

export default function Home() {
  const [open, setOpen] = useState(false)
  return (
    <div className="mx-auto max-w-4xl px-6">
      {/* Introduction Section */}
      <section className="mt-10">
        <BoldHeading heading="cvsCode" version/>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight text-center">
          A high-speed scripting language built on <span className="text-blue-500">TypeScript</span>
        </h2>

        <div className="flex mt-6 justify-center">
          <SiTypescript className="mr-6" size={40} />
          <SiJavascript className="mr-6" size={40} />
          <SiReact size={40} />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight border-b pb-2 mb-6">Features</h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <li className="flex items-center space-x-2">
            <span className="text-xl text-indigo-600"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg></span>
            <span className="font-semibold">Frequent updates</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-xl text-indigo-600"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg></span>
            <span>Loops</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-xl text-indigo-600"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg></span>
            <span>Function declarations</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-xl text-indigo-600"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg></span>
            <span>Native functions</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-xl text-indigo-600"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg></span>
            <span>High speed</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-xl text-indigo-600"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg></span>
            <span>Fast REPL</span>
          </li>
        </ul>
      </section>


      <h1 className="font-bold mt-10">
        Star our <span className="text-blue-500 underline"><a href="https://github.com/cvs0/cvsCode">GitHub</a></span> to find out when the newest features are releasing!
      </h1>
      <div className="mt-10 flex space-x-8">
        <Collapsible
          open={open}
          onOpenChange={setOpen}
          className="w-[350px] space-y-2"
        >
          <div className="flex items-center justify-between space-x-4 px-4 mt-10">
            <h4 className="text-sm font-semibold">
              <span className="font-extrabold">cvsCode</span> upcoming features
            </h4>
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
              You can make a pull-request with some useful bug-fixes or features. Read up on our guidelines <span className="text-blue-500 underline"><a href="https://github.com/cvs0/CVSCode/tree/main?tab=readme-ov-file#pull-request-requirements">here</a></span>.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is the project still being maintained?</AccordionTrigger>
            <AccordionContent>
              Yes, it is. I have some very exciting features coming soon.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="mt-20 flex justify-center">
        <Carousel className="w-full max-w-sm relative">
          <CarouselContent>
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <Image src={`/images/${index}.png`} width={600} height={600} alt={`carousel image number ${index}`} aria-hidden />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:block absolute top-1/2 left-0 transform -translate-y-1/2 -ml-8" />
          <CarouselNext className="hidden sm:block absolute top-1/2 right-0 transform -translate-y-1/2 -mr-8"  />
        </Carousel>
      </div>
    </div>
  );
}
