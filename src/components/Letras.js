export default function Letras({letraDesabilitada, setLetraDesabilitada, alfabeto, palavra, contagemErros, setContagemErros}) {
    return (
        <div className="letras" >
            {alfabeto.map( (letra, index) => <button key={index}disabled={letraDesabilitada}>{letra}</button>)}
        </div>
    )
}