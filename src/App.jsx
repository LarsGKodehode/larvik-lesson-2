import './App.css'

// Components
import Card from './components/Card'

// Data
import { cardInfo, someOtherInfo } from './data/data'


function handleClick(event) {
  console.log(event)
}

function handleSimpleClick() {
  console.log("I was clicked")
}

function App() {
  return (
    <>
      <main>

        {/* This is not the way! : Card() */}

        <button onClick={(event) => handleClick(event)}>Click ME!</button>

        <button onClick={handleSimpleClick}>Click ME!</button>

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