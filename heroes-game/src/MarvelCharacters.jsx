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

const MarvelCharacters = ({choosingCharacter, changeCharactersUniverse, marvelUniverse}) => {

    return ( 
    <div>
        <div className='hidden'>
            <input type="radio" name="Character" id="ThorFrame" />
            <input type="radio" name="Character" id="IronmanFrame" />
            <input type="radio" name="Character" id="BlackWidowFrame" />
            <input type="radio" name="Character" id="HulkFrame" />
            <input type="radio" name="Character" id="captainAmericaFrame" />
            <input type="radio" name="Character" id="UltronFrame" />
            <input type="radio" name="Character" id="DoctorDoomFrame" />
            <input type="radio" name="Character" id="NovaFrame" />
            <input type="radio" name="Character" id="FenixFrame" />
        </div>
        
        <div className="grid grid-cols-3 gap-2">
        {
            marvelUniverse === true 
        ?
        <>
            <label htmlFor="ThorFrame">
            <img src={thor} alt="" onClick={()=>choosingCharacter("Thor")} className="border-4 border-slate-400 rounded-lg hover:border-8 hover:border-orange-500 "/>
            </label>
            
            <label htmlFor="IronmanFrame">
                <img src={ironman} alt="" onClick={()=>choosingCharacter("Ironman")} className="border-4 border-slate-400 rounded-lg"/>
            </label>
            <label htmlFor="BlackWidowFrame">
                <img src={blackWidow} alt="" onClick={()=>choosingCharacter("BlackWidow")} className="border-4 border-slate-400 rounded-lg"/>
            </label>
            
            <label htmlFor="HulkFrame">
                <img src={hulk} alt="" onClick={()=>choosingCharacter("Hulk")} className="border-4 border-slate-400 rounded-lg"/>
            </label>
            <label htmlFor="captainAmericaFrame">
                <img src={captainAmerica} alt="" onClick={()=>choosingCharacter("captainAmerica")} className="border-4 border-slate-400 rounded-lg"/>
            </label>
            <label htmlFor="UltronFrame">
                <img src={ultron} alt="" onClick={()=>choosingCharacter("Ultron")} className="border-4 border-slate-400 rounded-lg"/>
            </label>
            <label htmlFor="DoctorDoomFrame">
                <img src={doctorDoom} alt="" onClick={()=>choosingCharacter("DoctorDoom")} className="border-4 border-slate-400 rounded-lg"/>
            </label>
            <label htmlFor="NovaFrame">
                <img src={nova} alt="" onClick={()=>choosingCharacter("Nova")} className="border-4 border-slate-400 rounded-lg"/>
            </label>
            <label htmlFor="FenixFrame">
                <img src={fenix} alt="" onClick={()=>choosingCharacter("Fenix")} className="border-4 border-slate-400 rounded-lg"/>
            </label>
        </>
        :
        <>
            <label htmlFor="batmanFrame">
                <img src={batman} alt="" onClick={()=>choosingCharacter("Batman")} className="border-4 border-slate-400 rounded-lg hover:border-8 hover:border-orange-500 "/>
            </label>
            
            <label htmlFor="supermanFrame">
                <img src={superman} alt="" onClick={()=>choosingCharacter("Superman")} className="border-4 border-slate-400 rounded-lg"/>
            </label>
            <label htmlFor="wonderWomanFrame">
                <img src={wonderWoman} alt="" onClick={()=>choosingCharacter("WonderWoman")} className="border-4 border-slate-400 rounded-lg"/>
            </label>
            
            <label htmlFor="flashFrame">
                <img src={flash} alt="" onClick={()=>choosingCharacter("Flash")} className="border-4 border-slate-400 rounded-lg"/>
            </label>
            <label htmlFor="shazamFrame">
                <img src={Shazam} alt="" onClick={()=>choosingCharacter("Shazam")} className="border-4 border-slate-400 rounded-lg"/>
            </label>
            <label htmlFor="DarkFrame">
                <img src={dark} alt="" onClick={()=>choosingCharacter("Darkseid")} className="border-4 border-slate-400 rounded-lg"/>
            </label>
            <label htmlFor="JokerFrame">
                <img src={joker} alt="" onClick={()=>choosingCharacter("Joker")} className="border-4 border-slate-400 rounded-lg"/>
            </label>
            <label htmlFor="HarleyQuinnFrame">
                <img src={harleyQuinn} alt="" onClick={()=>choosingCharacter("Harley Quinn")} className="border-4 border-slate-400 rounded-lg"/>
            </label>
            <label htmlFor="RavenFrame">
                <img src={raven} alt="" onClick={()=>choosingCharacter("Raven")} className="border-4 border-slate-400 rounded-lg"/>
            </label>
        </>
        }
        
        </div>
        <div onClick={()=>changeCharactersUniverse()} className='relative mt-5'>
            <ChangeUniverse marvelUniverse={marvelUniverse}/>
        </div>
    </div>
    );
}
 
export default MarvelCharacters;