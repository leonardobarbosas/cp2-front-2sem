import Link from "next/link";
import React from "react";

export default function Menu() {
  return (
    <nav>
      <ul className="ul-container flex gap-5 items-center">
        <li>
          <Link href="#">Home</Link>
        </li>
        <li>
          <Link href="#">Livro</Link>
        </li>
        <li>
          <Link href="#">Immanuel</Link>
        </li>
        <li>
          <Link href="#">Nasa</Link>
        </li>
      </ul>
    </nav>
  );
}
