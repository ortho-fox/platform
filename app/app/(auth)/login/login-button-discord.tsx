"use client";

import LoadingDots from "@/components/icons/loading-dots";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export default function LoginButton() {
  const [loading, setLoading] = useState(false);

  // Get error message added by next/auth in URL.
  const searchParams = useSearchParams();
  const error = searchParams?.get("error");

  useEffect(() => {
    const errorMessage = Array.isArray(error) ? error.pop() : error;
    errorMessage && toast.error(errorMessage);
  }, [error]);

  return (

    <button
      disabled={loading}
      onClick={() => {
        setLoading(true);
        signIn("discord");
      }}
      className={`${loading
        ? "cursor-not-allowed bg-stone-50 dark:bg-stone-800"
        : "bg-white hover:bg-stone-50 active:bg-stone-100 dark:bg-black dark:hover:border-white dark:hover:bg-black"
        } group my-2 flex h-10 w-full items-center justify-center space-x-2 rounded-md border border-stone-200 transition-colors duration-75 focus:outline-none dark:border-stone-700`}
    >
      {loading ? (
        <LoadingDots color="#A8A29E" />
      ) : (
        <>
          <svg
            className="h-4 w-4 text-black dark:text-white"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M 20.330282 4.227806 C 18.776718 3.500933 17.115578 2.972672 15.378897 2.671875 C 15.165611 3.057486 14.916433 3.576141 14.744634 3.988729 C 12.8985 3.711092 11.069341 3.711092 9.257158 3.988729 C 9.085391 3.576141 8.830554 3.057486 8.615361 2.671875 C 6.876807 2.972672 5.213756 3.502874 3.660193 4.231655 C 0.526643 8.966861 -0.322811 13.584451 0.101917 18.136475 C 2.180252 19.688522 4.194409 20.631348 6.174574 21.248304 C 6.663489 20.575418 7.099534 19.860126 7.475176 19.106274 C 6.759752 18.834429 6.074529 18.498957 5.427073 18.109497 C 5.59884 17.982243 5.766856 17.849197 5.92918 17.712305 C 9.878195 19.559362 14.1689 19.559362 18.070736 17.712305 C 18.234968 17.849197 18.402952 17.982243 18.572842 18.109497 C 17.923481 18.500866 17.236382 18.836338 16.520956 19.108215 C 16.896599 19.860126 17.33077 20.57736 17.821558 21.250212 C 19.803631 20.633255 21.819658 19.690464 23.897993 18.136475 C 24.396353 12.859518 23.046665 8.284336 20.330282 4.227806 Z M 8.013176 15.337021 C 6.827721 15.337021 5.855552 14.230328 5.855552 12.882648 C 5.855552 11.534967 6.806962 10.426365 8.013176 10.426365 C 9.219422 10.426365 10.191559 11.533026 10.170799 12.882648 C 10.172674 14.230328 9.219422 15.337021 8.013176 15.337021 Z M 15.986741 15.337021 C 14.801287 15.337021 13.829118 14.230328 13.829118 12.882648 C 13.829118 11.534967 14.780494 10.426365 15.986741 10.426365 C 17.192955 10.426365 18.165125 11.533026 18.144363 12.882648 C 18.144363 14.230328 17.192955 15.337021 15.986741 15.337021 Z" />
          </svg>
          <p className="text-sm font-medium text-stone-600 dark:text-stone-400">
            Login with Discord
          </p>
        </>
      )}
    </button>
  );
}
