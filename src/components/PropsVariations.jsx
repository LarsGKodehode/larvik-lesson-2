/**
 * This file is only for showcasing the
 * various ways to write and use props
 * that you might encounter
 * 
 * They are all essentially the same
 */

// Basic, no destructuring here
function Basic(props) {
  return (
    <article>
      <h1>{props.tittel}</h1>
      <p>{props.tekst}</p>
    </article>
  )
}

// Destructuring, normal
function Destructuring(props) {
  const { tittel, tekst } = props

  return (
    <article>
      <h1>{tittel}</h1>
      <p>{tekst}</p>
    </article>
  )
}

// Destructuring, innline
function Innline({
  tittel,
  tekst
}) {

  return (
    <article>
      <h1>{tittel}</h1>
      <p>{tekst}</p>
    </article>
  )
}