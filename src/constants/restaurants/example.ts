import { Restaurant } from "@/types";

export const example: Restaurant = {
  name: "Example restaurant",
  slogan: "Sveriges bästa gatukök",
  logo: "https://png.pngtree.com/png-clipart/20220903/ourmid/pngtree-chef-restaurant-logo-png-image_6136204.png",
  menuItems: [
    { label: "Om oss", src: "about-us" },
    { label: "Meny", src: "menu" },
    { label: "Galleri", src: "gallery" },
    { label: "Kontakt", src: "contact" },
  ],
};
