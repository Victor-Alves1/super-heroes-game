import { useState } from 'react'
import MarvelCharacters from './MarvelCharacters'
import SelectedCharacter1 from './SelectedCharacter1'
import SelectedCharacter2 from './SelectedCharacter2'

function App() {
  const [count, setCount] = useState(0)

  function selectedCharacter(CharacterSelected){
    return console.log(`deu certo ${CharacterSelected}`)
}

  return (
    <div className="App">
      <SelectedCharacter1 selectedCharacter={selectedCharacter}/>
      <MarvelCharacters />
      <SelectedCharacter2 />
    </div>
  )
}

export default App
