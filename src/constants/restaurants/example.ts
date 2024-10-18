import { Restaurant } from "@/types";

export const example: Restaurant = {
  name: "Example restaurant",
  logo: "https://png.pngtree.com/png-clipart/20220903/ourmid/pngtree-chef-restaurant-logo-png-image_6136204.png",
  styling: {
    primaryColor: "#4A6F44",
    secondaryColor: "grey",
  },
  menuItems: [
    { label: "Om oss", src: "about-us" },
    { label: "Meny", src: "menu" },
    { label: "Galleri", src: "gallery" },
    { label: "Kontakt", src: "contact" },
  ],
  wallpaper: {
    slogan: "Sveriges bästa gatukök",
    image:
      "https://media.istockphoto.com/id/1191080960/photo/traditional-turkish-breakfast-and-people-taking-various-food-wide-composition.jpg?s=612x612&w=0&k=20&c=PP5ejMisEwzcLWrNmJ8iPPm_u-4P6rOWHEDpBPL2n7Q=",
    buttons: [
      { label: "Meny", src: "menu" },
      {
        label: "Kontakt",
        src: "contact",
      },
    ],
  },
};
