import { Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";

export default function Example() {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 5000);
  }, []);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl py-12 sm:px-6">
                <div>
                  <div className="mt-3 text-center sm:mt-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="80"
                      height="80"
                      className="mx-auto"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M0 0h24v24H0z"></path>
                        <path
                          fill="#22c55e"
                          d="M12.01 2.011a3.2 3.2 0 012.113.797l.154.145.698.698a1.2 1.2 0 00.71.341L15.82 4h1a3.2 3.2 0 013.195 3.018l.005.182v1c0 .27.092.533.258.743l.09.1.697.698a3.2 3.2 0 01.147 4.382l-.145.154-.698.698a1.2 1.2 0 00-.341.71l-.008.135v1a3.2 3.2 0 01-3.018 3.195l-.182.005h-1a1.2 1.2 0 00-.743.258l-.1.09-.698.697a3.2 3.2 0 01-4.382.147l-.154-.145-.698-.698a1.2 1.2 0 00-.71-.341L8.2 20.02h-1a3.2 3.2 0 01-3.195-3.018L4 16.82v-1a1.2 1.2 0 00-.258-.743l-.09-.1-.697-.698a3.2 3.2 0 01-.147-4.382l.145-.154.698-.698a1.2 1.2 0 00.341-.71L4 8.2v-1l.005-.182a3.2 3.2 0 013.013-3.013L7.2 4h1a1.2 1.2 0 00.743-.258l.1-.09.698-.697a3.2 3.2 0 012.269-.944m3.697 7.282a1 1 0 00-1.414 0L11 12.585l-1.293-1.292-.094-.083a1 1 0 00-1.32 1.497l2 2 .094.083a1 1 0 001.32-.083l4-4 .083-.094a1 1 0 00-.083-1.32"
                        ></path>
                      </g>
                    </svg>
                    <span className="px-4 mb-4 text-4xl font-bold  text-emerald-500">
                      Save 20%{" "}
                    </span>{" "}
                    <Dialog.Title
                      as="h3"
                      className="text-2xl mt-4 font-regular  leading-6 text-gray-900"
                    ></Dialog.Title>
                  </div>
                </div>
                <div className="mt-5   sm:gap-3">
                  <button
                    type="button"
                    className="inline-flex whitespace-nowrap w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 sm:col-start-2"
                    onClick={() => setOpen(false)}
                  >
                    Talk on What'sapp : +92 309 5203945
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
