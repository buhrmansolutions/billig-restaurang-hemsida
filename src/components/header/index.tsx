import { RestaurantContext } from "@/contexts";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import "./index.css";

export const Header = () => {
  const { logo, menuItems } = useContext(RestaurantContext);

  return (
    <header className="w-full px-56 py-4 flex flex-row justify-between items-center">
      <Image src={logo} alt={logo} width={100} height={100} />
      <div className="flex gap-x-24">
        {menuItems.map(({ src, label }) => (
          <Link className="font-medium" href={"#" + src}>
            {label}
          </Link>
        ))}
      </div>
    </header>
  );
};
