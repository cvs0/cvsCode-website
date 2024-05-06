"use client";

import BoldHeading from "@/components/bold-heading";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import {
  SiCss3,
  SiDiscord,
  SiGithub,
  SiGmail,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiX,
} from "react-icons/si";
import { CircularProgress } from "@nextui-org/react";
import React from "react";
import { Check, CheckCheck, X } from "lucide-react";

const AboutPage = () => {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto max-w-4xl px-6">
      <div className="items-center justify-center mt-10">
        <BoldHeading heading="About" />
      </div>

      <Separator className="mt-5 bg-gray-200 dark:bg-gray-700" />

      <div className="justify-center items-center mt-20">
        <h1 className="text-4xl font-bold text-center mb-5">About cvsCode</h1>

        <p className="text-zinc-500 font-bold text-center">
          cvsCode is a high-speed scripting language based on{" "}
          <span className="text-blue-500">Typescript</span> created by{" "}
          <span className="text-blue-500">cvs0</span> near the end of{" "}
          <span className="text-blue-500">2023</span>.
        </p>

        <h1 className="text-4xl font-bold text-center mb-5 mt-5">Roadmap</h1>

        <ul className="mt-5 flex flex-col items-center space-y-6 mb-10">
          <div>
            <li className="flex items-center relative">
              <X className="text-red-500" />

              <span className="text-zinc-500 text-lg font-bold">For loops</span>
            </li>

            <li className="flex items-center relative">
              <Check className="text-emerald-500" />

              <span className="text-zinc-500 text-lg font-bold">
                Package manager
              </span>
            </li>

            <li className="flex items-center relative">
              <X className="text-red-500" />
              <span className="text-zinc-500 text-lg font-bold">Imports</span>
            </li>

            <li className="flex items-center relative">
              <X className="text-red-500" />
              <span className="text-zinc-500 text-lg font-bold">
                Concatenation
              </span>
            </li>
          </div>
        </ul>
      </div>

      <Separator className="mt-5 bg-gray-200 dark:bg-gray-700" />

      <div className="justify-center items-center mt-10">
        <h1 className="text-4xl font-bold text-center">Meet the developer</h1>

        <div className="flex justify-center items-center mt-10">
          <Drawer>
            <DrawerTrigger>
              <div>
                <Image
                  className="sm:w-150 sm:h-150 xs:w-100 xs:h-100 p-2 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                  src="https://www.fergus.shop/images/Headshot.png"
                  alt="Developer headshot"
                  width={200}
                  height={200}
                />
              </div>
            </DrawerTrigger>
            <DrawerContent>
              <h1 className="text-center text-4xl font-bold mt-5">About me:</h1>

              <ul className="mt-5 flex flex-col items-center">
                <div className="text-center text-gradient font-semibold text-2xl flex items-center">
                  <SiReact className="mr-2" /> React
                </div>
                <div className="text-center text-gradient font-semibold text-2xl flex items-center">
                  <SiNextdotjs className="mr-2" /> Next.js
                </div>
                <div className="text-center text-gradient font-semibold text-2xl flex items-center">
                  <SiTypescript className="mr-2" /> TypeScript
                </div>
                <div className="text-center text-gradient font-semibold text-2xl flex items-center">
                  <SiPrisma className="mr-2" /> Prisma
                </div>
                <div className="text-center text-gradient font-semibold text-2xl flex items-center">
                  <SiJavascript className="mr-2" /> JavaScript
                </div>
                <div className="text-center text-gradient font-semibold text-2xl flex items-center">
                  <SiTailwindcss className="mr-2" /> Tailwind CSS
                </div>
                <div className="text-center text-gradient font-semibold text-2xl flex items-center">
                  <SiHtml5 className="mr-2" /> HTML5
                </div>
                <div className="text-center text-gradient font-semibold text-2xl flex items-center">
                  <SiCss3 className="mr-2" /> CSS3
                </div>
                <div className="text-center text-gradient font-extrabold text-2xl flex items-center mb-10">
                  Full stack developer
                </div>
              </ul>
            </DrawerContent>
          </Drawer>

          <h1 className="text-gradient lg:text-9xl text-6xl font-extrabold ml-4 text-center">
            cvs0
          </h1>
        </div>
      </div>

      <Separator className="mt-5 bg-gray-200 dark:bg-gray-700" />

      <div className="justify-center items-center mt-5">
        <h1 className="text-4xl font-bold text-center">Contact</h1>
      </div>

      <Separator className="mt-5 bg-gray-200 dark:bg-gray-700" />

      <ul className="mt-5 flex flex-row items-center justify-center">
        <div className="text-center text-gradient font-semibold text-2xl flex items-center mr-4">
          <a
            target="_blank"
            href="https://discordapp.com/users/1147380185893716068"
          >
            <SiDiscord className="lg:w-40 lg:h-40 w-20 h-20" />
          </a>
        </div>

        <div className="text-center text-gradient font-semibold text-2xl flex items-center mr-4">
          <a target="_blank" href="mailto:cvs0@ogmc.store">
            <SiGmail className="lg:w-40 lg:h-40 w-20 h-20" />
          </a>
        </div>

        <div className="text-center text-gradient font-semibold text-2xl flex items-center">
          <a target="_blank" href="https://github.com/cvs0">
            <SiGithub className="lg:w-40 lg:h-40 w-20 h-20" />
          </a>
        </div>
      </ul>
    </div>
  );
};

export default AboutPage;
