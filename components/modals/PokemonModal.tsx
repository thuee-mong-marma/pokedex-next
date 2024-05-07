"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogClose,
} from "@/components/core/Dialog";
import { useModal } from "@/hooks/useModal";
import { usePokemon } from "@/hooks/usePokemon";
import { X } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Progress } from "../core/Progress";

export const PokemonModal = () => {
  const { isOpen, closeModal } = useModal();
  const { pokemon } = usePokemon();

  // console.log("pokemon modal", pokemon);

  return (
    <Dialog open={isOpen}>
      <DialogContent className="bg-white">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="w-full flex items-center justify-between">
            <div className="flex-1 space-y-2">
              <p className="text-3xl font-medium capitalize">{pokemon.name}</p>
              <p className="text-xl font-medium">#{pokemon.id}</p>
            </div>
            <div className="flex-1 flex flex-wrap gap-2">
              {pokemon.types.map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    "py-1 px-2 rounded-md text-white capitalize",
                    `bg-${item.type.name}`
                  )}
                >
                  {item.type.name}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex items-center justify-between gap-6">
            <div className="flex-1 space-y-4">
              {pokemon.stats.filter(item => !item.stat.name.includes('special')).map((item, index) => (
                <div key={index} className="w-full space-y-1">
                  <p className="font-medium capitalize">{item.stat.name}</p>
                  <Progress value={item.base_stat}/>
                </div>
              ))}
            </div>
            <div className="flex-1 flex">
              <Image
                src={pokemon.sprites.other.dream_world.front_default}
                width={226}
                height={218}
                alt={pokemon.name}
                className="self-center"
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          <DialogClose
            onClick={() => closeModal()}
            className="absolute right-6 top-6"
          >
            <X className="w-6 h-6" />
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
