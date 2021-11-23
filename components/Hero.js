/* This example requires Tailwind CSS v2.0+ */
import Image from "next/image";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import HeroImage from "../public/hero-image.png";
import LogoClouds from "./LogoClouds";

export default function Hero() {
  return (
    <>
      <div className="bg-gray-50">
        <Popover className="relative bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center py-6 md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="#">
                  <span className="sr-only">Sourceable</span>
                  <img
                    className="h-8 w-auto sm:h-16"
                    src="/sourceable-logo.svg"
                    alt=""
                  />
                </a>
              </div>
              <div className="md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group
                as="nav"
                className="hidden md:flex space-x-10 items-center"
              >
                <a
                  href="#"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  How We Work
                </a>
                <a
                  href="/contact"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Contact
                </a>
                {/* <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                Sign in
              </a> */}
                <a
                  href="#"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-sourceable-blue hover:bg-sourceable-blue"
                >
                  Log in
                </a>
              </Popover.Group>
              {/* <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                Sign in
              </a>
              <a
                href="#"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-sourceable-blue hover:bg-sourceable-blue"
              >
                Sign up
              </a>
            </div> */}
            </div>
          </div>

          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="/blue-s-logo.png"
                        alt="Sourceable"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="py-6 px-5 space-y-6">
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    <a
                      href="#"
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      How We Work
                    </a>

                    <a
                      href="/contact"
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      Contact
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-sourceable-blue hover:bg-sourceable-blue"
                    >
                      Sign up
                    </a>
                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                      Existing customer? &nbsp;
                      <a
                        href="#"
                        className="text-sourceable-blue hover:text-sourceable-blue"
                      >
                        Sign in
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        <section className="mx-auto md:flex md:items-center">
          <div className="mx-auto max-w-7xl w-full py-16 text-center md:py-38 lg:px-4 md:text-left">
            {/* <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center md:py-48 md:text-left"> */}
            <div className="px-4 md:w-1/2 sm:px-8 xl:pr-16">
              {/* <div className="px-4 md:w-1/2 sm:px-8 xl:pr-16"> */}
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl md:text-5xl xl:text-6xl">
                <span className="block xl:inline">The Smarter Way To</span>{" "}
                <span className="block text-sourceable-blue xl:inline">
                  Source Talent
                </span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-md text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                Think of us as an extenstion of your sourcing team. Instead of
                hiring one more Sourcer/Recuriter, you can now have a
                dedicated team at a fraction of the cost!
              </p>
              <div className="mt-10 sm:flex sm:justify-center md:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sourceable-blue hover:bg-sourceable-blue md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </a>
                </div>
                {/* <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  Live demo
                </a>
              </div> */}
              </div>
            </div>
          </div>
          <div className="px-4 sm:px-8 w-full md:pl-0 md:absolute md:right-0 md:w-1/2">
            <img
              class="sm:pl-0 xl:w-11/12 xl:max-w-3xl"
              src="https://secureservercdn.net/166.62.112.219/5bm.36c.myftpupload.com/wp-content/uploads/2021/11/frontPageMainimg-2048x1149.png"
              alt=""
            />
          </div>
        </section>
      </div>
      <LogoClouds />
    </>
  );
}
{
  /* Use Next Image if can */
}
{
  /* <Image
            // className="absolute inset-0 w-full h-full object-cover"
            // className="absolute inset-0 w-full object-cover"
            // src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
            // src="https://secureservercdn.net/166.62.112.219/5bm.36c.myftpupload.com/wp-content/uploads/2021/11/frontPageMainimg-2048x1149.png"
            src={HeroImage}
            alt=""
            layout="fill"
            width={500}
            height={500}
          /> */
}
