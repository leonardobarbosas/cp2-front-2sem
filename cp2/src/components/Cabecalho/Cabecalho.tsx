import Image from "next/image";
import Menu from "../Menu/Menu";
import logoImg from "@/img/logo.png";

export default function Cabecalho() {
  return (
    <header className="cabecalho flex justify-between items-center h-28 ml-5 mr-5">
      <Image src={logoImg} alt="logo" width={150} height={150} />
      <Menu />
    </header>
  );
}
