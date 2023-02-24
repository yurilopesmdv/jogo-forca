import { useState } from "react";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import palavras from "./palavras"
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
  const [palavra, setPalavra] = useState([])
  const [contagemErros, setContagemErros] = useState(0)
  const [contagemAcertos, setContagemAcertos] = useState(0)
  const [letrasDigitadas, setLetrasDigitadas] = useState(alfabeto)
  const [spanClass, setSpanClass] = useState("span-letra")
  const [jogoAcabou, setJogoAcabou] = useState(false)
  const letraRepetida = palavra.filter( (letra, index) => palavra.indexOf(letra) === index)
  console.log(contagemErros)
  function escolherPalavra() {
    if(jogoAcabou) {
      setContagemAcertos(0)
      setContagemErros(0)
      setJogoAcabou(false)
      setSpanClass("span-letra")
    }
    const indiceAleatorio = Math.floor(Math.random() * palavras.length);
    const palavraAleatoria = palavras[indiceAleatorio].split('');
    setPalavra(palavraAleatoria)
    setLetrasDigitadas([])
  }
  function selecionarLetra(letra) {
    setLetrasDigitadas([...letrasDigitadas, letra])
    const acertos = contagemAcertos + 1
    const erros = contagemErros + 1
    if(palavra.includes(letra)) {
      setContagemAcertos(contagemAcertos + 1)
      
    } else {
      setContagemErros(contagemErros + 1)
  
    }
    if(acertos === letraRepetida.length) {
      setSpanClass("verde")
      setJogoAcabou(true)
      setLetrasDigitadas(alfabeto)
    } else if(erros === 6){
      setSpanClass("vermelho")
      setJogoAcabou(true)
      setLetrasDigitadas(alfabeto)
    }
  }
  
  return (
    <div className="App">
      <Jogo 
      palavra={palavra}
      forcaN={forcaN} 
      botaoEscolherPalavra={escolherPalavra}
      contagemErros={contagemErros}
      setContagemErros={setContagemErros}
      letrasDigitadas={letrasDigitadas}
      spanClass={spanClass}/>

      <Letras 
      alfabeto={alfabeto} 
      palavra={palavra}
      contagemErros={contagemErros}
      setContagemErros={setContagemErros}
      selecionarLetra={selecionarLetra}
      letrasDigitadas={letrasDigitadas} />

    </div>
  );
}

export default App;
