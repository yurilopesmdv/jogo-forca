export default function Letras(props) {
    return (
        <div className="letras" >
            { props.alfabeto.map( (letra) => <button disabled={true}>{letra}</button>)}
        </div>
    )
}