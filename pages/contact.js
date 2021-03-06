import Head from "next/head"
import { useState } from "react";
import { MailIcon, PhoneIcon } from "@heroicons/react/outline";

export default function Contact() {
  const [info, setInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    console.log('working')
    // e.preventDefault();
        //     setInfo({
        //   fullName: "",
        //   email: "",
        //   phone: "",
        //   message: "",
        // })
    // try{

    //   const res = await fetch('/api/contact', {
    //     method: 'post',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(info),
    //   });
      
    //   if(!res.ok) {
    //     setInfo({
    //       fullName: "",
    //       email: "",
    //       phone: "",
    //       message: "",
    //     })
    //   }
    // } catch(err) {
    //   console.error(err)
    // }

  };

  const handleInputChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
          <Head>
        <title>Sourceable</title>
        <link rel="icon" href="/favicon-16x16.png" sizes="32x32"/>
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32"/>
      </Head>

      {/* <Navigation /> */}
      <div className="relative bg-white">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
        </div>
        <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
          <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
            <div className="max-w-lg mx-auto">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                Let's work together
              </h2>
              <p className="mt-3 text-lg leading-6 text-gray-500">
                We’d love to hear from you! Send us a message using the form
                opposite, or email us.
              </p>
              <dl className="mt-8 text-base text-gray-500">
                {/* <div>
                <dt className="sr-only">Postal address</dt>
                <dd>
                  <p>742 Evergreen Terrace</p>
                  <p>Springfield, OR 12345</p>
                </dd>
              </div> */}
                {/* <div className="mt-6">
                  <dt className="sr-only">Phone number</dt>
                  <dd className="flex">
                    <PhoneIcon
                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">+1 (801) 615-3699</span>
                  </dd>
                </div> */}
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <MailIcon
                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">support@trysourceable.com</span>
                  </dd>
                </div>
              </dl>
              {/* <p className="mt-6 text-base text-gray-500">
              Looking for careers?{' '}
              <a href="#" className="font-medium text-gray-700 underline">
                View all job openings
              </a>
              .
            </p> */}
            </div>
          </div>
          <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <form
                // action="#"
                method="POST"
                className="grid grid-cols-1 gap-y-6"
                onSubmit={handleSubmit}
              >
                <div>
                  <label htmlFor="fullName" className="sr-only">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    autoComplete="name"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    placeholder="Full name"
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    placeholder="Email"
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    placeholder="Phone"
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md"
                    placeholder="Message"
                    defaultValue={""}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-sourceable-blue hover:bg-sourceable-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
