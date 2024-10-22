"use client";
import {
  About,
  Copyright,
  Footer,
  Header,
  Packages,
  Wallpaper,
  Example,
} from "@/components";
import { mainPageData } from "@/constants";
import { RestaurantContext } from "@/contexts";

export default function Home() {
  return (
    <RestaurantContext.Provider value={mainPageData}>
      <div className="min-h-screen">
        <main className="flex flex-col row-start-2 gap-y-24 items-center sm:items-start">
          <Header />
          <Wallpaper />
          <Packages />
          <About />
          <Example />
          <div className="w-full">
            <Footer />
            <Copyright />
          </div>
        </main>
      </div>
    </RestaurantContext.Provider>
  );
}
