import { Restaurant } from "@/types";

export const example: Restaurant = {
  name: "Restaurang",
  logo: "https://www.logoai.com/oss/icons/2021/10/27/l1eXTxm2w7TM6t9.png",
  styling: {
    primaryColor: "#4A6F44",
    secondaryColor: "grey",
  },
  menuItems: [
    { label: "Om oss", src: "#about" },
    { label: "Meny", src: "#menu" },
    { label: "Kontakt", src: "#footer" },
  ],
  wallpaper: {
    slogan: "Din nya favoritrestaurang",
    image:
      "https://images.unsplash.com/photo-1477506252414-b2954dbdacf3?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    buttons: [
      { label: "Meny", src: "#menu" },
      {
        label: "Kontakt",
        src: "#footer",
      },
    ],
  },
  about: {
    title: "Välkommen till din favoritrestaurang",
    image:
      "https://images.unsplash.com/photo-1444731961956-751ed90465a5?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sections: [
      "Välkommen till vår nyöppnade restaurang i hjärtat av Stockholm! Här förenar vi traditionella smaker med moderna inslag för att skapa en unik matupplevelse. Vår passion för mat och service genomsyrar allt vi gör, och vi strävar alltid efter att överträffa dina förväntningar. Vår restaurang är inte bara en plats för att äta; det är en destination för att fira livet, dela stunder med vänner och familj och njuta av god mat i en inbjudande atmosfär.",
      "Vi erbjuder en meny som inspireras av lokala råvaror och internationella influenser, vilket ger dig en smakresa du sent kommer att glömma. Våra rätter är noggrant utvalda och skapade med kärlek av vårt team av erfarna kockar, som arbetar med stor omsorg för att varje rätt ska vara en fest för smaklökarna. Vår vision är att varje besök ska vara en ny upptäcktsfärd i smaken, där vi erbjuder allt från läckra förrätter till utsökta desserter.",
      "För att komplettera din måltid har vi också en noggrant utvald vinlista som erbjuder något för alla, oavsett om du är en vinentusiast eller bara vill njuta av något gott. Vårt engagerade servitörsteam är här för att guida dig och hjälpa till med att välja den perfekta drycken som passar din måltid.",
      "Välkommen till en plats där god mat och härlig atmosfär går hand i hand. Vi ser fram emot att få dela vår passion för mat med dig och skapa minnen som varar länge. Tillsammans kommer vi att göra varje måltid till en oförglömlig upplevelse!",
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
              title: "Köttfärssås med pasta",
              description: "Klassisk köttfärssås serverad med spaghetti.",
              price: "130kr",
            },
            {
              title: "Burgare med pommes",
              description: "Saftig hamburgare med ost och krispiga pommes.",
              price: "160kr",
            },
            {
              title: "Köttgryta",
              description: "Mör köttgryta med rotfrukter och örter.",
              price: "180kr",
            },
            {
              title: "Biff med bearnaisesås",
              description:
                "Grillad biff serverad med bearnaisesås och potatis.",
              price: "220kr",
            },
          ],
        },
        {
          category: "Fågel",
          items: [
            {
              title: "Kycklingwrap",
              description: "Wrap med grillad kyckling och fräscha grönsaker.",
              price: "140kr",
            },
            {
              title: "Kyckling Caesar-sallad",
              description:
                "Fräsch sallad med grillad kyckling, romaine och dressing.",
              price: "160kr",
            },
            {
              title: "Kycklingklubba",
              description: "Ugnsbakad kycklingklubba med kryddor.",
              price: "150kr",
            },
            {
              title: "Fyllt kycklingbröst",
              description: "Kycklingbröst fyllt med spenat och fetaost.",
              price: "180kr",
            },
          ],
        },
        {
          category: "Fisk",
          items: [
            {
              title: "Tonfisk-sallad",
              description: "Fräsch tonfisk-sallad med grönsaker och ägg.",
              price: "140kr",
            },
            {
              title: "Fiskpinnar med remouladsås",
              description: "Krispiga fiskpinnar serverade med remouladsås.",
              price: "130kr",
            },
            {
              title: "Ugnsbakad lax",
              description: "Laxfilé med citron och dill, serverad med quinoa.",
              price: "190kr",
            },
            {
              title: "Fisk tacos",
              description: "Tacos med panerad fisk, grönsaker och sås.",
              price: "170kr",
            },
          ],
        },
        {
          category: "Vegetariskt",
          items: [
            {
              title: "Falafel med hummus",
              description: "Krispiga falaflar serverade med hummus och pita.",
              price: "120kr",
            },
            {
              title: "Caprese-sallad",
              description: "Tomat- och mozzarellasalad med basilika.",
              price: "130kr",
            },
            {
              title: "Vegetarisk curry",
              description: "Kryddig curry med kikärtor och kokosmjölk.",
              price: "150kr",
            },
            {
              title: "Grönsakssoppa",
              description: "Värmande soppa med säsongens grönsaker.",
              price: "110kr",
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
  keywords: ["gatukök", "stockholm", "mat", "lunch"],
};
