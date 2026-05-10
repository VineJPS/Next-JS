import Image from "next/image";
import Navbar from "./componets/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <main>
        <div className="flex flex-col items-center justify-center text-center p-10">
          <img src="img/home.jpg" 
          alt="" 
          className="rounded-lg shadow-2xl mb-6"/>
          <h1>Diário da Hornet - (Recomendado não fuçar...)</h1>
        </div>
      </main>
    </div>
  );
}
