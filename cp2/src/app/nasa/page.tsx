"use client";

import Image from 'next/image';
import { useEffect, useState } from "react";

export default function Nasa() {
  const [data, setData] = useState();

  const chamadaImages = async () => {
    const response = await fetch("http://localhost:3000/api/base-nasa");
    const dados = await response.json();
    setData(dados);
  };

  useEffect(() => {
    chamadaImages();
  }, []);

  console.log({ data });

  return (
    <div>
      <h1>Fotos da API da Nasa</h1>
      <div></div>
    </div>
  );
}
