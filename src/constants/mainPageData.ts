import { Restaurant } from "@/types";

export const mainPageData: Restaurant = {
  name: "Restaurang-hemsidor.se",
  logo: "https://i.postimg.cc/FsFGJR4m/logo-1.png",
  styling: {
    primaryColor: "#4A6F44",
    secondaryColor: "grey",
  },
  menuItems: [
    { label: "Om oss", src: "#about" },
    { label: "Paket", src: "#packages" },
    { label: "Exempelsida", src: "#example" },
    { label: "Kontakt", src: "#footer" },
  ],
  wallpaper: {
    slogan: "Skapa billig hemsida till din restaurng- enkelt",
    image:
      "https://images.unsplash.com/photo-1483137140003-ae073b395549?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    buttons: [
      { label: "Paket", src: "#packages" },
      {
        label: "Kontakt",
        src: "#footer",
      },
    ],
  },
  about: {
    title: "Skapa din restauranghemsida enkelt och billigt!",
    image:
      "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?q=80&w=3573&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sections: [
      "Välkommen till billiga restaurang-hemsidor.se – din lösning för en enkel och prisvärd hemsida! Vi erbjuder restauranger ett smidigt sätt att synas online utan krångel. Med våra tjänster får du en professionell hemsida utan att behöva oroa dig för tekniska detaljer. För endast 199 kr per månad får du en subdomän på vår plattform, perfekt för att nå ut till dina kunder. Vill du ha en egen domän? Inga problem! För 499 kr per månad får du en professionell adress, som min-restaurang.se, som ger din verksamhet en seriös och trovärdig profil.",
      "Att skapa din hemsida har aldrig varit enklare. Vi tar hand om hela processen, så du slipper all administration! Kontakta oss på hej@buhrmansolutions.com och skicka en lista med ditt restaurangnamn, slogan, adress, menyer, några bilder, kontaktuppgifter och en kort text. Vi sätter snabbt upp din hemsida och skickar en länk så att du kan se hur den kommer att se ut. Du har full kontroll över publiceringen och det finns inga bindningstider – du bestämmer helt själv när och hur du vill gå vidare.",
      "Vill du se hur en hemsida kan se ut? Besök gärna vår exempelhemsida på billiga restaurang-hemsidor.se/exempel för inspiration och för att få en känsla för vad vi kan åstadkomma. Här kan du se hur vi anpassar design och funktioner för att passa just din restaurangs unika stil.",
      "Ge din restaurang den synlighet den förtjänar! Ta steget mot en professionell online-närvaro med billiga restaurang-hemsidor.se. Med vår snabba och enkla process behöver du inte sköta någon administration själv. Kontakta oss idag och låt oss hjälpa dig att nå ut till fler kunder och öka din synlighet online!",
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
  footer: {
    email: "hej@buhrmansolutions.com",
    instagram: "https://www.instagram.com/restauranghemsidor/",
  },
};
