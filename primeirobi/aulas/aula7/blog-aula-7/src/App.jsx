import './App.css'
import Cabecalho from "./components/cabecalho"
import Post from "./Post"
import Rodape from "./Rodape"

export default function App() {
  return (
    <div>
        <Cabecalho title="Título do Blog" />
        <Post title="Primeiro post" content="Conteudo do primeiro post"/>
        <Post title="Segundo post" content="Conteudo do segundo post"/>
        <Rodape />
    </div>
  )
}
