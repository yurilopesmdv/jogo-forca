import { useState } from "react"

export default function Jogo({ forca, botao, palavra, setForca, forcaN}) {
    return (
        <div className="jogo">
            <img className="forca" src={forca.link} alt={forca.alt} />
            <div className="direita">
                <button onClick={botao} className="button-escolher">Escolher Palavra</button>
                {palavra}
            </div>
        </div>
    )
}