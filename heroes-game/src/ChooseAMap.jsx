import ny from '../images/maps/ny.png'
import hiddenLeaf from '../images/maps/hiddenLeaf.jpg'
import gotham from '../images/maps/gotham.jpg'
import metropolis from '../images/maps/metropolis.jpg'
import townsville from '../images/maps/towsville.jpg'

const ChooseAMap = () => {
    return (
        <div className='flex'>
            <img src={ny} alt="" />
            <img src={hiddenLeaf} alt="" />
            <img src={gotham} alt="" />
            <img src={metropolis} alt="" />
            <img src={townsville} alt="" />
        </div>
    );
}
 
export default ChooseAMap;