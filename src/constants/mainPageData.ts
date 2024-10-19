import { Restaurant } from "@/types";

export const mainPageData: Restaurant = {
  name: "Restaurang-hemsidor",
  logo: "https://i.postimg.cc/FsFGJR4m/logo-1.png",
  styling: {
    primaryColor: "#4A6F44",
    secondaryColor: "grey",
  },
  menuItems: [
    { label: "Om oss", src: "#about" },
    { label: "Paket", src: "#packages" },
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
    title: "Skapa Din Restauranghemsida Enkelt och Billigt!",
    image:
      "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?q=80&w=3573&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sections: [
      "Välkommen till restaurang-hemsidor.se – din lösning för en enkel och prisvärd hemsida! Vi erbjuder restauranger ett smidigt sätt att synas online utan krångel. För endast 199 kr per månad får du en subdomän på vår plattform, perfekt för att nå ut till dina kunder. Vill du ha en egen domän? Inga problem! För 499 kr per månad får du en professionell adress, som min-restaurang.se.",
      "Att skapa din hemsida har aldrig varit enklare. Kontakta oss på joel@buhrmansolutions.com och skicka en lista med ditt restaurangnamn, slogan, adress, menyer, några bilder, kontaktuppgifter och en kort text. Vi tar hand om resten! Inga bindningstider – du har full kontroll. Efter att du skickat dina uppgifter kommer vi att sätta upp din hemsida och skicka en länk så att du kan se hur den kommer att se ut. Du bestämmer sedan om du vill publicera den.",
      "Vill du se hur en hemsida kan se ut? Besök gärna vår exempelhemsida på restaurang-hemsidor.se/exempel för inspiration och för att få en känsla för vad vi kan åstadkomma.",
      "Ge din restaurang den synlighet den förtjänar! Ta steget mot en professionell online-närvaro med restaurang-hemsidor.se. Kontakta oss idag och låt oss hjälpa dig att nå ut till fler kunder!",
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
    facebook: "www.facebook.com",
    instagram: "www.instagram.com",
    openingHours: [
      { label: "Mån-Fre", time: "08-18" },
      { label: "Lör", time: "10-18" },
      { label: "Sön", time: "Stängt" },
    ],
    phone: "0707070707",
    email: "abc@example-domain.com",
    embeddedMap:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2035.0069909146202!2d18.00037977730163!3d59.33283711073989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f7628580c55c7%3A0xc7530a2aaa39b6d6!2sKristineberg!5e0!3m2!1sen!2sse!4v1729262029347!5m2!1sen!2sse",
  },
};
