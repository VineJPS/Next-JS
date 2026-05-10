import Image from "next/image";
import Navbar from "../componets/Navbar";

export default function Galeria() {
  return (
    <div>
      <Navbar/>
      <main className="flex flex-col">
        <h1 className="text-4xl mb-10 text-center center mt-5">Galeria</h1>
        <div className="flex flex-col justify-center items-center grid grid-cols-4 gap-4 p-4">

          <div className="flex flex-col items-center text-center">
            <img src="img/images.jpg"
            alt="Cain e Kinger" 
            className="w-100 h-60 hover:scale-105 transition-transform duration-500"/>
            <p>Guarana?!</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img src="img/images (1).jpg" 
            alt="Jax" 
            className="w-100 h-60 hover:scale-105 transition-transform duration-500"/>
            <p>Aura + ego</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img src="img/images (2).jpg" 
            alt="Cain e Pomni" 
            className="w-100 h-60 hover:scale-105 transition-transform duration-500"/>
            <p>Cut cut</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img src="img/images (3).jpg" 
            alt="Cain e Pomni" 
            className="w-100 h-60 hover:scale-105 transition-transform duration-500"/>
            <p>Spider hornet?</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img src="img/images (4).jpg" 
            alt="Kinger e Zooble" 
            className="w-100 h-60 hover:scale-105 transition-transform duration-500"/>
            <p>Hornet Spider</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img src="img/images (5).jpg" 
            alt="Kinger e Zooble" 
            className="w-100 h-60 hover:scale-105 transition-transform duration-500"/>
            <p>Hornet Family</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img src="img/images (6).jpg" 
            alt="Kinger Chad" 
            className="w-100 h-60 hover:scale-105 transition-transform duration-500"/>
            <p>Baby Hornet</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img src="img/images (7).jpg" 
            alt="Kinger vs Cain" 
            className="w-100 h-60 hover:scale-105 transition-transform duration-500"/>
            <p>Baby Hornet 2 :D</p>
          </div>
        </div>
      </main>
    </div>
  );
}