import BoldHeading from "@/components/bold-heading";
import CodeBlock from "@/components/CodeBlock";
import { CustomPagination } from "@/components/pageination";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { Slash } from "lucide-react";

const CodeExamplesPage = () => {
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
              <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>Code-Examples</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>

      {/* Introduction Section */}
      <section className="mb-8">
        <BoldHeading heading="Code Examples" />
        <div className="text-center">
          <p className="mb-4">
            Explore these code examples to understand how to use{" "}
            <span className="text-blue-500">cvsCode</span> effectively!
          </p>
        </div>

        <Separator className="mt-5 bg-gray-200 dark:bg-gray-700" />
      </section>

      {/* Basic Output Program */}
      <section className="mb-8 inline-block shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-2">Basic Output Program</h2>
        <p className="text-gray-600 dark:text-gray-300">
          You can print messages to the console using the print function.
          Here&apos;s a simple program that checks a variable and prints a
          message:
        </p>
        <CodeBlock>
          {`
let x = 25;

if (x == 25) {
    print("X is 25.")
}
`}
        </CodeBlock>
      </section>

      {/* Basic While Loop Program */}
      <section className="mb-8 inline-block shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-2">Basic While Loop Program</h2>
        <p className="text-gray-600 dark:text-gray-300">
          While loops can be utilized with parameters that evaluate to a boolean
          value. Below is a straightforward program demonstrating this concept,
          where a condition is checked within the while loop before printing.
        </p>
        <CodeBlock>
          {`
let x = 25;

while (x < 100) {
    print(x)
}
`}
        </CodeBlock>
      </section>

      {/* Operators */}
      <section className="mb-8 inline-block shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-2">Operators</h2>
        <p className="text-gray-600 dark:text-gray-300">
          CVSCode supports a range of operators for performing operations on
          variables. Here&apos;s an example of using operators to check the
          result of an addition:
        </p>
        <CodeBlock>
          {`
let x = 25;
let y = 20;

if (x + y == 45) {
    print("Result was true.")
}
`}
        </CodeBlock>
      </section>

      {/* Pagination */}
      <CustomPagination activePage={3} />
    </div>
  );
};

export default CodeExamplesPage;
