import "./Btn.css"

export default function Btn(props) {
    return (
        <button id="container" 
            onClick={props.funcao}>
            {props.textoBtn}
        </button>
    );
}