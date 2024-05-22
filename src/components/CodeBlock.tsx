"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Copy, CopyCheck, CopyIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  children: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    console.log(children)
    navigator.clipboard.writeText(children);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="bg-gray-200 p-4 rounded-lg mt-4 dark:bg-customDark relative">
      <Button
        className={cn("absolute top-8 right-8 bg-accent border-none px-2 py-1 rounded-md text-xs", isCopied ? "bg-emerald-500 hover:bg-emerald-200" : "bg-accent hover:bg-accent/5")}
        size="icon"
        variant="ghost"
        onClick={handleCopy}
      >
        {isCopied ? <CopyCheck /> : <Copy />}
      </Button>
      <pre className="whitespace-pre-wrap">{children}</pre>
    </div>
  );
};

export default CodeBlock;
