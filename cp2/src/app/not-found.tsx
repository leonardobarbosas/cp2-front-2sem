import pageNotFoundImg from "@/img/page-not-found.png";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="div-page-not-found flex flex-col justify-center items-center gap-4">
      <h1 className="h1-page-not-found md:text-custom-yellow font-bold text-xl">
        Página não encontrada. Acesse outra página!
      </h1>
      <Image
        src={pageNotFoundImg}
        alt="page-not-found-image"
        width={700}
        height={400}
      />
    </div>
  );
}
