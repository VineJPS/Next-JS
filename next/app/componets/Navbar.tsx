"use client";

import { useState } from "react";
import Link from "next/link";
import ModalComponent from "./ModalComponent";
import CadastroForm from "./CadastroForm";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav className="bg-rose-600 p-4 space-x-4 flex justify-start text-white text-lg items-center">
        <Link href="/">Home</Link>
        <Link href="/sobre">Sobre</Link>
        <Link href="/form">Formulario</Link>
        <Link href="/galeria">Galeria</Link>
        <Link href="/tabela">Tabela</Link>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="ml-auto bg-rose-700 hover:bg-rose-800 text-white font-bold px-4 py-2 rounded shadow-md"
        >
          Cadastrar
        </button>
      </nav>

      <ModalComponent isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CadastroForm onSuccess={() => setIsModalOpen(false)} />
      </ModalComponent>
    </>
  );
}


