import BoldHeading from "@/components/bold-heading";
import { CustomPagination } from "@/components/pageination"; // Typo in 'pageination' corrected
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "@/components/ui/pagination";
import { BreadcrumbItem } from "@nextui-org/react";
import { Slash } from "lucide-react";

const GettingStartedPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Introduction Section */}
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
              <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
                <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>Getting-Started</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>

      <section className="mb-8">
        <BoldHeading heading="Getting Started" />
        <div className="text-center">
          <p className="mb-4">
            Welcome to <span className="text-blue-500">cvsCode</span>! Below are
            the steps to get started:
          </p>
        </div>
      </section>

      {/* Directory Navigation Section */}
      <section className="mb-8 inline-block shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-2">
          Navigating to REPL Directory
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Once installed, navigate to the directory where you&apos;ve installed
          the cvsCode REPL.
        </p>
      </section>

      {/* Running Scripts Section */}
      <section className="mb-8 inline-block shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-2">Running Scripts</h2>
        <p className="text-gray-600 dark:text-gray-300">
          To run a script, use the command format:
        </p>
        <div className="text-center inline-block bg-black rounded px-2 py-1 mb-2">
          <span className="text-gray-400 font-normal">run (filename).cvs</span>
        </div>
        <p className="text-gray-600 dark:text-gray-300">
          Replace (filename) with the name of your script file.
        </p>
      </section>

      {/* Added Getting Started Content */}
      <section className="mb-8 inline-block shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-2">
          Getting Started with CVSCode
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          CVSCode is an elegant scripting language crafted with TypeScript,
          developed by CVS0. It leverages Deno to initiate the REPL
          (Read-Eval-Print Loop). Through this, you can employ the CVSCode
          command-line interface to effortlessly launch and debug your CVSCode
          scripts.
        </p>
      </section>

      <CustomPagination activePage={1} />
    </div>
  );
};

export default GettingStartedPage;
