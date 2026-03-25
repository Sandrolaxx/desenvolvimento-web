import Btn from "./components/Btn";
import Cabecalho from "./components/Cabecalho";

export default function App() {
    const nome = "Sandrolax";

    function teste() {
        console.log("Teste Function")
    }

    return (
        <main>
            <Cabecalho titulo="Cabeçalho 1" />
            <h1 className="">
                Olá {nome}
            </h1>
            <Btn funcao={teste}
                textoBtn="Clique Aqui"
                />
        </main>
    );
}