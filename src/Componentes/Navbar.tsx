import React from "react";

const Navbar = () => {
    return (
        <>
            <div className="flex flex-col items-center bg-slate-300 mx-60">
                <div className="">
                    <label htmlFor="" className="font-bold">Nome</label>
                    <input type="text" />
                </div>
                <label htmlFor="" className="font-bold">Senha</label>
                <input type="text" />
                <label htmlFor="" className="font-bold">Telefone</label>
                <input type="text" />
            </div>
        </>
    )
    
    
};

export default Navbar;
