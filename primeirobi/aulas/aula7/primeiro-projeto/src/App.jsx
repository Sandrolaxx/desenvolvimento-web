import "./App.css";
import Cabecalho from "./components/Cabecalho";
import Post from "./components/Post";

export default function App() {
    var contador = 0;
    var nome = "Sandro Ramos"

    return (
        <>
            <Cabecalho />
            <div>
                <h1 className="title">Hello World!🌎</h1>
                <p>Aluno {nome}</p>
                <h2>Valor contador: {contador}</h2>
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