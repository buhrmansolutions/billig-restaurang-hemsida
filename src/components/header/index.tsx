import { RestaurantContext } from "@/contexts";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import "./index.css";

export const Header = () => {
  const [showMenuItems, setShowMenuItems] = useState(false);
  const { logo, menuItems } = useContext(RestaurantContext);

  return (
    <header className="w-full px-56 py-4 flex flex-row justify-between items-center">
      <Image src={logo} alt={logo} width={70} height={70} />
      <div id="desktop-items" className="flex gap-x-24">
        {menuItems.map(({ src, label }) => (
          <Link key={label} className="font-medium font-semibold" href={src}>
            {label}
          </Link>
        ))}
      </div>
      <div
        className={`hamburger ${showMenuItems ? "clicked" : ""}`}
        onClick={() => setShowMenuItems(!showMenuItems)}
      >
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
      </div>
      <div
        id="mobile-items"
        className={`flex flex-col py-24 ${showMenuItems ? "open" : "closed"}`}
      >
        {menuItems.map(({ src, label }) => (
          <Link
            key={label}
            className="font-medium font-semibold"
            href={src}
            onClick={() => setShowMenuItems(false)}
          >
            {label}
          </Link>
        ))}
      </div>
    </header>
  );
};
