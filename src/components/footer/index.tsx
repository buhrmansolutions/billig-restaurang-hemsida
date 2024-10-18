import { RestaurantContext } from "@/contexts";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import * as instagramLogo from "@/assets/instagram.png";
import "./index.css";

export const Footer = () => {
  const { footer, menuItems } = useContext(RestaurantContext);
  const { embeddedMap, openingHours, instagram, facebook } = footer;
  return (
    <div
      id="footer"
      className="px-56 w-full py-16 mt-24 flex flex-row justify-between gap-16"
    >
      {openingHours && (
        <div className="flex-1">
          <h3 className="mb-8">Öppettider</h3>
          {openingHours.map(({ label, time }) => (
            <div className="flex flex-row justify-between">
              <p>{label}</p>
              <p>{time}</p>
            </div>
          ))}
          <div></div>
        </div>
      )}
      <div className="flex-1">
        <div className="flex flex-row gap-x-4 w-full justify-center">
          {menuItems.map(({ label, src }) => (
            <h3>
              <Link href={"#" + src}>{label}</Link>
            </h3>
          ))}
        </div>
        <div className="flex flex-row w-full justify-center gap-x-4 mt-8">
          {instagram && (
            <Link href={instagram}>
              <Image
                src="/instagram.png"
                width={20}
                height={20}
                alt="instagram-logo"
              />
            </Link>
          )}
          {facebook && (
            <Link href={facebook}>
              <Image
                src="/facebook.png"
                width={20}
                height={20}
                alt="facebook-logo"
              />
            </Link>
          )}
        </div>
      </div>
      {embeddedMap && (
        <div className="flex-1">
          <h3 className="mb-8">Hitta hit</h3>
          <iframe src={embeddedMap} width="100%" height="auto" loading="lazy" />
        </div>
      )}
    </div>
  );
};
