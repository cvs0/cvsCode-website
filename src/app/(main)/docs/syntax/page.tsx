import BoldHeading from "@/components/bold-heading";
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

const SyntaxPage = () => {
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
              <BreadcrumbPage>Syntax</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>

      {/* Introduction Section */}
      <section className="mb-8">
        <BoldHeading heading="Syntax" />
        <div className="text-center">
          <p className="mb-4">
            Understanding the syntax of{" "}
            <span className="text-blue-500">cvsCode</span> is crucial for
            effective programming. Below, we delve into the key components of
            cvsCode syntax.
          </p>
        </div>

        <Separator className="mt-5 bg-gray-200 dark:bg-gray-700" />
      </section>

      {/* Syntax Section 1: Variables */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Variables</h2>
        <div>
          <p className="mb-4">
            Variables in cvsCode are declared using the `const` or `let` keyword
            followed by the variable name.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Variable Declaration:
          </p>
          <div className="bg-gray-200 p-4 rounded-lg mt-4 dark:bg-customDark">
            <pre className="whitespace-pre-wrap">
              {`
const x = 10;
let y = "Hello CVSCode";
`}
            </pre>
          </div>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            In this example, `x` is assigned the value `10`, and `y` is assigned
            the string `&quot;Hello, cvsCode!&quot;`.
          </p>
        </div>
      </section>

      {/* Syntax Section 2: Conditional Statements */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Conditional Statements</h2>
        <div>
          <p className="mb-4">
            Conditional statements in cvsCode are similar to JavaScript. You can
            use `if`, `else if`, and `else` to control the flow of your code.
          </p>
          <p className="text-gray-600 dark:text-gray-300">Example:</p>
          <div className="bg-gray-200 p-4 rounded-lg mt-4 dark:bg-customDark">
            <pre className="whitespace-pre-wrap">
              {`const x = 10;

if (x == 10) {
  print("x is equal to 10");
} else {
  console.log("x is not equal to 10");
}`}
            </pre>
          </div>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            This code snippet checks if the variable `x` is equal to `10` and
            logs the appropriate message based on the condition.
          </p>
        </div>
      </section>

      {/* Syntax Section 3: Functions */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Functions</h2>
        <div>
          <p className="mb-4">
            Functions in cvsCode are declared using the `fn` keyword followed by
            the function name and parameters.
          </p>
          <p className="text-gray-600 dark:text-gray-300">Example:</p>
          <div className="bg-gray-200 p-4 rounded-lg mt-4 dark:bg-customDark">
            <pre className="whitespace-pre-wrap">
              {`fn greet() {
  print("Hello!");
};

greet("cvsCode");`}
            </pre>
          </div>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            This code defines a function `greet` that takes a `name` parameter
            and logs a greeting message. Function declarations end with a
            semicolon.
          </p>
        </div>
      </section>
    </div>
  );
};

export default SyntaxPage;
