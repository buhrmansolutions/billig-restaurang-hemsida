"use client";
import {
  About,
  Copyright,
  Footer,
  Header,
  Packages,
  Wallpaper,
} from "@/components";
import { mainPageData } from "@/constants";
import { RestaurantContext } from "@/contexts";

export default function Home() {
  return (
    <RestaurantContext.Provider value={mainPageData}>
      <div className="min-h-screen">
        <main className="flex flex-col row-start-2 items-center sm:items-start">
          <Header />
          <Wallpaper />
          <About />
          <Packages />
          <Footer />
          <Copyright />
        </main>
      </div>
    </RestaurantContext.Provider>
  );
}
