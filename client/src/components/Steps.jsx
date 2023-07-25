import setup from "../assets/images/setup.svg";

const Steps = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <h2 className="font-semibold text-center text-2xl pb-24">Follow the guidlines to create your personlized chatbot</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            
          <div className="grid gap-6 md:grid-cols-2 md:col-span-2 lg:col-span-3">
            <div className="rounded p-5 lg:transition lg:duration-300 lg:hover:bg-indigo-100 bg-indigo-50">
              <div className="flex items-center mb-1">
                <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-white rounded bg-purple-400">
                  1
                </span>
                <p className="text-lg font-semibold sm:text-base">
                  Initial setup
                </p>
              </div>
              <p className="text-sm text-gray-900">
              Clone the project from my github repository: <a href="https://www.gtihub.com">https://www.github.com</a> into your local device
              </p>
            </div>
            <div className="rounded p-5 lg:transition lg:duration-300 lg:hover:bg-teal-100 bg-teal-50">
              <div className="flex items-center mb-1">
                <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-teal-900 rounded bg-teal-400">
                  2
                </span>
                <p className="text-lg font-semibold sm:text-base">
                Setting up your virtial environment
                </p>
              </div>
              <p className="text-sm text-gray-900">
              In the bot directory, create a virtual environment using the command virtualenv env_name. Now, install the required packages mentioned in the file requirements.txt
              </p>
            </div>
            <div className="rounded p-5 lg:transition lg:duration-300 lg:hover:bg-teal-100 bg-teal-50">
              <div className="flex items-center mb-1">
                <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-white rounded md:text-teal-900 bg-purple-400 md:bg-teal-400">
                  3
                </span>
                <p className="text-lg font-semibold sm:text-base">
                Training your own bot
                </p>
              </div>
              <p className="text-sm text-gray-900">
              Modify the contents in the intents.json file present in the Data folder in the bot directory. and then train the model by running the command python train.py in the bot directory
              </p>
            </div>
            <div className="rounded p-5 lg:transition lg:duration-300 lg:hover:bg-indigo-100 bg-indigo-50">
              <div className="flex items-center mb-1">
                <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-teal-900 rounded md:text-white bg-teal-400 md:bg-purple-400">
                  4
                </span>
                <p className="text-lg font-semibold sm:text-base">Client setup</p>
              </div>
              <p className="text-sm text-gray-900">
              In a seperate command prompt, run the tailwind cli command to build it. Now open another command prompt and run the command npm install in the client directory. After that has finished, run the client using the command npm run dev.
              </p>
            </div>
          </div>
          <div className="relative md:col-span-2 lg:col-span-2">
            <img
              className="inset-0 object-fit object-bottom w-full h-56 rounded lg:absolute lg:h-full"
              src={setup}
              alt=""
            />
          </div>
        </div>
      </div>
    );
  };

export default Steps;