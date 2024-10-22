"use client";
import { restaurants } from "@/constants";
import { Restaurant } from "@/types";
import { Header } from "@/components";
import { RestaurantContext } from "@/contexts";
import { Wallpaper } from "@/components/wallpaper";
import { About } from "@/components/about";
import { Menu } from "@/components/menu";
import { Footer } from "@/components/footer";
import { Copyright } from "@/components/copyright";

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
        <main className="flex flex-col row-start-2 items-center gap-24 sm:items-start">
          <Header />
          <Wallpaper />
          <Menu />
          <About />
          <div className="w-full">
            <Footer />
            <Copyright />
          </div>
        </main>
      </div>
    </RestaurantContext.Provider>
  );
}
