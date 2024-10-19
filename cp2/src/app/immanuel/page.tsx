"use client";

import Image from "next/image";
import imgImmanuel from "@/img/immanuel.jpg";

export default function Immanuel() {
  return (
    <div className="div-container-immanuel h-80vh flex items-center justify-around">
      <Image
        src={imgImmanuel}
        alt="immanuel"
        width={400}
        height={200}
        className="image-immanuel rounded-lg"
      ></Image>
      <p className="p-container-immanuel w-1/2 text-2xl md:text-custom-yellow">
        Immanuel Velikovsky foi um escritor, médico e psicanalista russo,
        conhecido por suas teorias controversas que desafiavam o conhecimento
        científico convencional sobre a história do sistema solar e a evolução
        da Terra. Ele se destacou por seu livro "Worlds in Collision" (1950), no
        qual propôs que eventos catastróficos descritos em textos antigos e
        mitologias ocorreram devido a interações entre planetas, como o
        deslocamento de Vênus. Apesar de suas ideias terem sido amplamente
        criticadas pela comunidade científica, Velikovsky se tornou uma figura
        influente no campo da pseudociência e um nome popular entre leitores
        interessados em teorias alternativas.
      </p>
    </div>
  );
}
