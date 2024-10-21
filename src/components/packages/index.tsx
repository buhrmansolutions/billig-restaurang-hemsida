import Link from "next/link";
import { Button } from "../button";
import "./index.css";
import { Social } from "../social";

const PACKAGES = [
  {
    title: "Basic",
    price: "199kr",
    url: "mailto:hej@buhrmansolutions.com?subject=Intresse av paket basic!",
    bullets: [
      "Subdomän",
      "Enkel uppsättning",
      "Om oss sida",
      "Meny sida",
      "Kontakt sida",
    ],
    color: "#4A6F44",
  },
  {
    title: "Premium",
    price: "599kr",
    url: "mailto:hej@buhrmansolutions.com?subject=Intresse av paket premium!",
    bullets: [
      "Egen domän",
      "Enkel uppsättning",
      "Om oss sida",
      "Meny sida",
      "Kontakt sida",
    ],
    color: "#a24848",
  },
];
export const Packages = () => {
  return (
    <div
      id="packages"
      className="w-full px-56 pt-24 text-center pb-24 relative"
    >
      <h3 className="mb-8">Våra paket</h3>
      <Social />
      <p>
        Vi förstår att varje restaurang har sina egna behov och budgetar, därför
        erbjuder vi två olika typer av paket: Basic och Premium. Oavsett vilket
        paket du väljer kan du vara säker på att vi levererar en professionell
        och användarvänlig hemsida som hjälper din verksamhet att synas online.
        Vårt Basic-paket är perfekt för mindre restauranger eller de som just
        startar sin digitala närvaro, medan Premium-paketet riktar sig till dem
        som vill ha en mer skräddarsydd och exklusiv lösning med en egen domän.
        Genom att erbjuda dessa alternativ kan vi tillgodose både de som söker
        en kostnadseffektiv lösning och de som vill ha något mer omfattande.
        Vårt mål är att hjälpa dig att nå ut till fler kunder och öka din
        synlighet online, oavsett vilket paket du väljer.
      </p>
      <div className="flex flex-row gap-x-24 mt-16 w-full justify-center">
        {PACKAGES.map(({ title, price, url, bullets, color }) => (
          <div
            key={title}
            className="flex flex-col w-64 items-center p-4 border-gray-100 border-4 rounded-lg"
          >
            <h3 style={{ color }}>{title}</h3>
            <h4 className="font-semibold mb-8 mt-2">{price}</h4>
            <ul className="flex flex-col items-center gap-4 mb-8">
              {bullets.map((bullet, index) => (
                <li
                  key={bullet}
                  className={`${index === 0 ? "font-semibold" : ""}`}
                >
                  {bullet}
                </li>
              ))}
            </ul>
            <Link href={url}>
              <Button style={{ backgroundColor: color }}>Välj</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
