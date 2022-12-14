/**
 * This is whats called a JSDoc string/comment
 * Put information about how to use the component here
 */
function Card(props) {
  const { tittel, tekst } = props

  return (
    <article>
      <h1>{tittel}</h1>
      <p>{tekst}</p>
    </article>
  )
}

export default Card