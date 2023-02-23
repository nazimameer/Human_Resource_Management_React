import React from "react";

function LoginForm() {
    
  return (
    <>
      <div className="bg-slate-900 w-screen h-screen flex justify-center items-center">
        <div className=" bg-slate-700 rounded-3xl flex  ">
          <div>
            <form action="">
              <div>
                <label
                  for="first-name"
                  class="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Username
                </label>
                <div class="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autocomplete="given-name"
                    class="block w-full rounded-md border-0 py-2 px-3.5 text-sm leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  />
                </div>
              </div>

              <div>
                <label
                  for="last-name"
                  class="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Password
                </label>
                <div class="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autocomplete="family-name"
                    class="block w-full rounded-md border-0 py-2 px-3.5 text-sm leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  />
                </div>
              </div>

              <div class="mt-3">
                <button
                  type="submit"
                  class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div>
            <img src="/images/landing.png" className="w-80" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
