import { useState } from "react"

export default function Jogo(props) {
 
    return (
        <div className="jogo">
            <img className="forca" src={props.forca.link} alt={props.forca.alt} />
            <div className="direita">
                <button onClick={props.botao} className="button-escolher">Escolher Palavra</button>
                {props.palavra}
            </div>
        </div>
    )
}