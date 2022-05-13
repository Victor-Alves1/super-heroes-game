import { useState } from 'react'
import MarvelCharacters from './MarvelCharacters'
import SelectedCharacter1 from './SelectedCharacter1'
import SelectedCharacter2 from './SelectedCharacter2'

function App() {
  const [selectedCharacterName, setSelectedCharacterName] = useState('')

  const [selectedSecondCharacterName, setSelectedSecondCharacterName] = useState('')

  const [marvelUniverse, setMarvelUniverse] = useState(true)

  const choosingCharacter = (selectedCharacter)=>{
    if (selectedCharacterName == ''){
      setSelectedCharacterName(selectedCharacter)
      return console.log(`deu certo ${selectedCharacter}`)
    }else{
      setSelectedSecondCharacterName(selectedCharacter)
      return console.log(`deu certo 2 ${selectedCharacter}`)
    }
  }

  const changeCharactersUniverse = ()=>{
    setMarvelUniverse(!marvelUniverse)
    console.log(`changed ${marvelUniverse}`)
  }

  return (
    <>
    <div className="flex justify-between h-screen bg-bgweb bg-cover px-20">
      
      <div className='flex justify-center w-1/3 mt-auto my-5 mb-5 h-5/6 relative'>
        <SelectedCharacter1 
          selectedCharacterName={selectedCharacterName}

        />
      </div>

      <div className='w-1/3 my-auto'>
        <h1 style={{fontFamily: "Titles", textAlign: "center", color: "orange", fontSize: "24pt"}}>SELECT A CHARACTER </h1>
        <MarvelCharacters 
          choosingCharacter={choosingCharacter}
          changeCharactersUniverse={changeCharactersUniverse}
          marvelUniverse={marvelUniverse}
        />
      </div>
      
  
      <div className='flex justify-center w-1/3 mt-auto my-5 mb-5 h-5/6 relative'>
        <SelectedCharacter2 
         selectedSecondCharacterName={selectedSecondCharacterName}
        />
      </div>

    </div>
    </>
  )
}

export default App
