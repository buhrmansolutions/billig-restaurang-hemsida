import { RestaurantContext } from "@/contexts";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { Button } from "../button";
import "./index.css";

const PACKAGES = [
  {
    title: "Basic",
    price: "199kr",
    url: "mailto:joel@buhrmansolutions.com?subject=Intresse av paket basic!",
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
    url: "mailto:joel@buhrmansolutions.com?subject=Intresse av paket premium!",
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
      className="flex flex-row pt-24 px-56 gap-x-24 mb-24 w-full justify-center"
    >
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
  );
};
