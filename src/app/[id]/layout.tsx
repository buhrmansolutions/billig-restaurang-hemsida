import { restaurants } from "@/constants";
import { Restaurant } from "@/types";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const restaurant =
    // @ts-expect-error Fix for now
    restaurants[params?.id] || (restaurants.example as Restaurant);

  return {
    title: restaurant.name,
    description: restaurant.wallpaper.slogan,
    icons: {
      icon: [
        {
          media: "(prefers-color-scheme: light)",
          url: restaurant.logo,
          href: restaurant.logo,
        },
      ],
    },
    keywords: ["restaurang", ...restaurant.keywords],
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
