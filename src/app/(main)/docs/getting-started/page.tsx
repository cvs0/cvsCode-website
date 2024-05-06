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
import { Separator } from "@/components/ui/separator";
import { BreadcrumbItem, Code } from "@nextui-org/react";
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
            Welcome to <span className="text-blue-500">CVSCode</span>! Below are
            the steps to get started:
          </p>
        </div>

        <Separator className="mt-5 bg-gray-200 dark:bg-gray-700" />
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

      {/* CVS File Section */}
      <section className="mb-8 inline-block shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-2">Working with .cvs Files</h2>
        <div className="mb-4">
          <p className="text-gray-600 dark:text-gray-300">
            <span className="text-blue-500">CVSCode</span> scripts are typically
            saved with a .cvs extension. These files contain your{" "}
            <span className="text-blue-500">CVSCode</span> code and can be
            executed using the <span className="text-blue-500">CVSCode</span>{" "}
            REPL (Read-Eval-Print Loop) provided by Deno.
          </p>
        </div>
        <div className="mb-4">
          <p className="text-gray-600 dark:text-gray-300">
            To create a <span className="text-blue-500">CVSCode</span> script,
            simply create a new file with the .cvs extension and write your{" "}
            <span className="text-blue-500">CVSCode</span> code in it. You can
            then run this script using the{" "}
            <span className="text-blue-500">CVSCode</span> CLI or the Deno
            command-line interface.
          </p>
        </div>
        <div className="mb-4">
          <p className="text-gray-600 dark:text-gray-300">
            <span className="text-blue-500">CVSCode</span> scripts can include a
            variety of functionality, including variable declarations, function
            definitions, control flow statements, and more. You can leverage the
            full power of TypeScript within your
            <span className="text-blue-500">CVSCode</span> scripts, allowing for
            strong typing, advanced syntax features, and modern development
            practices.
          </p>
        </div>
        <div className="mb-4">
          <p className="text-gray-600 dark:text-gray-300">
            When running a .cvs file, you can use the run command followed by
            the filename to execute the script. For example:
          </p>
        </div>
        <Code className="text-center inline-block bg-black rounded px-2 py-1 mb-2">
          <span className="text-emerald-500">$</span> run filename.cvs
        </Code>
        <p className="text-gray-600 dark:text-gray-300">
          Replace filename.cvs with the name of your CVSCode script file.
        </p>
      </section>

      {/* Added Getting Started Content */}
      <section className="mb-8 inline-block shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-2">
          Getting Started with CVSCode
        </h2>
        <div className="mb-4">
          <div className="mb-4">
            <p className="text-gray-600 dark:text-gray-300">
              CVSCode is an elegant scripting language crafted with TypeScript,
              designed to provide a seamless and efficient development
              experience. Developed by cvs0,{" "}
              <span className="text-blue-500">CVSCode</span> aims to simplify
              the process of writing, debugging, and executing scripts for
              various applications and tasks.
            </p>
          </div>
          <div className="mb-4">
            <p className="text-gray-600 dark:text-gray-300">
              Leveraging the power of TypeScript,{" "}
              <span className="text-blue-500">CVSCode</span> offers strong
              typing, advanced syntax features, and modern development tools to
              enhance productivity and code quality. The language is designed to
              be expressive, allowing developers to write clean and concise code
              while maintaining readability and maintainability.
            </p>
          </div>
          <div className="mb-4">
            <p className="text-gray-600 dark:text-gray-300">
              One of the key features of{" "}
              <span className="text-blue-500">CVSCode</span> is its integration
              with Deno, a secure runtime for JavaScript and TypeScript. By
              leveraging Deno,
              <span className="text-blue-500">CVSCode</span> provides a robust
              environment for running scripts, managing dependencies, and
              accessing system resources. The REPL (Read-Eval-Print Loop)
              provided by Deno enables developers to interactively test and
              debug <span className="text-blue-500">CVSCode</span> scripts,
              making the development process more iterative and agile.
            </p>
          </div>
          <div>
            <p className="text-gray-600 dark:text-gray-300">
              Additionally, <span className="text-blue-500">CVSCode</span> comes
              with a command-line interface (CLI) that streamlines common
              development tasks such as project setup, script execution, and
              debugging. The CLI provides intuitive commands and options for
              managing CVSCode projects, running scripts, and inspecting runtime
              behavior, making it easy for developers to work with CVSCode in
              various environments.
            </p>
          </div>
        </div>
      </section>

      <CustomPagination activePage={1} />
    </div>
  );
};

export default GettingStartedPage;
