import { useState } from "react";
import "./App.css";

function App() {
  const [texto, setTexto] = useState("");
  const [listaOrdenada, setListaOrdenada] = useState([]);

  const extrairNumeroFinal = (str) => {
    const match = str.match(/(\d+)$/);
    return match ? parseInt(match[1], 10) : NaN;
  };

  const compararNomes = (a, b) => {
    const numA = extrairNumeroFinal(a);
    const numB = extrairNumeroFinal(b);

    if (!isNaN(numA) && !isNaN(numB)) return numA - numB;
    if (!isNaN(numA)) return -1;
    if (!isNaN(numB)) return 1;
    return a.localeCompare(b);
  };

  const sortearNome = () => {
    const nomes = texto
      .split(/[\n,]+/)
      .map((nome) => nome.trim())
      .filter((nome) => nome !== "");

    if (nomes.length === 0) {
      setListaOrdenada([]);
      return;
    }

    const nomesOrdenados = [...nomes].sort(compararNomes);
    const listaFormatada = nomesOrdenados.map((nome, i) => `${i + 1}° ${nome}`);

    setListaOrdenada(listaFormatada);
  };

  const limparCampos = () => {
    setTexto("");
    setListaOrdenada([]);
  };

  return (
    <div className="container">
      <h1 className="titulo-digite-nomes">Digite nomes:</h1>

      <textarea
        id="mensagem"
        rows={10}
        cols={50}
        placeholder="Separe os nomes por linha ou vírgula."
        className="textarea-texto-nomes"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />

      <div className="container-btns">
        <button className="btn limpar" onClick={limparCampos}>
          Limpar
        </button>
        <button className="btn sortear" onClick={sortearNome}>
          Sortear
        </button>
      </div>

      {listaOrdenada.length > 0 && (
        <div className="list-nomes">
          <strong>Lista ordenada:</strong>
          <ul>
            {listaOrdenada.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
