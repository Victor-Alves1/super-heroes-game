import ny from '../images/maps/ny.jpg'
import hiddenLeaf from '../images/maps/hiddenLeaf.jpg'
import gotham from '../images/maps/gotham.jpg'
import metropolis from '../images/maps/metropolis.jpg'
import townsville from '../images/maps/townsville.jpg'
import { useState } from 'react'

const ChooseAMap = () => {
    const initialState = 'h-maps w-1/12 rounded-lg duration-300 hover:outline-double hover:outline-gray-50 cursor-pointer relative'
    const invisibleNameState = `absolute top-4 right-1/2 translate-x-1/2 text-red text-lg invisible uppercase`
    const TextWhiteNameState = `absolute top-4 right-1/2 translate-x-1/2 text-white text-lg visible uppercase`
    
    const [NyImgState, setNyImgState] = useState(initialState)
    const [HiddenLeafImgState, setHiddenLeafImgState] = useState(initialState)
    const [GothamImgState, setGothamImgState] = useState(initialState)
    const [MetropolisImgState, setMetropolisImgState] = useState(initialState)
    const [TownsvilleImgState, setTownsvilleImgState] = useState(initialState)

    const [NyNameState, setNyNameState] = useState(invisibleNameState)
    const [HiddenLeafNameState, setHiddenLeafNameState] = useState(invisibleNameState)
    const [GothamNameState, setGothamNameState] = useState(invisibleNameState)
    const [MetropolisNameState, setMetropolisNameState] = useState(invisibleNameState)
    const [TownsvilleNameState, setTownsvilleNameState] = useState(invisibleNameState)
   
    function active(imgConfig, titleConfig){
        setNyImgState(initialState)
        setHiddenLeafImgState(initialState)
        setGothamImgState(initialState)
        setMetropolisImgState(initialState)
        setTownsvilleImgState(initialState)

        imgConfig('h-maps rounded-lg object-cover border-2 w-7/12 duration-300 cursor-pointer relative')
        
        setNyNameState('invisible')
        setHiddenLeafNameState('invisible')
        setGothamNameState('invisible')
        setMetropolisNameState('invisible')
        setTownsvilleNameState('invisible')

        titleConfig(TextWhiteNameState)       
    }
    
    return (

            <div className='box- flex justify-center gap-2 w-full my-5'>
                
                    <span className={NyImgState}>
                        <img src={ny} onClick={()=>active(setNyImgState, setNyNameState)} alt="Picture of New York city" className='object-cover w-full h-maps rounded-lg'/>
                        <span className={NyNameState}>NEW YORK</span>
                    </span>

                    <span className={HiddenLeafImgState}>
                        <img src={hiddenLeaf} onClick={()=>active(setHiddenLeafImgState, setHiddenLeafNameState)} alt="Picture of Hidden Leaf Village" className='object-cover w-full h-maps rounded-lg'/>
                        <span className={HiddenLeafNameState}>Hidden Leaf</span>
                    </span>

                    <span className={GothamImgState}>
                        <img src={gotham} onClick={()=>active(setGothamImgState, setGothamNameState)} alt="Picture of Gotham city" className='object-cover w-full h-maps rounded-lg'/>
                        <span className={GothamNameState}>Gotham city</span>
                    </span>

                    <span className={MetropolisImgState}>
                        <img src={metropolis} onClick={()=>active(setMetropolisImgState, setMetropolisNameState)} alt="Picture of Metropolis " className='object-cover w-full h-maps rounded-lg'/>
                        <span className={MetropolisNameState}>Metropolis</span>
                    </span>

                    <span className={TownsvilleImgState}>
                        <img src={townsville} onClick={()=>active(setTownsvilleImgState, setTownsvilleNameState)} alt="Picture of Townsville" className='object-cover w-full h-maps rounded-lg'/>
                        <span className={TownsvilleNameState}>Townsville</span>
                    </span>

            </div>

    );
}
 
export default ChooseAMap;