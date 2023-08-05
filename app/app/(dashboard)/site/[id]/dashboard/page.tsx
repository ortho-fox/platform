import { getSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { Church } from "lucide-react";
import { notFound, redirect } from "next/navigation";
// import AnalyticsMockup from "@/components/analytics";

export default async function SiteDashboard({
  params,
}: {
  params: { id: string };
}) {
  const session = await getSession();
  if (!session) {
    redirect("/login");
  }
  const data = await prisma.site.findUnique({
    where: {
      id: params.id,
    },
  });
  if (!data || data.userId !== session.user.id) {
    notFound();
  }

  const url = `${data.subdomain}.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`;

  return (
    <>

      <nav className="flex border-b border-gray-200 bg-white" aria-label="Breadcrumb">
        <ol role="list" className="mx-auto flex w-full max-w-screen-xl space-x-4 px-4 sm:px-6 lg:px-8">
          <li className="flex">
            <div className="flex items-center">
              <a href="#" className="hover:text-gray-500">
                <Church width={18} strokeWidth={1} />
                {/* <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" /> */}
                <span className="sr-only">Home</span>
              </a>
            </div>
          </li>

          <li className="flex">
            <div className="flex items-center">
              <svg
                className="h-full w-6 flex-shrink-0 text-gray-200"
                viewBox="0 0 24 44"
                preserveAspectRatio="none"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
              </svg>
              <a
                href=""
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
              >
                {data.name}
              </a>
            </div>
          </li>

          <li className="flex">
            <div className="flex items-center">
              <svg
                className="h-full w-6 flex-shrink-0 text-gray-200"
                viewBox="0 0 24 44"
                preserveAspectRatio="none"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
              </svg>
              <a
                href=""
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
              >
                Dashboard
              </a>
            </div>
          </li>

        </ol>
      </nav>


      <div className="flex items-center justify-center sm:justify-start">
        <div className="flex flex-col items-center space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
          <h1 className="font-cal text-xl font-bold dark:text-white sm:text-2xl">
            Dashboard: {data.name}
          </h1>
          <a
            href={`https://${url}`}
            target="_blank"
            rel="noreferrer"
            className="truncate rounded-md bg-stone-100 px-2 py-1 text-sm font-medium text-stone-600 transition-colors hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-400 dark:hover:bg-stone-700"
          >
            {url} ↗
          </a>
        </div>
      </div>


      <div>
        <ul>
          <li>site name and description</li>
          <li>domain name, custom</li>
          <li>thumbnail, logo, font, 404</li>
        </ul>
      </div>



      {/* <AnalyticsMockup /> */}
    </>
  );
}
