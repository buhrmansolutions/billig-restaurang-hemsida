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
  about: {
    title: "Välkommen till din favoritrestaurang",
    image:
      "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
    sections: [
      "Välkommen till din favoritrestaurangVälkommen till din favoritrestaurangVälkommen till din favoritrestaurangVälkommen till din",
      "Välkommen till din favoritrestaurangVälkommen till din favoritrestaurangVälkommen till din favoritrestaurangVälkommen till din favoritrestaurangVälkommen till din favoritrestaurangVälkommen till din favoritrestaurang",
    ],
  },
  menu: [
    {
      title: "Kvällmeny",
      items: [
        {
          category: "Kött",
          items: [
            {
              title: "Köttbullar",
              description: "Saftiga köttbullar serverade med potatismos.",
              price: "150kr",
            },
            {
              title: "Fläskfile med svampsås",
              description: "Grillad fläskfilé med krämig svampsås.",
              price: "180kr",
            },
            {
              title: "Biff Stroganoff",
              description: "Mör biff i en krämig sås med svamp och lök.",
              price: "190kr",
            },
            {
              title: "Lammracks",
              description: "Grillade lammracks med rosmarin och vitlök.",
              price: "250kr",
            },
          ],
        },
        {
          category: "Fågel",
          items: [
            {
              title: "Kycklingfilé med pesto",
              description: "Grillad kycklingfilé med pesto och grönsaker.",
              price: "160kr",
            },
            {
              title: "Ugnsbakad kalkon",
              description: "Kalkonbröst ugnsbakat med örter.",
              price: "200kr",
            },
            {
              title: "Fajitas med kyckling",
              description: "Kycklingfajitas med paprika och lök.",
              price: "140kr",
            },
            {
              title: "Andbröst med apelsinsås",
              description: "Stekt andbröst serverat med apelsinsås.",
              price: "220kr",
            },
          ],
        },
        {
          category: "Fisk",
          items: [
            {
              title: "Grillad lax",
              description: "Laxfilé grillad med citron och dill.",
              price: "180kr",
            },
            {
              title: "Fiskgryta",
              description: "Gryta med blandad fisk och tomatsås.",
              price: "160kr",
            },
            {
              title: "Stekt torsk",
              description: "Torskfilé stekt med smör och serverad med potatis.",
              price: "170kr",
            },
            {
              title: "Sushi",
              description: "Variation av sushi med färsk fisk och grönsaker.",
              price: "220kr",
            },
          ],
        },
        {
          category: "Vegetariskt",
          items: [
            {
              title: "Grönsakswok",
              description: "Färska grönsaker wokade med soja och ingefära.",
              price: "120kr",
            },
            {
              title: "Vegetarisk lasagne",
              description: "Lasagne med spenat, ricotta och tomatsås.",
              price: "150kr",
            },
            {
              title: "Quinoasallad",
              description: "Sallad med quinoa, avokado och körsbärstomater.",
              price: "110kr",
            },
            {
              title: "Chili sin carne",
              description: "Kryddig bönröra med tomat och paprika.",
              price: "110kr",
            },
          ],
        },
        {
          category: "Kött",
          items: [
            {
              title: "Köttbullar",
              description: "Saftiga köttbullar serverade med potatismos.",
              price: "150kr",
            },
            {
              title: "Fläskfile med svampsås",
              description: "Grillad fläskfilé med krämig svampsås.",
              price: "180kr",
            },
            {
              title: "Biff Stroganoff",
              description: "Mör biff i en krämig sås med svamp och lök.",
              price: "190kr",
            },
            {
              title: "Lammracks",
              description: "Grillade lammracks med rosmarin och vitlök.",
              price: "250kr",
            },
          ],
        },
        {
          category: "Fågel",
          items: [
            {
              title: "Kycklingfilé med pesto",
              description: "Grillad kycklingfilé med pesto och grönsaker.",
              price: "160kr",
            },
            {
              title: "Ugnsbakad kalkon",
              description: "Kalkonbröst ugnsbakat med örter.",
              price: "200kr",
            },
            {
              title: "Fajitas med kyckling",
              description: "Kycklingfajitas med paprika och lök.",
              price: "140kr",
            },
            {
              title: "Andbröst med apelsinsås",
              description: "Stekt andbröst serverat med apelsinsås.",
              price: "220kr",
            },
          ],
        },
        {
          category: "Fisk",
          items: [
            {
              title: "Grillad lax",
              description: "Laxfilé grillad med citron och dill.",
              price: "180kr",
            },
            {
              title: "Fiskgryta",
              description: "Gryta med blandad fisk och tomatsås.",
              price: "160kr",
            },
            {
              title: "Stekt torsk",
              description: "Torskfilé stekt med smör och serverad med potatis.",
              price: "170kr",
            },
            {
              title: "Sushi",
              description: "Variation av sushi med färsk fisk och grönsaker.",
              price: "220kr",
            },
          ],
        },
        {
          category: "Vegetariskt",
          items: [
            {
              title: "Grönsakswok",
              description: "Färska grönsaker wokade med soja och ingefära.",
              price: "120kr",
            },
            {
              title: "Vegetarisk lasagne",
              description: "Lasagne med spenat, ricotta och tomatsås.",
              price: "150kr",
            },
            {
              title: "Quinoasallad",
              description: "Sallad med quinoa, avokado och körsbärstomater.",
              price: "110kr",
            },
            {
              title: "Chili sin carne",
              description: "Kryddig bönröra med tomat och paprika.",
              price: "110kr",
            },
          ],
        },
      ],
    },
    {
      title: "Lunchmeny",
      items: [
        {
          category: "Kött",
          items: [
            {
              title: "Köttbullar med gräddsås",
              description:
                "Traditionella köttbullar serverade med potatismos och lingonsylt.",
              price: "140kr",
            },
            {
              title: "Pulled pork",
              description: "Mörad fläskkött serverat i bröd med coleslaw.",
              price: "150kr",
            },
          ],
        },
        {
          category: "Fågel",
          items: [
            {
              title: "Kycklingsallad",
              description: "Fräsch sallad med grillad kyckling och dressing.",
              price: "130kr",
            },
            {
              title: "Kycklingwrap",
              description: "Wrap med kyckling, grönsaker och tzatziki.",
              price: "120kr",
            },
          ],
        },
        {
          category: "Fisk",
          items: [
            {
              title: "Fiskfilé med citron",
              description: "Grillad fiskfilé med citron och örtsmör.",
              price: "160kr",
            },
            {
              title: "Tonfisksallad",
              description: "Sallad med tonfisk, ägg och gröna bönor.",
              price: "140kr",
            },
          ],
        },
        {
          category: "Vegetariskt",
          items: [
            {
              title: "Pasta med pesto",
              description: "Pasta med grön pesto och grönsaker.",
              price: "110kr",
            },
            {
              title: "Grönsaksbiffar",
              description: "Biffar av blandade grönsaker serverade med aioli.",
              price: "120kr",
            },
            {
              title: "Soppa med röda linser",
              description: "Varm och kryddig soppa med röda linser och spenat.",
              price: "100kr",
            },
          ],
        },
      ],
    },
  ],
};
