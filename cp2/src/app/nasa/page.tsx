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
    <div>
      <h1>Fotos da API da Nasa</h1>
      <div>
        {data.map((imagem) => (
          <div key={imagem.id}>
            <p>ID: {imagem.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
