import { sopas } from "mocks/sopas.js";
import "../SopaLista/SopaLista.css";
import { useState } from "react";
import SopaListaItem from "../SopaListaItem/SopaListaItem.jsx";

function SopaLista() {
  const [sopaSelecionada, setSopaSelecionada] = useState({});

  const adicionarItem = (sopaIndex) => {
    const sopa = {[sopaIndex]: (sopaSelecionada[sopaIndex] || 0) + 1}
    setSopaSelecionada({ ...sopaSelecionada, ...sopa });
  };

  const removerItem = (sopaIndex) => {
    const sopa = {[sopaIndex]: Number(sopaSelecionada[sopaIndex] || 0) - 1}
    setSopaSelecionada({ ...sopaSelecionada, ...sopa });
  };

  return (
    <div className="SopaLista">
      {sopas.map((sopa, index) => (
        <SopaListaItem 
        key={`SopaListaItem-${index}`}
        sopa={sopa}
        quantidadeSelecionada={sopaSelecionada[index]} 
        index={index}
        onRemove={index => removerItem(index)}
        onAdd={index => adicionarItem(index)}/>
        
      ))}
    </div>
  );
}

export default SopaLista;