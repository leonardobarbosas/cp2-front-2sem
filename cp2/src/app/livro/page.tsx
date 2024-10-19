"use client";

import Image from "next/image";
import imgLivro from "@/img/livro.jpg";

export default function Livro() {
  return (
    <div className="div-container-livro h-80vh flex items-center justify-around">
      <p className="p-container-livro w-1/2 text-2xl md:text-custom-yellow">
        "Worlds in Collision", escrito por Immanuel Velikovsky, apresenta uma
        teoria controversa sobre a história do sistema solar e eventos
        catastróficos que afetaram a Terra. O autor propõe que, em tempos
        relativamente recentes, o planeta Vênus foi expelido de Júpiter como um
        cometa e passou próximo à Terra, provocando uma série de catástrofes
        naturais que ficaram registradas em mitologias e textos religiosos de
        diversas culturas.
      </p>
      <Image
        src={imgLivro}
        alt="livro"
        width={300}
        height={200}
        className="image-livro rounded-lg"
      ></Image>
    </div>
  );
}
