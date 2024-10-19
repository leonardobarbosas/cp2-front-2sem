"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IdeiaCollision } from "@/types";
import Image from "next/image";

export default function IdeiaColision({ params }: { params: { id: number } }) {
  const navigate = useRouter();

  const [ideia, setIdeia] = useState<IdeiaCollision>({
    id: 0,
    capitulo: 0,
    titulo: "",
    descricao: "",
    imagem: "",
  });

  const chamadaIdeia = async () => {
    const response = await fetch(
      `http://localhost:3000/api/base-ideia/${params.id}`
    );
    const data = await response.json();
    setIdeia(data);
  };

  useEffect(() => {
    chamadaIdeia();
  }, []);

  return (
    <div className="div-container-ideia w-full flex justify-center h-96">
      <nav className="nav-container-ideia w-1/4 bg-stone-900 md:text-custom-yellow text-center rounded-lg border-2 border-black flex flex-col items-center justify-center">
        <h1 className="font-bold p-2">Colisão de Ideias</h1>
        <p>Capítulo: {ideia.capitulo}</p>
        <p>Título: {ideia.titulo}</p>
        <p>Descrição: {ideia.descricao}</p>
        <Image
          src={ideia.imagem}
          alt="image-ideia"
          width={250}
          height={200}
          className="image-foto-ideia rounded-lg border-2 border-black"
        ></Image>
        <button className="font-bold " onClick={() => navigate.back()}>
          Voltar
        </button>
      </nav>
    </div>
  );
}
