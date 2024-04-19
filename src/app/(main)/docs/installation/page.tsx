import BoldHeading from "@/components/bold-heading";
import { CustomPagination } from "@/components/pageination"; // Typo in 'pageination' corrected

const InstallationPage = () => {
    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            {/* Introduction Section */}
            <section className="mb-8">
                <BoldHeading heading="Installation" />
                <div className="text-center">
                    <p className="mb-4">
                        Here is how to install <span className="text-blue-500">cvsCode</span>! <br />
                        Here&apos;s how to get started:
                    </p>
                </div>
            </section>

            {/* Clone Repository Section */}
            <section className="mb-8 inline-block shadow-md rounded-lg p-4">
                <div className="text-center inline-block bg-black rounded px-2 py-1 mb-4">
                    <span className="text-gray-400 font-normal">git clone https://github.com/cvs0/cvscode.git</span>
                </div>
                <h2 className="text-lg font-semibold mb-2">Clone the GitHub repository</h2>
                <p className="text-gray-600 dark:text-gray-300">
                    Use the command above to clone the GitHub repository to your computer so you have access to all the files.
                </p>
            </section>

            {/* Install Dependencies Section */}
            <section className="mb-8 inline-block shadow-md rounded-lg p-4">
                <div className="text-center inline-block bg-black rounded px-2 py-1 mb-4">
                    <span className="text-gray-400 font-normal">cd cvscode</span>
                </div>
                <br />
                <div className="text-center inline-block bg-black rounded px-2 py-1 mb-4">
                    <span className="text-gray-400 font-normal">npm install</span>
                </div>
                <h2 className="text-lg font-semibold mb-2">Install dependencies</h2>
                <p className="text-gray-600 dark:text-gray-300">
                    After cloning the repository, navigate to the cloned directory by running the first command, 
                    and then run the second command to install all required dependencies.
                </p>
            </section>

            {/* Start the Application Section */}
            <section className="mb-8 inline-block shadow-md rounded-lg p-4">
                <div className="text-center inline-block bg-black rounded px-2 py-1 mb-4">
                    <span className="text-gray-400 font-normal">deno run -A main.ts</span>
                </div>
                <h2 className="text-lg font-semibold mb-2">Start the application with Deno</h2>
                <p className="text-gray-600 dark:text-gray-300">
                    After installing Deno, <br />
                    navigate to the directory where <code>main.ts</code> is located and run the command above to start the application using Deno.
                </p>
            </section>

            {/* Additional Information Section */}
            <section className="mb-8 inline-block shadow-md rounded-lg p-4">
                <h2 className="text-lg font-semibold mb-2">Additional Information</h2>
                <p className="text-gray-600 dark:text-gray-300">
                    You may also need to configure additional settings or set up environment variables. <br />
                    Refer to the documentation or README file included with the repository for more detailed instructions.
                </p>
            </section>

            {/* Pagination */}
            <CustomPagination activePage={2} />
        </div>
    );
}

export default InstallationPage;
