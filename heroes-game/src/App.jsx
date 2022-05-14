import { useState } from 'react'
import ChooseAMap from './ChooseAMap'
import MarvelCharacters from './MarvelCharacters'
import SelectedCharacter1 from './SelectedCharacter1'
import SelectedCharacter2 from './SelectedCharacter2'

function App() {
  const [selectedCharacterName, setSelectedCharacterName] = useState('')

  const [selectedSecondCharacterName, setSelectedSecondCharacterName] = useState('')

  const [marvelUniverse, setMarvelUniverse] = useState(true)

  const [selectMap, setSelectMap] = useState(false)

  const choosingCharacter = (selectedCharacter)=>{
    if (selectedCharacterName == ''){
      setSelectedCharacterName(selectedCharacter)
      return console.log(`deu certo ${selectedCharacter}`)
    }else{
      setSelectedSecondCharacterName(selectedCharacter)
      setSelectMap(true)
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

      {
        selectMap == false
        ?
        <div className='w-1/3 my-auto'>
          <h1 style={{fontFamily: "Titles", textAlign: "center", color: "white", fontSize: "24pt", textShadow: '2px 0 0 orange'}}>
            SELECT A CHARACTER
          </h1>
          <MarvelCharacters 
            choosingCharacter={choosingCharacter}
            changeCharactersUniverse={changeCharactersUniverse}
            marvelUniverse={marvelUniverse}
          />
        </div>
        :
        <div className='w-1/3 my-auto'>
          <h1 style={{fontFamily: "Titles", textAlign: "center", color: "orange", fontSize: "24pt"}}>
            SELECT A MAP
          </h1>
          <ChooseAMap />
        </div>
      }
      
  
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
