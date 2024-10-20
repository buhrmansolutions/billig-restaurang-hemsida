import { RestaurantContext } from "@/contexts";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import "./index.css";

export const Footer = () => {
  const { footer, menuItems } = useContext(RestaurantContext);
  const { embeddedMap, openingHours, instagram, facebook, phone, email } =
    footer;

  return (
    <div
      id="footer"
      className="px-56 w-full py-16 flex flex-row justify-between gap-16"
    >
      <div className="flex-1">
        {openingHours && (
          <>
            <h4 className="mb-8">Öppettider</h4>
            {openingHours.map(({ label, time }) => (
              <div className="flex flex-row justify-between w-64" key={label}>
                <p>{label}</p>
                <p>{time}</p>
              </div>
            ))}
          </>
        )}
        {(phone || email) && (
          <>
            <h4 className="mb-8">Kontakta oss</h4>
            {phone && (
              <div className="flex flex-row justify-between w-64">
                <p>Telefon</p>
                <a href={`tel:${phone}`}>{phone}</a>
              </div>
            )}
            {email && (
              <div className="flex flex-row justify-between w-64">
                <p>E-mail</p>
                <a href={`mailto:${email}`}>{email}</a>
              </div>
            )}
          </>
        )}
      </div>

      <div className="flex-1">
        <div className="flex flex-row gap-x-4 w-full justify-center">
          {menuItems.map(({ label, src }) => (
            <h5 key={label}>
              <Link href={src}>{label}</Link>
            </h5>
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
            <Link href={facebook} target="_blank">
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
      <div className="flex-1">
        {embeddedMap && (
          <>
            <h4 className="mb-8">Hitta hit</h4>
            <iframe
              src={embeddedMap}
              width="100%"
              height="auto"
              loading="lazy"
            />
          </>
        )}
      </div>
    </div>
  );
};
