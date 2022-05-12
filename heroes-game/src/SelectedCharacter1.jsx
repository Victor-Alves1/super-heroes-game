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
                <div>
                    <img src={captainAmericaFullBody} alt="" />
                </div>
            );
        case ("DoctorDoom"):
            return ( 
                <div>
                    <img src={doctorDoomFullBody} alt="" />
                </div>
            );
            }
    
}
 
export default SelectedCharacter1;