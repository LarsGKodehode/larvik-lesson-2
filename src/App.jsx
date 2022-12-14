// CSS
import './App.css'

// Here we are importing a 'default export'
// notice the file path
// the './' tells Vite that this is a relative path
// and it will look for that file starting from where **this** file is stored
// Components
import Card from './components/Card'

// Here we are importing from a file with multiple exports
// notice how we are using the same syntaxt
// as we do when destructuring JavaScript Objects
// Data
import { cardInfo, someOtherInfo } from './data/data'

/**
 * This is a function for handling an event (onClick)
 * it is normal to name these as 'handle' + 'Action'
 */
function handleClick(event) {
  console.log(event)
}

/**
 * Similar function as above, except here we are not
 * taking in any parameters
 */
function handleSimpleClick() {
  console.log("I was clicked")
}

/**
 * The main App component
 * Structured in the excact same way as all the
 * other components we are creating
 * Notice the capitalization in the name
 * This is to differentiate our custom components from
 * those included in normal HTML
 */
function App() {
  // Write all the HTML inside the return statement
  return (
    // The following empty HTML tag is short hand for
    // <React.Fragment> it is used when we want/need to
    // group some HTML but do not want any actual HTML inside
    // our web app
    // mostly used inside Components return statement to
    // fulfill the 'only single parent element' requirement
    <>
      <main>

        {
          /**
           * I saw some of you trying to call the component function
           * This is not the way React is designed to be used
           */
        }
        {/* Card() */}

        {/* If you for some reason need to pass in some arguments to the function use this method */}
        <button onClick={(event) => handleClick(event)}>Click ME!</button>

        {/* If you do not need any arguments you can use this method */}
        <button onClick={handleSimpleClick}>Click ME!</button>

        {
          /**
           * Here we are using the array.map method to generate 
           * a list (array) React Functional Components/JSX.Elements
           * from a list (array) of data objects
           * 
           * Notice the key prop here.
           * This is required so React is able to differentiate between components
           * This key needs to be unique among its siblings (not globally)
           */
        }
        {cardInfo.map(
          (element, index) => {
            return (
              <Card key={index} tittel={element.tittel} tekst={element.tekst} />
            )
          }
        )}

      </main>
    </>
  )
}

export default App