import Image from "next/image";
import Link from "next/link";
import { Button } from "../button";
import "./index.css";

const title = "Ta en titt på vår exempelsida";
const image =
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const text =
  "Är du intresserad av hur er restaurangs hemsida skulle se ut om du valde oss? Klicka dig in på vår exempelsida och ta dig en titt!";

export const Example = () => {
  return (
    <div id="example" className="flex flex-row pt-24 px-56 gap-x-24 w-full">
      <div className="flex-1 relative rounded-lg overflow-hidden">
        <Image
          fill
          src={image}
          alt="About image"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="mr-12 flex-1">
        <h2 className="mb-8">{title}</h2>
        <p className="mb-16">{text}</p>
        <Link href="/exempel">
          <Button>Kolla in vår exempelsida här</Button>
        </Link>
      </div>
    </div>
  );
};
