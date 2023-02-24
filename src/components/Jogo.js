import { useState } from "react"
export default function Jogo({ spanClass, letrasDigitadas, botaoEscolherPalavra, palavra, forcaN, contagemErros}) {
    
    return (
        <div className="jogo">
            <img data-test="game-image" className="forca" src={forcaN[contagemErros].link} alt={forcaN[contagemErros].alt} />
            <div className="direita">
                <button data-test="choose-word" onClick={botaoEscolherPalavra} className="button-escolher">Escolher Palavra</button>
                <span data-test="word" className={spanClass}>{palavra.map( (letra, index) =>  {
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