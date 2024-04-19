"use client"

import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "./ui/command";
import { Calendar, Smile, Calculator, User, CreditCard, Settings, File } from "lucide-react";
import { useState } from "react";
import { UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const MainNav = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter()
  
  return (
    <nav className="sticky top-0 z-10 bg-white dark:bg-background shadow-md w-full">
      <div className="flex items-center justify-between py-4 px-8">
        <div className="flex items-center">
          <UserButton />
          <Button variant="ghost" className="ml-4" onClick={() => router.push('/')}>Home</Button>
          <Button variant="ghost" className="ml-4" onClick={() => setOpen(!open)}>Docs</Button>
          <Button variant="ghost" className="ml-4">About</Button>
        </div>
        
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Search all docs"/>

          <CommandList>
            <CommandEmpty>
              No Results found
            </CommandEmpty>
            <CommandGroup key="docs" heading="Docs">
              <CommandItem onSelect={() => {
                router.push('/docs/getting-started')
              }}>
                <File />
                <span>Getting Started</span>
              </CommandItem>
              <CommandItem onSelect={() => {
                router.push('/docs/installation')
                setOpen(false)
              }}>
                <File />
                <span>Installation</span>
              </CommandItem>
              <CommandItem onSelect={() => {
                router.push('/docs/code-examples')
                setOpen(false)
              }}>
                <File />
                <span>Code Examples</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
        <ModeToggle />
      </div>
    </nav>
  );
}

export default MainNav;
