"use client";

import { IdeiaCollision } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Ideia() {
  const [ideias, setIdeias] = useState<IdeiaCollision[]>([]);

  const chamadaIdeias = async () => {
    const response = await fetch("http://localhost:3000/api/base-ideia");
    const data = await response.json();
    setIdeias(data);
  };

  useEffect(() => {
    chamadaIdeias();
  });

  return (
    <div className="div-container-ideias">
      <h1>Colisões de Ideias</h1>
      <table>
        <thead>
          <tr>
            <th>Capítulo</th>
            <th>Título</th>
            <th>Descrição</th>
            <th>Visualizar</th>
          </tr>
        </thead>
        <tbody>
          {ideias.map((ideia) => (
            <tr key={ideia.id}>
              <td>{ideia.capitulo}</td>
              <td>{ideia.titulo}</td>
              <td>{ideia.descricao}</td>
              <td>
                <Link href={`/ideia/${ideia.id}`}>Ver</Link>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4}>Total de Ideias: {ideias.length}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
