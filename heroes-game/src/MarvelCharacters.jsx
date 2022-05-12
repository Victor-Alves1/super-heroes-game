import captainAmerica from '../images/marvel/capitao-america.jpg'
import doctorDoom from '../images/marvel/doutor-doom.jpg'
import fenix from '../images/marvel/fenix.jpg'
import ironman from '../images/marvel/homem-de-ferro.jpg'
import hulk from '../images/marvel/hulk.jpg'
import nova from '../images/marvel/nova.jpg'
import thor from '../images/marvel/thor.jpg'
import ultron from '../images/marvel/ultron.jpg'
import blackWidow from '../images/marvel/viuva-negra.jpg'

const MarvelCharacters = () => {
    
    return ( 
    <div>
        <img src={thor} alt="" onClick={()=>selectedCharacter("Thor")} />
        <img src={ironman} alt="" onClick={()=>selectedCharacter("Ironman")}/>
        <img src={blackWidow} alt="" onClick={()=>selectedCharacter("BlackWidow")}/>
        <img src={hulk} alt="" onClick={()=>selectedCharacter("Hulk")}/>
        <img src={captainAmerica} alt="" onClick={()=>selectedCharacter("captainAmerica")}/>
        <img src={ultron} alt="" onClick={()=>selectedCharacter("Ultron")}/>
        <img src={doctorDoom} alt="" onClick={()=>selectedCharacter("DoctorDoom")}/>
        <img src={nova} alt="" onClick={()=>selectedCharacter("Nova")}/>
        <img src={fenix} alt="" onClick={()=>selectedCharacter("Fenix")}/>
    </div>
    );
}
 
export default MarvelCharacters;