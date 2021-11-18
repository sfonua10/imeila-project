/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "Home", href: "#" },
  { name: "How We Work", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Talk To Us", href: "#" },
];

export default function Example() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              >
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="#">
                      <span className="sr-only">Sourceable</span>
                      {/* <svg
                        className="h-8 w-auto sm:h-10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m17.5 3.322 12.094 6.34v12.677L17.5 28.679l-12.094-6.34V9.66L17.5 3.321Zm0-2.392c-.462 0-.917.11-1.317.32L4.089 7.59c-.4.21-.733.511-.964.875a2.225 2.225 0 0 0-.353 1.196V22.34c0 .42.122.832.353 1.196.231.364.564.666.964.876l12.094 6.339c.4.21.855.32 1.317.32.462 0 .917-.11 1.317-.32l12.094-6.34c.4-.21.733-.511.964-.875.232-.364.353-.776.353-1.196V9.66c0-.42-.121-.832-.353-1.196a2.528 2.528 0 0 0-.964-.876L18.817 1.25c-.4-.21-.855-.32-1.317-.32Z"
                          fill="#1E90FF"
                        />
                        <path
                          d="m11.247 18.434 3.022-.267c.181.92.55 1.597 1.107 2.028.556.432 1.306.648 2.25.648 1 0 1.753-.192 2.26-.576.508-.384.761-.833.761-1.345a1.199 1.199 0 0 0-.32-.843c-.213-.232-.586-.434-1.117-.605-.363-.115-1.192-.318-2.486-.61-1.665-.374-2.833-.835-3.504-1.381-.945-.768-1.417-1.705-1.416-2.81 0-.71.231-1.405.666-1.995.444-.62 1.084-1.09 1.92-1.414.835-.324 1.844-.486 3.026-.486 1.93 0 3.383.384 4.36 1.152.975.769 1.487 1.793 1.536 3.075l-3.105.124c-.133-.717-.417-1.233-.855-1.548-.437-.314-1.093-.471-1.967-.471-.903 0-1.609.168-2.12.505a1.057 1.057 0 0 0-.368.376.941.941 0 0 0-.125.49c0 .33.154.613.461.848.392.299 1.343.61 2.854.933 1.51.324 2.628.659 3.351 1.005a4.194 4.194 0 0 1 1.7 1.42c.41.599.614 1.34.614 2.225 0 .798-.255 1.579-.735 2.247a4.332 4.332 0 0 1-2.077 1.558c-.895.34-2.01.51-3.346.51-1.945 0-3.438-.408-4.48-1.224-1.041-.817-1.664-2.006-1.867-3.57Z"
                          fill="#1E90FF"
                        />
                      </svg> */}
                      <svg
                        className="h-8 w-auto sm:h-10"
                        viewBox="0 0 426 429"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M212.57 44.4399L359.47 129.26V298.88L212.57 383.7L65.67 298.88V129.26L212.57 44.4399V44.4399ZM212.57 12.4399C206.953 12.4408 201.434 13.9204 196.57 16.7299L49.67 101.54C44.8043 104.349 40.764 108.39 37.9554 113.256C35.1467 118.122 33.6687 123.642 33.67 129.26V298.88C33.6687 304.498 35.1467 310.018 37.9554 314.884C40.764 319.75 44.8043 323.791 49.67 326.6L196.57 411.41C201.435 414.219 206.953 415.697 212.57 415.697C218.187 415.697 223.705 414.219 228.57 411.41L375.47 326.6C380.336 323.791 384.376 319.75 387.185 314.884C389.993 310.018 391.471 304.498 391.47 298.88V129.26C391.471 123.642 389.993 118.122 387.185 113.256C384.376 108.39 380.336 104.349 375.47 101.54L228.57 16.7299C223.706 13.9204 218.187 12.4408 212.57 12.4399V12.4399Z"
                          fill="#EE9900"
                        />
                        <path
                          d="M136.62 246.63L173.32 243.06C175.527 255.38 180.01 264.427 186.77 270.2C193.53 275.973 202.64 278.863 214.1 278.87C226.247 278.87 235.4 276.3 241.56 271.16C247.72 266.02 250.8 260.02 250.8 253.16C250.912 249.055 249.533 245.048 246.92 241.88C244.32 238.78 239.793 236.083 233.34 233.79C228.933 232.257 218.867 229.537 203.14 225.63C182.92 220.623 168.733 214.463 160.58 207.15C149.107 196.877 143.373 184.347 143.38 169.56C143.374 160.055 146.189 150.763 151.47 142.86C156.863 134.58 164.637 128.273 174.79 123.94C184.943 119.607 197.197 117.44 211.55 117.44C234.997 117.44 252.647 122.58 264.5 132.86C276.353 143.14 282.577 156.853 283.17 174L245.45 175.66C243.843 166.06 240.383 159.157 235.07 154.95C229.757 150.743 221.79 148.64 211.17 148.64C200.21 148.64 191.63 150.893 185.43 155.4C183.539 156.674 181.999 158.404 180.95 160.429C179.902 162.454 179.379 164.71 179.43 166.99C179.43 171.41 181.3 175.19 185.04 178.33C189.793 182.33 201.347 186.493 219.7 190.82C238.053 195.147 251.623 199.63 260.41 204.27C268.89 208.611 276.029 215.18 281.06 223.27C286.033 231.27 288.517 241.19 288.51 253.03C288.518 263.707 285.419 274.155 279.59 283.1C273.566 292.514 264.742 299.802 254.36 303.94C243.48 308.48 229.93 310.753 213.71 310.76C190.09 310.76 171.953 305.3 159.3 294.38C146.647 283.46 139.087 267.543 136.62 246.63V246.63Z"
                          fill="#EE9900"
                        />
                      </svg>
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="font-medium text-gray-500 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  ))}
                  {/* <a href="#" className="font-medium text-yellow-600 hover:text-yellow-500">
                    Log in
                  </a> */}
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="/blue-s-logo.png"
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  {/* <a
                    href="#"
                    className="block w-full px-5 py-3 text-center font-medium text-yellow-600 bg-gray-50 hover:bg-gray-100"
                  >
                    Log in
                  </a> */}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl text-center">
                <span className="text-sourceable-orange">
                  Recruit Tech Talent with
                </span>{" "}
                <span className="block text-sourceable-blue xl:inline">
                  Sourceable
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci
                ac auctor augue mauris augue neque gravida. Platea dictumst
                vestibulum rhoncus est pellentesque. Mattis enim ut tellus
                elementum sagittis. Tellus elementum sagittis vitae et. Est
                placerat in egestas erat. Sed egestas egestas fringilla
                phasellus faucibus.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sourceable-orange hover:bg-yellow-600 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-sourceable-orange bg-yellow-100 hover:bg-yellow-200 md:py-4 md:text-lg md:px-10"
                  >
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          // src="https://images.unsplash.com/photo-1556636530-6b7482d80e3d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2340&q=80"
          alt=""
        />
      </div>
    </div>
  );
}
