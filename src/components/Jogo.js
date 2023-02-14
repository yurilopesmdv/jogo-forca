import { useState } from "react"
import palavras from "./palavras"

export default function Jogo() {
    const forcaN = [
        { link:"assets/img/forca0.png", alt:"forca0"},
        { link:"assets/img/forca0.png", alt:"forca1"},
        { link:"assets/img/forca0.png", alt:"forca2"},
        { link:"assets/img/forca0.png", alt:"forca3"},
        { link:"assets/img/forca0.png", alt:"forca4"},
        { link:"assets/img/forca0.png", alt:"forca5"},
        { link:"assets/img/forca0.png", alt:"forca6"}
    ]
    const [forca, setForca] = useState(forcaN[0])
    return (
        <div className="jogo">
            <img className="forca" src={forca.link} alt={forca.alt} />
            <div className="direita">
                <button>Escolher Palavra</button>
                <h2>{palavras}</h2>
            </div>
        </div>
    )
}