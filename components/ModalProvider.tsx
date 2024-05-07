'use client'

import { useState, useEffect } from "react";
import { PokemonModal } from "./modals/PokemonModal";

export const ModalProvider = () => {
  const [isMounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isMounted) return null;

  return <PokemonModal />;
};
