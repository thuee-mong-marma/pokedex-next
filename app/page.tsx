import Image from "next/image";
import Pokemons from "@/components/Pokemons";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto py-20 px-4 space-y-10">
      <div className="flex justify-center">
        <Image src="/images/pokemon-logo.png" width={400} height={147} alt='pokemon-logo' className="w-[300px] md:w-[400px]"/>
      </div>
      <Pokemons />
    </div>
  );
}
