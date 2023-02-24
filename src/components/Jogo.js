import { useState } from "react"
export default function Jogo({ forca, letrasDigitadas, botaoEscolherPalavra, palavra, setForca, forcaN, setLetraDesabilitada, letraDesabiltada, contagemErros, setContagemErros}) {
    
    return (
        <div className="jogo">
            <img className="forca" src={forca.link} alt={forca.alt} />
            <div className="direita">
                <button onClick={botaoEscolherPalavra} className="button-escolher">Escolher Palavra</button>
                {palavra}
            </div>
        </div>
    )
}