import './App.css'

// Components
import Card from './components/Card'

// Data
import { cardInfo } from './data/data'

function App() {
  return (
    <>
      <main>

        {/* This is not the way! : Card() */}

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