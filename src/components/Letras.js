export default function Letras({selecionarLetra, letrasDigitadas, alfabeto, palavra, contagemErros, setContagemErros}) {
    
    return (
        <div className="letras" >
            {alfabeto.map( (letra, index) => <button data-test="letter" onClick={() => selecionarLetra(letra)} key={index} disabled={letrasDigitadas.includes(letra)} >{letra}</button>)}
        </div>
    )
}