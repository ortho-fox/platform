import { InlineSnippet } from "@/components/form/domain-configuration";
import Image from "next/image";

export default function HomePage() {
  return (

    <div className="flex h-screen flex-col items-center justify-center space-y-10">
      {/* <Image
        width={512}
        height={512}
        src="/logo.png"
        alt="Platforms on Vercel"
        className="w-48"
      /> */}

      <div className="mx-5 border border-stone-200 py-10 dark:border-stone-700 sm:mx-auto sm:w-full sm:max-w-md sm:rounded-lg sm:shadow-md">
        <div className="px-6 sm:px-6 lg:px-18">
          <div className="mx-auto max-w-2xl text-center">
            <Image
              alt="Platforms Starter Kit"
              width={100}
              height={100}
              className="relative mx-auto h-12 w-auto dark:scale-110 dark:rounded-full dark:border dark:border-stone-400"
              src="/logo.png"
            />
            <h2 className="mt-6 text-center font-cal text-3xl dark:text-white">
              orthdx.site
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              A Website Building Tool for<br /> Eastern Orthodox Christians.
            </p>
            <p className="mt-2 text-sm">
              <br />
              <a
                className="font-medium text-black hover:text-stone-800 dark:text-stone-300 dark:hover:text-stone-100"
                href="https://orthofox.vercel.app"
                rel="noreferrer"
                target="_blank"
              >
                Read the announcement.
              </a>
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="http://app.orthdx.site"
                className="group px-6 my-2 flex h-10 items-center justify-center space-x-2 rounded-md border border-stone-200 transition-colors duration-75 focus:outline-none dark:border-stone-700"
              >
                Get Started
                <span className="ml-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg></span>

              </a>
            </div>

          </div>

        </div>

      </div>
      <div className="text-xs">built by 🦊 orthofox</div>
    </div>
  );
}
