import { useState } from 'react'
import ChooseAMap from './ChooseAMap'
import Characters from './Characters'
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
        <div className='w-1/3 my-auto relative'>
          <h1 style={{fontFamily: "Titles", textAlign: "center", color: "#faefd8", fontSize: "24pt", WebkitTextStroke: '1px #f77a2c'}}>
            SELECT A CHARACTER
          </h1>
          <Characters 
            choosingCharacter={choosingCharacter}
            changeCharactersUniverse={changeCharactersUniverse}
            marvelUniverse={marvelUniverse}
          />
        </div>
        :
        <div className='w-1/3 my-auto'>
          <h1 style={{fontFamily: "Titles", textAlign: "center", color: "#faefd8", fontSize: "24pt", WebkitTextStroke: '1px #f77a2c'}}>
            SELECT A MAP
          </h1>

          <ChooseAMap />

          <a style={{fontFamily: "Titles", textAlign: "center", color: "#faefd8", fontSize: "24pt", WebkitTextStroke: '1px #f77a2c'}} className={'hover:scale-125 block cursor-pointer'}>Confirm your map</a>
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
