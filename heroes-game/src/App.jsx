import { useState } from 'react'
import MarvelCharacters from './MarvelCharacters'
import SelectedCharacter1 from './SelectedCharacter1'
import SelectedCharacter2 from './SelectedCharacter2'

function App() {
  const [count, setCount] = useState(0)

  const choosingCharacter = (selectedCharacter)=>{
    return console.log(`deu certo ${selectedCharacter}`)
}

  return (
    <>

    <div className="flex justify-between h-screen bg-bgweb bg-cover">
      <div className='flex justify-center w-1/3 mt-auto my-5 mb-5 h-5/6'>
        <SelectedCharacter1 choosingCharacter={choosingCharacter}/>
      </div>
      <div className='w-1/3 my-auto'>
        <h1 style={{fontFamily: "Titles", textAlign: "center", color: "orange", fontSize: "24pt"}}>CHARACTER SELECT</h1>
        <MarvelCharacters choosingCharacter={choosingCharacter}/>
      </div>
      <div className='flex justify-center w-1/3 mt-auto my-5 mb-5 h-5/6'>
        <SelectedCharacter2 />
      </div>
    </div>
    </>
  )
}

export default App
