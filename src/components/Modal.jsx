import { Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";

export default function Example() {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 3000);
  }, []);

  const contacts = [
    {
      id: 1,
      name: "Whatsapp",
      info: "+92 309 5203945",
      color: "bg-green-600",
    },
    {
      id: 2,
      name: "Discord",
      info: "kashif8248",
      color: "bg-blue-600",
    },
    {
      id: 3,
      name: "Email",
      info: "captainkashi4@gmail.com",
      color: "bg-red-600",
    },

    {
      id: 5,
      name: "Upwork",
      info: "https://www.upwork.com/freelancers/~0149ae55fef27c738f",
      color: "bg-purple-600",
    },
  ];
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl py-12 sm:px-6">
                <div>
                  <div className="mt-3 space-y-10 text-center sm:mt-5">
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
                    <span className="px-4 mb-12 text-4xl font-bold  text-emerald-500">
                      Save upto 20%{" "}
                    </span>{" "}
                    <Dialog.Title
                      as="h3"
                      className="text-2xl mt-4 font-regular  leading-6 text-gray-900"
                    ></Dialog.Title>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-3 sm:gap-3">
                  <button
                    type="button"
                    className="inline-flex items-center whitespace-nowrap w-full justify-center rounded-md bg-green-600 px-3 py-3 text-[15px] font-normal text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 "
                    onClick={() => setOpen(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none" fillRule="evenodd">
                        <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                        <path
                          fill="currentColor"
                          d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.546 20.2A1.01 1.01 0 0 0 3.8 21.454l3.032-.892A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2M9.738 14.263c2.023 2.022 3.954 2.289 4.636 2.314c1.037.038 2.047-.754 2.44-1.673a.696.696 0 0 0-.088-.703c-.548-.7-1.289-1.203-2.013-1.703a.711.711 0 0 0-.973.158l-.6.915a.229.229 0 0 1-.305.076c-.407-.233-1-.629-1.426-1.055c-.426-.426-.798-.992-1.007-1.373a.227.227 0 0 1 .067-.291l.924-.686a.712.712 0 0 0 .12-.94c-.448-.656-.97-1.49-1.727-2.043a.695.695 0 0 0-.684-.075c-.92.394-1.716 1.404-1.678 2.443c.025.682.292 2.613 2.314 4.636"
                        ></path>
                      </g>
                    </svg>
                    <span className="text-white  pl-2">+92 309 5203945 </span>
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center whitespace-nowrap w-full justify-center rounded-md bg-blue-800 px-3 py-3 text-[15px] font-normal text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 "
                    onClick={() => setOpen(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 256 199"
                    >
                      <path
                        fill="white"
                        d="M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046c-19.692-2.961-39.203-2.961-58.533 0c-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0 0 79.735 175.3a136.413 136.413 0 0 1-21.846-10.632a108.636 108.636 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 0 0 5.355 4.237a136.07 136.07 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848c21.142-6.58 42.646-16.637 64.815-33.213c5.316-56.288-9.08-105.09-38.056-148.36M85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2c.02 14.375-10.148 26.18-23.015 26.18m85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2c0 14.375-10.148 26.18-23.015 26.18"
                      ></path>
                    </svg>
                    <span className="text-white  pl-2">kashif8248 </span>
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center whitespace-nowrap w-full justify-center rounded-md bg-purple-800 px-3 py-3 text-[15px] font-normal text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 "
                    onClick={() => setOpen(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 "
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"
                      ></path>
                    </svg>
                    <span className="text-white  pl-2">
                      captainkashi4@gmail.com{" "}
                    </span>
                  </button>
                  <a
                    href="https://www.upwork.com/freelancers/~0149ae55fef27c738f"
                    type="button"
                    _blank="true"
                    className="inline-flex items-center whitespace-nowrap w-full justify-center rounded-md bg-emerald-500 px-3 py-3 text-[15px] font-normal text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 "
                    onClick={() => setOpen(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="3.35em"
                      height="1em"
                      viewBox="0 0 512 153"
                    >
                      <path
                        fill="white"
                        d="M140.107 96.628c-8.321 0-16.118-3.523-23.202-9.258l1.725-8.096l.075-.3c1.536-8.62 6.409-23.089 21.402-23.089c11.244 0 20.39 9.146 20.39 20.39c-.038 11.207-9.183 20.353-20.39 20.353m0-61.395c-19.154 0-33.996 12.444-40.03 32.909c-9.221-13.831-16.193-30.435-20.278-44.416H59.184v53.636c0 10.57-8.621 19.19-19.191 19.19c-10.57 0-19.19-8.62-19.19-19.19V23.726H.186v53.636c-.075 21.965 17.804 39.993 39.768 39.993c21.965 0 39.844-18.028 39.844-39.993v-8.995c4.01 8.358 8.92 16.791 14.88 24.288l-12.632 59.37h21.103l9.145-43.066c8.021 5.135 17.242 8.359 27.812 8.359c22.601 0 41.005-18.516 41.005-41.118c0-22.564-18.404-40.967-41.005-40.967"
                      ></path>
                      <path d="m244.043 37.557l13.306 53.636l14.656-53.636h17.466l-22.526 77.512h-17.467l-13.83-53.974l-13.794 53.936h-17.466L181.86 37.52h17.467l14.655 53.636l13.306-53.636h16.754zm87.22-2.324c-22.676 0-41.042 18.403-41.042 41.042c0 22.677 18.403 41.043 41.042 41.043c22.677 0 41.08-18.366 41.08-41.043c0-22.676-18.403-41.042-41.08-41.042m0 65.218c-13.343 0-24.138-10.795-24.138-24.138c0-13.344 10.832-24.138 24.138-24.138c13.344 0 24.138 10.794 24.138 24.138c0 13.306-10.794 24.138-24.138 24.138m90.968-45.54c-11.731 0-21.214 9.52-21.214 21.214v38.906h-17.58V37.557h17.58v11.919s7.496-11.957 22.901-11.957h5.397v17.392zm58.997 18.366c12.48-7.047 20.952-20.428 20.952-35.758H484.6c0 12.931-10.494 23.426-23.425 23.426h-2.362V.15h-17.578v114.88h17.578V78.524h2.1c1.724 0 3.973 1.125 4.985 2.511l24.962 33.996h21.065z"></path>
                    </svg>
                    <span className="text-white  pl-2">Go to profile </span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
