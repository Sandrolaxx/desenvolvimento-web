//props são as propriedades que o componente recebe
//do componente pai
export default function Post(props) {
    return (
        <article>
            <h2>{props.titulo}</h2>
            <img height={400} width={400} 
                src={props.img} alt={props.imgAlt} />
            <br />
            <span>{props.data}</span>
            <p>{props.texto}</p>
        </article>
    );
}