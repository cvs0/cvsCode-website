"use client";

import { UserButton } from "@clerk/nextjs";
import { File } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useWindowSize } from "../../hooks/use-window-size";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
const MainNav = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const { width } = useWindowSize();

  return (
    <nav className="sticky top-0 z-10 bg-white dark:bg-background dark:shadow-gray-900 shadow-md w-full backdrop-filter backdrop-blur-lg bg-opacity-30">
      <div className="flex items-center justify-between py-4 px-8">
        <div className="flex items-center">
          <UserButton />
          <Button
            variant="ghost"
            className="ml-4"
            onClick={() => router.push("/")}
          >
            Home
          </Button>
          <Button
            variant="ghost"
            className="lg:ml-4 ml-2"
            onClick={() => setOpen(!open)}
          >
            Docs
          </Button>
          <Button
            variant="ghost"
            className="lg:ml-4 ml-2"
            onClick={() => router.push("/about")}
          >
            About
          </Button>
          {width >= 640 && (
            <>
              <Button
                variant="ghost"
                className="lg:ml-4 ml-2"
                onClick={() =>
                  (window.location.href = "https://packages.cvscode.cvs0.xyz")
                }
              >
                Packages
              </Button>
              <Button
                variant="ghost"
                className="lg:ml-4 ml-2"
                onClick={() => router.push("/download")}
              >
                Download
              </Button>
            </>
          )}
        </div>

        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Search all docs" />

          <CommandList>
            <CommandEmpty>No Results found</CommandEmpty>
            <CommandGroup key="docs" heading="Docs">
              <CommandItem
                className=""
                onSelect={() => {
                  router.push("/docs/getting-started");
                  setOpen(false);
                }}
              >
                <File />
                <span>Getting Started</span>
              </CommandItem>
              <CommandItem
                onSelect={() => {
                  router.push("/docs/installation");
                  setOpen(false);
                }}
              >
                <File />
                <span>Installation</span>
              </CommandItem>
              <CommandItem
                onSelect={() => {
                  router.push("/docs/code-examples");
                  setOpen(false);
                }}
              >
                <File />
                <span>Code Examples</span>
              </CommandItem>
              <CommandItem
                onSelect={() => {
                  router.push("/docs/syntax");
                  setOpen(false);
                }}
              >
                <File />
                <span>Syntax</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default MainNav;
