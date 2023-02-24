import { useState } from "react";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import palavras from "./components/palavras";
import alfabeto from "./components/alfabeto";

function App() {
  const forcaN = [
    { link: "assets/img/forca0.png", alt: "forca0" },
    { link: "assets/img/forca1.png", alt: "forca1" },
    { link: "assets/img/forca2.png", alt: "forca2" },
    { link: "assets/img/forca3.png", alt: "forca3" },
    { link: "assets/img/forca4.png", alt: "forca4" },
    { link: "assets/img/forca5.png", alt: "forca5" },
    { link: "assets/img/forca6.png", alt: "forca6" }
  ]
  const [letraDesabilitada, setLetraDesabilitada] = useState(true)
  const [palavra, setPalavra] = useState([])
  const [forca, setForca] = useState(forcaN[0])
  const [contagemErros, setContagemErros] = useState(0)
  const [letrasDigitadas, setLetrasDigitadas] = useState([])
  function escolherPalavra() {
    const indiceAleatorio = Math.floor(Math.random() * palavras.length);
    const palavraAleatoria = palavras[indiceAleatorio].split('');
    setPalavra(palavraAleatoria)
    setLetraDesabilitada(false)
  }
  return (
    <div className="App">
      <Jogo setForca={setForca} 
      palavra={palavra} forca={forca} 
      forcaN={forcaN} 
      botaoEscolherPalavra={escolherPalavra} 
      letraDesabilitada={letraDesabilitada}
      setLetraDesabilitada={setLetraDesabilitada}
      contagemErros={contagemErros}
      setContagemErros={setContagemErros}
      letrasDigitadas={letrasDigitadas}/>

      <Letras letraDesabilitada={letraDesabilitada} 
      setLetraDesabilitada={setLetraDesabilitada} 
      alfabeto={alfabeto} 
      palavra={palavra}
      contagemErros={contagemErros}
      setContagemErros={setContagemErros} />

    </div>
  );
}

export default App;
