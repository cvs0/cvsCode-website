import BoldHeading from "@/components/bold-heading";
import { CustomPagination } from "@/components/pageination"; // Typo in 'pageination' corrected
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Code } from "@nextui-org/react";
import { Slash } from "lucide-react";

const InstallationPage = () => {
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
              <BreadcrumbPage>Installation</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>

      {/* Introduction Section */}
      <section className="mb-8">
        <BoldHeading heading="Installation" />
        <div className="text-center">
          <p className="mb-4">
            Here is how to install{" "}
            <span className="text-blue-500">cvsCode</span>! <br />
            Here&apos;s how to get started:
          </p>
        </div>
      </section>

      {/* Installation Steps */}
      <section className="mb-8">
        <div className="inline-block shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2">Install Git</h2>
          <p className="text-gray-600 dark:text-gray-300">
            You will need Git so you can download the repository through your
            command line interface.
          </p>

          {/* Linux Installation */}
          <h3 className="text-md font-semibold mb-2 mt-4">
            Installation on Linux:
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            You will need Git so you can download the repository through your
            command line interface. If you are on Fedora or any RPM-based
            distribution like CentOS you can use{" "}
            <a
              href="https://docs.fedoraproject.org/en-US/quick-docs/dnf/"
              className="hover:underline"
            >
              <span className="text-blue-500">dnf</span>
            </a>
            .
          </p>
          <Code className="bg-black rounded text-gray-400 mt-2">
            <span className="text-emerald-500">$</span> sudo dnf install git-all
          </Code>

          {/* Mac Installation */}
          <h3 className="text-md font-semibold mb-2 mt-4">
            Installation on Mac:
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            The installation is a lot easier for Mac users. There are several
            ways of installing it:
          </p>

          <ul className="ml-6 dark:text-gray-100">
            <li>
              - Install the XCode Command Line Tools (On Mavericks (10.9) or
              above).
            </li>
            <li>
              - If you want a more up-to-date version you can install it via a
              binary installer from the{" "}
              <a
                href="https://git-scm.com/download/mac"
                className="hover:underline"
              >
                <span className="text-blue-500">Git Website</span>
              </a>
              .
            </li>
          </ul>

          {/* Windows Installation */}
          <h3 className="text-md font-semibold mb-2 mt-4">
            Installation on Windows:
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            There are also various ways to install Git on Windows, such as:
          </p>

          <ul className="ml-6 dark:text-gray-100">
            <li>
              - Install directly from the{" "}
              <a
                href="https://git-scm.com/download/win"
                className="hover:underline"
              >
                <span className="text-blue-500">Git Website</span>
              </a>
              .
            </li>
            <li>
              - There is a second project, called Git For Windows. You can
              download it{" "}
              <a href="https://gitforwindows.org" className="hover:underline">
                <span className="text-blue-500">here</span>
              </a>
              .
            </li>
          </ul>
        </div>
      </section>

      {/* Clone Repository Section */}
      <section className="mb-8 inline-block shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-2">
          Clone the GitHub repository
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Use the command above to clone the GitHub repository to your computer
          so you have access to all the files.
        </p>

        <Code className="bg-black rounded text-gray-400 mt-2">
          <span className="text-emerald-500">$</span> git clone
          https://github.com/cvs0/cvsCode/cvsCode.git
        </Code>
      </section>

      {/* Install Dependencies Section */}
      <section className="mb-8 inline-block shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-2">Install dependencies</h2>
        <p className="text-gray-600 dark:text-gray-300">
          After cloning the repository, navigate to the cloned directory by
          running the first command, and then run the second command to install
          all required dependencies.
        </p>

        <div>
          <Code className="bg-black rounded text-gray-400 mt-2">
            <span className="text-emerald-500">$</span> cd cvsCode
          </Code>
        </div>
        <div>
          <Code className="bg-black rounded text-gray-400 mt-2">
            <span className="text-emerald-500">$</span> npm install
          </Code>
        </div>
      </section>

      {/* Start the Application Section */}
      <section className="mb-8 inline-block shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-2">
          Start the application with Deno
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          After installing Deno, <br />
          navigate to the directory where <code>main.ts</code> is located and
          run the command above to start the application using Deno.
        </p>

        <Code className="bg-black rounded text-gray-400 mt-2">
          <span className="text-emerald-500">$</span> deno run -A main.ts
        </Code>
      </section>

      {/* Additional Information Section */}
      <section className="mb-8 inline-block shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-2">Additional Information</h2>
        <p className="text-gray-600 dark:text-gray-300">
          You may also need to configure additional settings or set up
          environment variables. <br />
          Refer to the documentation or README file included with the repository
          for more detailed instructions.
        </p>
      </section>

      {/* Pagination */}
      <CustomPagination activePage={2} />
    </div>
  );
};

export default InstallationPage;
