import React from 'react'

function ConfirmModal({open, closeModal, handleRemove}) {


    if(!open) return null
  return (
    <div className="overlay h-screen w-full items-center">
      <div className="modalcontainer flex flex-wrap -mx-3">
        <div className="w-full max-w-full px-3 m-auto flex-0 lg:w-4/12 my-32">
            <div
              active=""
              form="user"
              className=" top-0 left-0 flex flex-col visible w-full h-auto min-w-0 p-4 break-words bg-white border-0 shadow-xl opacity-100 dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border"
            >
              <div  className="flex justify-between">
                <div>
              <h5 className="mb-0 font-bold text-black">Are you sure ?</h5>
              <p className="mb-0 text-sm leading-normal">
                You Want to remove
              </p>
                </div>
              <div className="pr-5 cursor-pointer" onClick={closeModal}>
                X
              </div>
              </div>
              <div>
                <div className="flex mt-6">
                  <button
                    type="submit"
                    aria-controls="address"
                    next-form-btn=""
                    href="/"
                    className="inline-block px-6 py-3 mb-0 ml-auto text-xs font-bold text-right text-white uppercase align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 bg-gradient-to-tl from-red-600 to-red-500 leading-pro tracking-tight-rem bg-150 bg-x-25"
                    onClick={handleRemove}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmModal
