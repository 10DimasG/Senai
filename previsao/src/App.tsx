import { useEffect, useState } from 'react';
import './App.css';

interface IPrevisao {
  date: Date,
  temperatureC: Number,
  temperatureF: Number,
  summary: String
}

function App() {
  const [lista, setLista] = useState<IPrevisao[]>([]);
  
  async function CarregarListaPelaApi(){
    const resposta = await fetch("https://ECFP662N1265418:7207/WeatherForecast");
    const dados = await resposta.json();
    setLista(dados);
  }

  useEffect(() => {CarregarListaPelaApi(); }, []);

  return (
    <div>
    <p>TESTE</p>
      {lista.map((item) => (
        <div>
          <p>Data: {String(item.date)}</p>
          <p>Temperatura (°C): {String(item.temperatureC)}</p>
          <p>Temperatura (°F): {String(item.temperatureF)}</p>
          <p>Resumo: {item.summary}</p>
          <p>Cidade: </p>
          <br></br>
        </div>
      ))}
    </div>
  );
}

export default App;