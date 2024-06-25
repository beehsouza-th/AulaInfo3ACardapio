import { useState } from "react";
import "../src/globals.css";


export default function App() {

   const[nome, setNome] = useState("milho");
   const[numero, setNumero] = useState(77);
   const[CPF, setCPF] = useState(0);

    const mudarNome = () =>{
    setNome("pipoca")
    }

    const mudarNumero =() =>{
        setNumero(1)
    }
    
    const mudarCPF = () =>{
        setCPF(88)
    }
    
    return(
       <div>
      {nome}
      <button onClick = {mudarNome} > Mudar </button>

      {numero}
      <button onClick = {mudarNumero} > Mudar </button>

      {CPF}
      <button onClick = {mudarCPF} > Mudar </button>
       </div>
    );
}