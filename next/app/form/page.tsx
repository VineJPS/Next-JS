import Image from "next/image";
import Navbar from "../componets/Navbar";

export default function Form() {
  return (
    <div>
      <Navbar />
      <div>
        <main className="flex flex-col justify-center items-center mt-20">
          <form 
            action="" 
            method="post" 
            className="border-t-4 border-rose-600 rounded shadow-2xl p-10 bg-white flex flex-col w-full max-w-md"
          >
            <h1 className="text-4xl mb-10 text-center font-bold text-rose-600 ">Formulário</h1>
            
            <label className="text-rose-600 font-semibold mb-1 ml-1 text-sm uppercase tracking-wide">
              Nome do Viajante
            </label>
            <input 
              type="text" 
              placeholder="Digite seu Nome"
              className="border p-3 rounded mb-4 w-full outline-none focus:ring-2 focus:ring-rose-500 transition-all border-gray-200 placeholder:text-rose-300 text-rose-600"
            /> 

            <label className="text-rose-600 font-semibold mb-1 ml-1 text-sm uppercase tracking-wide">
              E-mail de Contato
            </label>
            <input 
              type="text" 
              placeholder="Digite seu Email"
              className="border p-3 rounded mb-4 w-full outline-none focus:ring-2 focus:ring-rose-500 transition-all border-gray-200 placeholder:text-rose-300 text-rose-600"
            /> 

            <label className="text-rose-600 font-semibold mb-1 ml-1 text-sm uppercase tracking-wide">
              Opinião sobre o Circus Digital
            </label>
            <textarea 
              name="" 
              id="" 
              className="border w-full h-40 p-3 rounded mb-6 outline-none focus:ring-2 focus:ring-rose-500 transition-all resize-none border-gray-200 placeholder:text-rose-300 text-rose-600" 
              placeholder="O que você achou?"
            ></textarea> 
            
            <button 
              type="submit" 
              className="bg-rose-600 hover:bg-rose-700 text-white font-bold px-4 py-3 rounded w-full transform active:scale-95 transition-all shadow-md"
            >
              Enviar
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}