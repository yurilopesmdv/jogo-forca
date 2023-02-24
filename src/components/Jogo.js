import { useState } from "react"
export default function Jogo({ letrasDigitadas, botaoEscolherPalavra, palavra, forcaN, contagemErros}) {
    return (
        <div className="jogo">
            <img className="forca" src={forcaN[contagemErros].link} alt={forcaN[contagemErros].alt} />
            <div className="direita">
                <button onClick={botaoEscolherPalavra} className="button-escolher">Escolher Palavra</button>
                {palavra.map( (letra, index) =>  {
                    if(letrasDigitadas.includes(letra)) {
                        return `${letra}`
                    } else {
                        return "_ "
                    }
                    })}
            </div>
        </div>
    )
}