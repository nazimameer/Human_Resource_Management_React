import React from 'react'

function Footer() {
  return (
    <div className="bg-slate-900">
      <footer class="pt-4">
        <div class="w-full px-6 mx-auto">
          <div class="flex flex-wrap items-center -mx-3 lg:justify-between">
            <div class="w-full max-w-full px-3 mt-0 mb-6 shrink-0 lg:mb-0 lg:w-1/2 lg:flex-none">
              <div class="leading-normal text-center text-sm text-slate-500 lg:text-left">
                ©
                <script>document.write(new Date().getFullYear() + ",");</script>
                Transforming HR Management, One Company at a Time
                
                for a better web.
              </div>
            </div>
            <div class="w-full max-w-full px-3 mt-0 shrink-0 lg:w-1/2 lg:flex-none">
              <ul class="flex flex-wrap justify-center pl-0 mb-0 list-none lg:justify-end">
                <li class="nav-item">
                  
                </li>
                <li class="nav-item">
                  <div
                    class="block px-4 pt-0 pb-1 font-normal transition-colors ease-soft-in-out text-sm text-slate-500"
                    target="_blank"
                  >
                    About Us
                  </div>
                </li>
                <li class="nav-item">
                  <div
                    class="block px-4 pt-0 pb-1 font-normal transition-colors ease-soft-in-out text-sm text-slate-500"
                    target="_blank"
                  >
                    Blog
                  </div>
                </li>
                <li class="nav-item">
                  <div
                    class="block px-4 pt-0 pb-1 pr-0 font-normal transition-colors ease-soft-in-out text-sm text-slate-500"
                    target="_blank"
                  >
                    License
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
