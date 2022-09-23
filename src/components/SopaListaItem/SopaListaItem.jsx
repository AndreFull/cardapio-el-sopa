import "../SopaListaItem/SopaListaItem.css";

function SopaListaItem({sopa,quantidadeSelecionada,index,onRemove,onAdd}) {
 
const removeButton = (canRender, index) =>
    Boolean(canRender) && (
      <button className="Acoes__remover" onClick={() => onRemove(index)}>
        remover
      </button>
    );

  const badgeCounter = (canRender, index) =>
    Boolean(canRender) && (
      <span className="SopaListaItem__badge">
        {" "}
        {quantidadeSelecionada}{" "}
      </span>
    );

  return (
    <div className="SopaListaItem">
      {badgeCounter(quantidadeSelecionada, index)}
      <div>
        <div className="SopaListaItem__titulo"> {sopa.titulo} </div>
        <div className="SopaListaItem__preco">
          R$ {sopa.preco.toFixed(2)}
        </div>
        <div className="SopaListaItem__descricao"> {sopa.descricao} </div>
        <div className="SopaListaItem__acoes Acoes">
          <button
            className={`Acoes__adicionar ${
              !quantidadeSelecionada && "Acoes__adicionar--preencher"
            }`}
            onClick={() => onAdd(index)}>
          
            adicionar
          </button>
          {removeButton(quantidadeSelecionada, index)}
        </div>
      </div>
      <img
        className="SopaListaItem__foto"
        src={sopa.foto}
        alt={`Sopa de ${sopa.sabor}`}
      />
    </div>
  );
}

export default SopaListaItem;