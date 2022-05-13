import dcLogo from '../images/dcLogo.png'
import marvelLogo from '../images/marvelLogo.jpg'

const ChangeUniverse = (marvelUniverse) => {
    console.log(marvelUniverse)
    if(marvelUniverse.marvelUniverse === true){
    return (
        <>
            <img src={dcLogo} alt="" className='w-24 absolute right-1/2 translate-x-1/2'/>
            <img src={marvelLogo} alt="" className='w-24 rounded-full absolute right-1/2 translate-x-1/2 hover:opacity-0 duration-700'/>
        </>
    );
    }else{
    return (
        <>
            <img src={dcLogo} alt="" className='w-24 absolute right-1/2 translate-x-1/2 opacity-100 hover:opacity-0 duration-700'/>
            <img src={marvelLogo} alt="" className='w-24 rounded-full absolute right-1/2 translate-x-1/2 opacity-0 hover:opacity-100 duration-700'/>
        </>
    )
    }
}
 
export default ChangeUniverse;