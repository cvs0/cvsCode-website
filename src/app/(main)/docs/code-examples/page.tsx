import BoldHeading from "@/components/bold-heading";
import { CustomPagination } from "@/components/pageination";

const CodeExamplesPage = () => {
    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            {/* Introduction Section */}
            <section className="mb-8">
                <BoldHeading heading="Code Examples" />
                <div className="text-center">
                    <p className="mb-4">
                        Explore these code examples to understand how to use <span className="text-blue-500">cvsCode</span> effectively!
                    </p>
                </div>
            </section>

            {/* Basic Output Program */}
            <section className="mb-8 inline-block shadow-md rounded-lg p-4">
                <h2 className="text-lg font-semibold mb-2">Basic Output Program</h2>
                <p className="text-gray-600 dark:text-gray-300">
                    You can print messages to the console using the print function. Here&apos;s a simple program that checks a variable and prints a message:
                </p>
                <div className="bg-gray-200 p-4 rounded-lg mt-4 dark:bg-customDark">
                    <pre className="whitespace-pre-wrap">
                        {`
let x = 25;

if (x == 25) {
    print("X is 25.")
}
`}
                    </pre>
                </div>
            </section>

            {/* Basic While Loop Program */}
            <section className="mb-8 inline-block shadow-md rounded-lg p-4">
                <h2 className="text-lg font-semibold mb-2">Basic While Loop Program</h2>
                <p className="text-gray-600 dark:text-gray-300">
                    While loops can be utilized with parameters that evaluate to a boolean value. Below is a straightforward program demonstrating this concept, where a condition is checked within the while loop before printing.
                </p>
                <div className="bg-gray-200 p-4 rounded-lg mt-4 dark:bg-customDark">
                    <pre className="whitespace-pre-wrap">
                        {`
let x = 25;

while (x < 100) {
    print(x)
}
`}
                    </pre>
                </div>
            </section>

            {/* Operators */}
            <section className="mb-8 inline-block shadow-md rounded-lg p-4">
                <h2 className="text-lg font-semibold mb-2">Operators</h2>
                <p className="text-gray-600 dark:text-gray-300">
                    CVSCode supports a range of operators for performing operations on variables. Here&apos;s an example of using operators to check the result of an addition:
                </p>
                <div className="bg-gray-200 p-4 rounded-lg mt-4 dark:bg-customDark">
                    <pre className="whitespace-pre-wrap">
                        {`
let x = 25;
let y = 20;

if (x + y == 45) {
    print("Result was true.")
}
`}
                    </pre>
                </div>
            </section>

            {/* Pagination */}
            <CustomPagination activePage={3} />
        </div>
    );
}

export default CodeExamplesPage;
