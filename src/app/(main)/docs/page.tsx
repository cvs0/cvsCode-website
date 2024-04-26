import BoldHeading from "@/components/bold-heading";
import { Breadcrumb, BreadcrumbList, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { BreadcrumbItem } from "@nextui-org/react";
import { Slash } from "lucide-react";
import React from "react";

const DocsPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
        <section className="mb-10 font-bold">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
                <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>Docs</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>
      
      <BoldHeading heading="Documentation" />
      <p className="text-zinc-500 text-center">
        Links to all of our documentation
      </p>
      <Separator className="mt-5 bg-gray-200 dark:bg-gray-700" />

      <div className="grid grid-cols-2 gap-4 mt-10">
        <div className="p-4 bg-gray-200 dark:bg-gray-900 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Getting Started</h2>
          <ul>
            <li>
              <a
                href="/docs/getting-started"
                className="text-blue-500 hover:underline"
              >
                Getting Started
              </a>
            </li>
            <li>
              <a
                href="/docs/installation"
                className="text-blue-500 hover:underline"
              >
                Installation
              </a>
            </li>
            <li>
              <a
                href="/docs/code-examples"
                className="text-blue-500 hover:underline"
              >
                Code Examples
              </a>
            </li>
          </ul>
        </div>
        <div className="p-4 bg-gray-200 dark:bg-gray-900 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Advanced Topics</h2>
          <ul>
            <li>
              <a
                href="/docs/configuration"
                className="text-blue-500 hover:underline"
              >
                Configuration
              </a>
            </li>
            <li>
              <a
                href="/docs/customization"
                className="text-blue-500 hover:underline"
              >
                Customization
              </a>
            </li>
            <li>
              <a href="/docs/faq" className="text-blue-500 hover:underline">
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DocsPage;
