import React, { useState } from "react";
import zafClient from "../zafClient";


export default function Search(){
    const [cep,setCep] = useState('')
    function handleCepChange(e){
        setCep(e.target.value)
    }
    async function handleSubmit(e){
        e.preventDefault()
        console.log(cep)
        const url = `http://viacep.com.br/ws/${cep}/json/`
        const resp = await zafClient.request({
            method: 'GET',
            url: url
        })
        console.log(resp)
    }
    return(
       <div className="search">
           <form onSubmit={handleSubmit}>
               <input value={cep} onChange={handleCepChange}></input>
               <button type='submit'>Buscar</button>
           </form>
       </div>
    )

}