import captainAmerica from '../images/marvel/capitao-america.jpg'
import doctorDoom from '../images/marvel/doutor-doom.jpg'
import fenix from '../images/marvel/fenix.jpg'
import ironman from '../images/marvel/homem-de-ferro.jpg'
import hulk from '../images/marvel/hulk.jpg'
import nova from '../images/marvel/nova.jpg'
import thor from '../images/marvel/thor.jpg'
import ultron from '../images/marvel/ultron.jpg'
import blackWidow from '../images/marvel/viuva-negra.jpg'
import ChangeUniverse from './ChangeUniverse'

import batman from '../images/dc/batman.jpg'
import superman from '../images/dc/superman.jpg'
import wonderWoman from '../images/dc/wonder-woman.jpg'
import flash from '../images/dc/flash.jpg'
import shazam from '../images/dc/shazam.jpg'
import dark from '../images/dc/dark.jpg'
import joker from '../images/dc/coringa.jpg'
import harleyQuinn from '../images/dc/harley-quinn.jpg'
import raven from '../images/dc/raven.jpg'

const Characters = ({choosingCharacter, changeCharactersUniverse, marvelUniverse}) => {

    return (
    <>
        <div className="grid grid-cols-3 gap-2 mt-4">
        {
            marvelUniverse === true 
        ?
        <>
            <label htmlFor="ThorFrame">
            <img src={thor} alt="Thor Banner" onClick={()=>choosingCharacter("Thor")} className="border-4 border-slate-400 rounded-lg hover:outline-double hover:outline-gray-50 cursor-pointer"/>
            </label>
            
            <label htmlFor="IronmanFrame">
                <img src={ironman} alt="Ironman banner" onClick={()=>choosingCharacter("Ironman")} className="border-4 border-slate-400 rounded-lg hover:outline-double hover:outline-gray-50 cursor-pointer"/>
            </label>
            <label htmlFor="BlackWidowFrame">
                <img src={blackWidow} alt="BlackWidow banner" onClick={()=>choosingCharacter("BlackWidow")} className="border-4 border-slate-400 rounded-lg hover:outline-double hover:outline-gray-50 cursor-pointer"/>
            </label>
            
            <label htmlFor="HulkFrame">
                <img src={hulk} alt="Hulk banner" onClick={()=>choosingCharacter("Hulk")} className="border-4 border-slate-400 rounded-lg hover:outline-double hover:outline-gray-50 cursor-pointer"/>
            </label>
            <label htmlFor="captainAmericaFrame">
                <img src={captainAmerica} alt="Captain America banner" onClick={()=>choosingCharacter("captainAmerica")} className="border-4 border-slate-400 rounded-lg hover:outline-double hover:outline-gray-50 cursor-pointer"/>
            </label>
            <label htmlFor="UltronFrame">
                <img src={ultron} alt="Ultron banner" onClick={()=>choosingCharacter("Ultron")} className="border-4 border-slate-400 rounded-lg hover:outline-double hover:outline-gray-50 cursor-pointer"/>
            </label>
            <label htmlFor="DoctorDoomFrame">
                <img src={doctorDoom} alt="Doctor Doom banner" onClick={()=>choosingCharacter("DoctorDoom")} className="border-4 border-slate-400 rounded-lg hover:outline-double hover:outline-gray-50 cursor-pointer"/>
            </label>
            <label htmlFor="NovaFrame">
                <img src={nova} alt="Nova banner" onClick={()=>choosingCharacter("Nova")} className="border-4 border-slate-400 rounded-lg hover:outline-double hover:outline-gray-50 cursor-pointer"/>
            </label>
            <label htmlFor="FenixFrame">
                <img src={fenix} alt="Fenix banner" onClick={()=>choosingCharacter("Fenix")} className="border-4 border-slate-400 rounded-lg hover:outline-double hover:outline-gray-50 cursor-pointer"/>
            </label>
        </>
        :
        <>
            <label htmlFor="batmanFrame">
                <img src={batman} alt="Batman banner" onClick={()=>choosingCharacter("Batman")} className="border-4 border-slate-400 rounded-lg hover:outline-double hover:outline-gray-50 cursor-pointer"/>
            </label>
            
            <label htmlFor="supermanFrame">
                <img src={superman} alt="Superman banner" onClick={()=>choosingCharacter("Superman")} className="border-4 border-slate-400 rounded-lg hover:outline-double hover:outline-gray-50 cursor-pointer"/>
            </label>
            <label htmlFor="wonderWomanFrame">
                <img src={wonderWoman} alt="Wonder Woman banner" onClick={()=>choosingCharacter("WonderWoman")} className="border-4 border-slate-400 rounded-lg hover:outline-double hover:outline-gray-50 cursor-pointer"/>
            </label>
            
            <label htmlFor="flashFrame">
                <img src={flash} alt="Flash banner" onClick={()=>choosingCharacter("Flash")} className="border-4 border-slate-400 rounded-lg hover:outline-double hover:outline-gray-50 cursor-pointer"/>
            </label>
            <label htmlFor="shazamFrame">
                <img src={shazam} alt="Shazaaaammm banner" onClick={()=>choosingCharacter("Shazam")} className="border-4 border-slate-400 rounded-lg hover:outline-double hover:outline-gray-50 cursor-pointer"/>
            </label>
            <label htmlFor="DarkFrame">
                <img src={dark} alt="Darkseid banner" onClick={()=>choosingCharacter("Darkseid")} className="border-4 border-slate-400 rounded-lg hover:outline-double hover:outline-gray-50 cursor-pointer"/>
            </label>
            <label htmlFor="JokerFrame">
                <img src={joker} alt="Joker banner" onClick={()=>choosingCharacter("Joker")} className="border-4 border-slate-400 rounded-lg hover:outline-double hover:outline-gray-50 cursor-pointer"/>
            </label>
            <label htmlFor="HarleyQuinnFrame">
                <img src={harleyQuinn} alt="Harley Quinn banner" onClick={()=>choosingCharacter("Harley Quinn")} className="border-4 border-slate-400 rounded-lg hover:outline-double hover:outline-gray-50 cursor-pointer"/>
            </label>
            <label htmlFor="RavenFrame">
                <img src={raven} alt="Raven banner" onClick={()=>choosingCharacter("Raven")} className="border-4 border-slate-400 rounded-lg hover:outline-double hover:outline-gray-50 cursor-pointer"/>
            </label>
        </>
        }
        
        </div>
        <div onClick={()=>changeCharactersUniverse()} className='relative mt-5'>
            <ChangeUniverse marvelUniverse={marvelUniverse}/>
        </div>
    </> 
    );
}
 
export default Characters;