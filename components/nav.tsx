"use client";

import Link from "next/link";
import {
  ArrowLeft,
  BarChart3,
  Edit3,
  Globe,
  Layers,
  Layout,
  LayoutDashboard,
  Megaphone,
  Menu,
  Newspaper,
  Settings,
} from "lucide-react";
import {
  useParams,
  usePathname,
  useSelectedLayoutSegments,
} from "next/navigation";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { getSiteFromPostId } from "@/lib/actions";
import Image from "next/image";
import { FileCode, Github } from "lucide-react";

const externalLinks = [
  {
    name: "Read announcement",
    href: "https://vercel.com/blog/platforms-starter-kit",
    icon: <Megaphone width={18} />,
  },
  {
    name: "Star on GitHub",
    href: "https://github.com/vercel/platforms",
    icon: <Github width={18} />,
  },
  {
    name: "Read the guide",
    href: "https://vercel.com/guides/nextjs-multi-tenant-application",
    icon: <FileCode width={18} />,
  },
  {
    name: "View demo site",
    href: "https://demo.vercel.pub",
    icon: <Layout width={18} />,
  },
  // {
  //   name: "Deploy your own",
  //   href: "https://vercel.com/templates/next.js/platforms-starter-kit",
  //   icon: (
  //     <svg
  //       width={18}
  //       viewBox="0 0 76 76"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //       className="py-1 text-black dark:text-white"
  //     >
  //       <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="currentColor" />
  //     </svg>
  //   ),
  // },
];

export default function Nav({ children }: { children: ReactNode }) {
  const segments = useSelectedLayoutSegments();
  const { id } = useParams() as { id?: string };

  const [siteId, setSiteId] = useState<string | null>();

  useEffect(() => {
    if (segments[0] === "post" && id) {
      getSiteFromPostId(id).then((id) => {
        setSiteId(id);
      });
    }
  }, [segments, id]);

  const tabs = useMemo(() => {
    if (segments[0] === "site" && id) {
      return [
        {
          name: "Back to All Sites",
          href: "/sites",
          icon: <ArrowLeft width={18} strokeWidth={1} />,
        },
        {
          name: "Dashboard",
          href: `/site/${id}/dashboard`,
          isActive: segments.includes("dashboard"),
          icon: <LayoutDashboard width={20} strokeWidth={1} />,
        },
        {
          name: "Posts",
          href: `/site/${id}`,
          isActive: segments.length === 2,
          icon: <Newspaper width={20} strokeWidth={1} />,
        },
        {
          name: "Pages",
          href: `/site/${id}/pages`,
          isActive: segments.includes("pages"),
          icon: <Layers width={20} strokeWidth={1} />,
        },
        {
          name: "Navigation",
          href: `/site/${id}/navigation`,
          isActive: segments.includes("navigation"),
          icon: <Menu width={18} strokeWidth={1} />,
        },
        {
          name: "Analytics",
          href: `/site/${id}/analytics`,
          isActive: segments.includes("analytics"),
          icon: <BarChart3 width={18} strokeWidth={1} />,
        },
        {
          name: "Settings",
          href: `/site/${id}/settings`,
          isActive: segments.includes("settings"),
          icon: <Settings width={18} strokeWidth={1} />,
        },
      ];
    } else if (segments[0] === "post" && id) {
      return [
        {
          name: "Back to All Posts",
          href: siteId ? `/site/${siteId}` : "/sites",
          icon: <ArrowLeft width={18} />,
        },
        {
          name: "Editor",
          href: `/post/${id}`,
          isActive: segments.length === 2,
          icon: <Edit3 width={18} />,
        },
        {
          name: "Settings",
          href: `/post/${id}/settings`,
          isActive: segments.includes("settings"),
          icon: <Settings width={18} />,
        },
      ];
    }
    return [
      {
        name: "Overview",
        href: "/",
        isActive: segments.length === 0,
        icon: <LayoutDashboard width={20} strokeWidth={1} />,
      },
      {
        name: "Sites",
        href: "/sites",
        isActive: segments[0] === "sites",
        icon: <Globe width={20} strokeWidth={1} />,
      },
      {
        name: "Settings",
        href: "/settings",
        isActive: segments[0] === "settings",
        icon: <Settings width={20} strokeWidth={1} />,
      },
    ];
  }, [segments, id, siteId]);

  const [showSidebar, setShowSidebar] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    // hide sidebar on path change
    setShowSidebar(false);
  }, [pathname]);

  return (
    <>
      <button
        className={`fixed z-20 ${
          // left align for Editor, right align for other pages
          segments[0] === "post" && segments.length === 2 && !showSidebar
            ? "left-5 top-5"
            : "right-5 top-7"
          } sm:hidden`}
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <Menu width={20} />
      </button>
      <div
        className={`transform ${showSidebar ? "translate-x-0" : "-translate-x-full"
          } fixed z-10 flex h-full w-full flex-col justify-between border-r border-stone-200 bg-stone-100 p-4 transition-all dark:border-stone-700 dark:bg-stone-900 sm:w-60 sm:translate-x-0`}
      >
        <div className="grid gap-2">
          <div className="flex items-center space-x-2 rounded-2xl py-1.5">
            <a
              href="/"
              className="rounded-full border p-2 hover:bg-stone-900 dark:hover:bg-stone-800 bg-black dark:bg-white"
            >
              <svg
                width="26"
                viewBox="0 0 76 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white dark:text-black hover:text-gray-100 dark:hover:text-gray-400"
              >
                <path
                  id="cross"
                  fill-color="currentColor"
                  d="M 38 65 C 35.356522 65 33.941044 63.957291 32.414436 62.291668 L 32.391304 62.291668 C 27.834614 62.291668 24.130436 59.252918 24.130436 55.520832 C 24.130436 52.249168 26.972174 49.51646 30.73913 48.885414 L 30.73913 37.208336 L 19.66087 37.208336 C 18.894262 40.295834 15.553567 42.625 11.565218 42.625 C 7.008522 42.625 3.304348 39.58625 3.304348 35.854164 L 3.304348 35.837914 C 1.275478 34.58667 0 33.60146 0 31.4375 C 0 29.27354 1.275478 27.288334 3.304348 26.037086 L 3.304348 26.020832 C 3.304348 22.288754 7.008522 19.250011 11.565218 19.250011 C 15.553567 19.250011 18.894262 21.579163 19.66087 24.666668 L 30.73913 24.666668 L 30.73913 16.114586 C 26.972174 15.48354 24.130436 12.750835 24.130436 9.479168 C 24.130436 5.747082 27.834614 2.708332 32.391304 2.708332 L 32.414436 2.708332 C 33.941044 1.042709 35.356522 0 38 0 C 40.643482 0 42.05896 1.042709 43.585567 2.708332 L 43.608696 2.708332 C 48.165394 2.708332 51.869564 5.747082 51.869564 9.479168 C 51.869564 12.750835 49.027828 15.48354 45.260872 16.114586 L 45.260872 24.666668 L 56.339138 24.666668 C 57.105747 21.579163 60.446442 19.250011 64.434784 19.250011 C 68.991486 19.250011 72.695656 22.288754 72.695656 26.020832 L 72.695656 26.037086 C 74.724525 27.288334 76 29.27354 76 31.4375 C 76 33.60146 74.724525 34.58667 72.695656 35.837914 L 72.695656 35.854164 C 72.695656 39.58625 68.991486 42.625 64.434784 42.625 C 60.446442 42.625 57.105747 40.295834 56.339138 37.208336 L 45.260872 37.208336 L 45.260872 48.885414 C 49.027828 49.51646 51.869564 52.249168 51.869564 55.520832 C 51.869564 59.252918 48.165394 62.291668 43.608696 62.291668 L 43.585567 62.291668 C 42.05896 63.957291 40.643482 65 38 65"
                  fill="currentColor"
                />
                {/* <path id="top-left" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" d="M 53 1 L 75 1 L 75 18" />
                <path id="top-right" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" d="M 23 1 L 1 1 L 1 18" />
                <path id="bottom-left" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" d="M 23 64 L 1 64 L 1 47" />
                <path id="bottom-right" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" d="M 53 64 L 75 64 L 75 47" /> */}
              </svg>
            </a>
            {/* <div className="h-6 rotate-[30deg] border-l border-stone-400 dark:border-stone-500" /> */}
            {/* <Link
              href="/"
              className="border p-2 hover:bg-stone-200 dark:hover:bg-stone-700"
            >
              <Image
                src="/logo.png"
                width={24}
                height={24}
                alt="Logo"
                className="dark:scale-110 dark:rounded-full dark:border dark:border-stone-400 bg-white"
              />
            </Link> */}
          </div>
          <div className="grid gap-1">
            {tabs.map(({ name, href, isActive, icon }) => (
              <Link
                key={name}
                href={href}
                className={`flex items-center space-x-3 ${isActive ? "bg-stone-200 text-black dark:bg-stone-700" : ""
                  } rounded-lg px-2 py-1.5 transition-all duration-150 ease-in-out hover:bg-stone-200 active:bg-stone-300 dark:text-white dark:hover:bg-stone-700 dark:active:bg-stone-800`}
              >
                {icon}
                <span className="text-sm font-medium">{name}</span>
              </Link>
            ))}
          </div>
        </div>
        <div>
          {/* <div className="grid gap-1">
            {externalLinks.map(({ name, href, icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg px-2 py-1.5 transition-all duration-150 ease-in-out hover:bg-stone-200 active:bg-stone-300 dark:text-white dark:hover:bg-stone-700 dark:active:bg-stone-800"
              >
                <div className="flex items-center space-x-3">
                  {icon}
                  <span className="text-sm font-medium">{name}</span>
                </div>
                <p>↗</p>
              </a>
            ))}
          </div> */}
          <div className="my-2 border-t border-stone-200 dark:border-stone-700" />
          {children}
        </div>
      </div>
    </>
  );
}
