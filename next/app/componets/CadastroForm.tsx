"use client";

import { useState } from "react";

type CadastroFormProps = {
  onSuccess?: () => void;
};

export default function CadastroForm({ onSuccess }: CadastroFormProps) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        onSuccess?.();
      }}
    >
      <h2 className="text-2xl font-bold text-rose-700 text-center">
        Cadastro
      </h2>

      <div className="flex flex-col gap-2">
        <label className="text-rose-700 font-semibold text-sm" htmlFor="nome">
          Nome
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          placeholder="Digite seu Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="border border-gray-200 p-3 rounded-lg outline-none focus:ring-2 focus:ring-rose-500 text-rose-700 placeholder:text-rose-300"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-rose-700 font-semibold text-sm" htmlFor="email">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Digite seu Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-200 p-3 rounded-lg outline-none focus:ring-2 focus:ring-rose-500 text-rose-700 placeholder:text-rose-300"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-rose-700 font-semibold text-sm" htmlFor="senha">
          Senha
        </label>
        <input
          id="senha"
          name="senha"
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="border border-gray-200 p-3 rounded-lg outline-none focus:ring-2 focus:ring-rose-500 text-rose-700 placeholder:text-rose-300"
        />
      </div>

      <div className="flex gap-3 mt-2">
        <button
          type="submit"
          className="flex-1 bg-rose-600 hover:bg-rose-700 text-white font-bold px-4 py-3 rounded-lg shadow-md active:scale-95 transition-all"
        >
          Cadastrar
        </button>
        <button
          type="button"
          onClick={() => onSuccess?.()}
          className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-3 rounded-lg shadow-md active:scale-95 transition-all"
        >
          Fechar
        </button>
      </div>

      <p className="text-xs text-gray-500 text-center mt-1">
        Enviar até 18/05 para sidinei.vieira@cps.ps.gov.br • Assunto: 5ads –
        modal nextjs - nomes
      </p>
    </form>
  );
}

