// import React from "react";

const Navbar = () => {
    return (
      <>
        <div className="text-4xl text-center font-bold bg-black text-white hover:text-amber-500">
          Teste de divisão
        </div>
        <div className="flex flex-col items-center bg-black mx-[40em] h-[20em] my-40 neumorph">
          <h3 className="text-center text-black mt-8 font-bold">
            Faça o login com a sua conta
          </h3>
          <div className="flex flex-row gap-3 mt-6 leading-4">
            <label htmlFor="" className="font-bold pl-4 text-black">
              Nome
            </label>
            <input
              type="text"
              className="border border-black ml-6 mx-auto w-40 mb-6 rounded-md border-none"
            />
          </div>
          <div className="flex flex-row leading-4">
            <label htmlFor="" className="font-bold pl-4 text-black">
              Senha
            </label>
            <input
              type="text"
              className="border border-black ml-6 mx-auto w-40 mb-6 rounded-md border-none"
            />
          </div>
          <div className="flex flex-row leading-4">
            <label htmlFor="" className="font-bold pl-4 text-black">
              Telefone
            </label>
            <input
              type="text"
              className="border border-black ml-6 mx-auto w-40 mb-6 rounded-md border-none"
            />
          </div>

          <button className="font-bold text-black neumorph w-40 bg-slate-400">
            Cadastrar
          </button>
        </div>
      </>
    );


};

const imprimirMensagem = (msg: string) => {
    alert('Clique certo!!');
};


export default Navbar;
