import Image from "next/image";
import Header from "./Header/header";
import Hero from "./Herosection/hero";

export default function Home() {
  return (
    <div>
        <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
      <Hero></Hero>
    </div>
  );
}
