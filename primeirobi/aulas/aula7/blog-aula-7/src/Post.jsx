export default function Post(props) {
  return (
    <article>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </article>
  ); 
}