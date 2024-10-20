"use client";

import { ImagemNasa } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Nasa() {
  const [data, setData] = useState<ImagemNasa[]>([]);

  const chamadaImages = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/base-nasa");
      if (!response.ok) {
        throw new Error("Falha ao obter dados");
      }
      const dados = await response.json();
      setData(dados.latest_photos);
    } catch (error) {
      console.error("Erro ao chamar a API:", error);
    }
  };

  useEffect(() => {
    chamadaImages();
  }, []);

  console.log({ data });

  return (
    <div className="div-nasa-container h-96 flex flex-col items-center gap-1">
      <h1 className="h1-nasa md:text-custom-yellow font-sans text-xl font-bold">
        Fotos da API da Nasa
      </h1>
      <nav className="nav-card-container flex items-center h-full w-11/12 overflow-x-auto">
        <div className="cards-container flex h-full gap-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="div-card h-5/6 w-96 bg-custom-yellow rounded-lg flex flex-col items-center justify-center"
            >
              <p>ID: {item.id}</p>
              <Image
                src={item.img_src}
                alt="image-nasa"
                width={250}
                height={200}
                className="image-foto-nasa rounded-lg border-2 border-black"
              ></Image>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}
