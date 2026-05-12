import { useState } from "react";
import "./App.css";
import Cabecalho from "./components/Cabecalho";
import Post from "./components/Post";

export default function App() {
    const [contador, setContador] = useState(0);
    const nome = "Sandro Ramos"
    const [ativo, setAtivo] = useState(false);

    function incrementar() {
        setContador(contador + 2);
    }

    return (
        <>
            <Cabecalho texto="Cabeçalho Show" />
            <div>
                <h1 className={`${ativo ? "ativo" : "inativo"}`}>Hello World!🌎</h1>
                <p>Aluno {nome}</p>
                <h2>Valor contador: {contador}</h2>
                <button onClick={incrementar}>
                    Incrementar
                </button>
                <button onClick={() => setAtivo(!ativo)}>
                    Mudar Cor
                </button>
                <section>
                    <h1>Últimos posts</h1>
                    <Post
                        titulo="Centro FAG abre inscrições para o Vestibular de Verão 2026"
                        img="https://www.fag.edu.br/_next/image?url=https%3A%2F%2Fapi-sis.fag.edu.br%2Fuploads%2Fnews%2Fbanner02-6a63d2015fc803.44915974.png&w=1920&q=75"
                        imgAlt="Imagem conceitual do baner do vestibular"
                        data="24/07/2026"
                        texto="O Centro Universitário FAG abriu"
                    />
                </section>
            </div>
        </>
    )
}