"use client";
import Image from "next/image";
import { restaurants } from "@/constants";
import { Restaurant } from "@/types";
import { Header } from "@/components";
import { RestaurantContext } from "@/contexts";
import { Wallpaper } from "@/components/wallpaper";
import { About } from "@/components/about";

type Props = {
  params: {
    id?: string;
  };
};

export default function Page({ params }: Props) {
  if (!params.id) return null;
  const restaurant =
    (restaurants as unknown as { [key: string]: Restaurant })[params.id] ||
    restaurants.example;

  return (
    <RestaurantContext.Provider value={restaurant}>
      <div className="min-h-screen">
        <main className="flex flex-col row-start-2 items-center sm:items-start">
          <Header />
          <Wallpaper />
          <About />
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer>
      </div>
    </RestaurantContext.Provider>
  );
}
