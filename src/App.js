import { useState } from 'react';
import './App.css';

function App() {
  const [texto, setTexto] = useState('');
  const [resultado, setResultado] = useState('');

  const sortearNome = () => {
    // Quebra por vírgula ou quebra de linha e remove espaços extras
    const nomes = texto
      .split(/[\n,]+/) // separa por vírgula ou nova linha
      .map(nome => nome.trim())
      .filter(nome => nome !== ''); // remove vazios

    if (nomes.length === 0) {
      setResultado('Nenhum nome válido inserido.');
      return;
    }

    // Sorteia um nome
    const nomeSorteado = nomes[Math.floor(Math.random() * nomes.length)];
    setResultado(nomeSorteado);
  };

  return (
    <div className="App">
      <label htmlFor="mensagem">Mensagem:</label>
      <br />
      <textarea
        id="mensagem"
        rows={10}
        cols={50}
        placeholder="Separe os nomes por linha ou vírgula"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <br />
      <button onClick={sortearNome}>Sortear</button>

      {resultado && (
        <p>
          <strong>Nome sorteado:</strong> {resultado}
        </p>
      )}
    </div>
  );
}

export default App;
