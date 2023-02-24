import { useState } from "react"
export default function Jogo({ spanClass, letrasDigitadas, botaoEscolherPalavra, palavra, forcaN, contagemErros}) {
    
    return (
        <div className="jogo">
            <img className="forca" src={forcaN[contagemErros].link} alt={forcaN[contagemErros].alt} />
            <div className="direita">
                <button onClick={botaoEscolherPalavra} className="button-escolher">Escolher Palavra</button>
                <span className={spanClass}>{palavra.map( (letra, index) =>  {
                    if(letrasDigitadas.includes(letra)) {
                        return `${letra}`
                    } else {
                        return "_ "
                    }
                    })}</span>
            </div>
        </div>
    )
}