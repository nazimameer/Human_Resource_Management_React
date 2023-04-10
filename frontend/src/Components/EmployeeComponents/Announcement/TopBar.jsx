import React from 'react'

function TopBar() {
  return (
    <div>
      <div className="p-6 px-4 pb-0 mb-0  border-b-0 rounded-t-2xl">

        <div className="relative flex flex-col flex-auto min-w-0 p-4  overflow-hidden break-words bg-white border-0 shadow-3xl dark:bg-slate-850 rounded-2xl bg-clip-border my-3">
          <div className="flex flex-wrap -mx-3">
            <div className="flex-none w-auto max-w-full px-3">
              <div className="mt-2 ml-3 text-lg relative inline-flex items-center justify-center  text-black transition-all duration-200 ease-in-out h-19 w-19 rounded-xl">
                Announcements
              </div>
            </div>

            <div className="w-full max-w-full px-3 mx-auto mt-4 sm:my-auto sm:mr-0 md:w-1/2 md:flex-none lg:w-4/12">
              <div className="relative right-0">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
