import { RestaurantContext } from "@/contexts";
import { useContext } from "react";
import "./index.css";

type Props = {
  children: string | React.ReactNode;
  variant?: "primary" | "secondary";
  onClick: () => void;
};
export const Button = ({ children, variant, onClick }: Props) => {
  const { styling } = useContext(RestaurantContext);
  const backgroundColor =
    variant === "secondary" ? styling.secondaryColor : styling.primaryColor;
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor }}
      className="px-12 py-4"
    >
      {children}
    </button>
  );
};
