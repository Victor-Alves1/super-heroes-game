import captainAmericaFullBody from '../images/marvel/capitao-america.png'
import doctorDoomFullBody from '../images/marvel/doutor-doom.png'
import fenixFullBody from '../images/marvel/fenix.png'
import ironmanFullBody from '../images/marvel/homem-de-ferro.png'
import hulkFullBody from '../images/marvel/hulk.png'
import novaFullBody from '../images/marvel/hulk.png'
import thorFullBody from '../images/marvel/thor.png'
import ultronFullBody from '../images/marvel/ultron.png'
import blackWidowFullBody from '../images/marvel/viuva-negra.png'

const SelectedCharacter1 = () => {

    switch ("capitanAmerica"){
        case ("capitanAmerica"):
            return ( 
                    <img src={captainAmericaFullBody} alt="" className='object-cover'/>
            );
        case ("DoctorDoom"):
            return ( 
                    <img src={doctorDoomFullBody} alt="" className='object-cover'/>
            );
            }
    
}
 
export default SelectedCharacter1;