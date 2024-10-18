"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IdeiaCollision } from "@/types";

export default function IdeiaColision({ params }: { params: { id: number } }) {
  const navigate = useRouter();

  const [ideia, setIdeia] = useState<IdeiaCollision>({
    id: 0,
    capitulo: 0,
    titulo: "",
    descricao: "",
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
    <div className="div-container-ideia">
      <h1>Colisão de Ideias</h1>
      <p>Capítulo: {ideia.capitulo}</p>
      <p>Título: {ideia.titulo}</p>
      <p>Descrição: {ideia.descricao}</p>
      <button onClick={() => navigate.back()}>Voltar</button>
    </div>
  );
}
