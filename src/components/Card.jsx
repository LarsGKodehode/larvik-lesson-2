/**
 * This showcases a simple component file
 * We usually have a file for every component
 */

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

/**
 * Since there is only a single definition in this file we are
 * using the 'export default' statement here.
 */
export default Card