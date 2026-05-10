import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-rose-600 p-4 space-x-4 flex justify-start text-white text-lg">
            <Link href={"/"}>Home</Link>
            <Link href={"/sobre"}>Sobre</Link>
            <Link href={"/form"}>Formulario</Link>
            <Link href={"/galeria"}>Galeria</Link>
            <Link href={"/tabela"}>Tabela</Link>
        </nav>
    );
}