import captainAmericaFullBody from '../images/marvel/capitao-america.png'
import doctorDoomFullBody from '../images/marvel/doutor-doom.png'
import fenixFullBody from '../images/marvel/fenix.png'
import ironmanFullBody from '../images/marvel/homem-de-ferro.png'
import hulkFullBody from '../images/marvel/hulk.png'
import novaFullBody from '../images/marvel/nova.png'
import thorFullBody from '../images/marvel/thor.png'
import ultronFullBody from '../images/marvel/ultron.png'
import blackWidowFullBody from '../images/marvel/viuva-negra.png'

import batmanFullBody from '../images/dc/batmanFullBody.png'
import supermanFullBody from '../images/dc/supermanFullBody.png'
import wonderWomanFullBody from '../images/dc/mulher-maravilhaFullBody.png'
import flashFullBody from '../images/dc/flashFullBody.png'
import shazamFullBody from '../images/dc/shazamFullBody.png'
import darkFullBody from '../images/dc/darkseidFullBody.png'
import jokerFullBody from '../images/dc/coringaFullBody.png'
import harleyQuinnFullBody from '../images/dc/harley-quinnFullBody.png'
import ravenFullBody from '../images/dc/ravenaFullBody.png'

const SelectedCharacter2 = (selectedSecondCharacterName) => {
    switch (selectedSecondCharacterName.selectedSecondCharacterName){
        case ("captainAmerica"):
            return ( 
                    <>
                    <img src={captainAmericaFullBody} alt="" className='object-cover pb-12'/>
                    <p className='text-white text-4xl font-extrabold absolute py-1 bottom-0 -translate-y-6 z-10'>{`${selectedSecondCharacterName.selectedSecondCharacterName}`}</p>
                    <div className='w-full h-10 absolute bg-blue-600 py-1 bottom-0'></div>
                    </>
            );
        case ("DoctorDoom"):
            return ( 
                <>
                    <img src={doctorDoomFullBody} alt="" className='object-cover pb-12'
                    />
                    <p className='text-white text-4xl font-extrabold absolute py-1 bottom-0 -translate-y-6 z-10'>{`${selectedSecondCharacterName.selectedSecondCharacterName}`}</p>
                    <div className='w-full h-10 absolute bg-lime-600 py-1 bottom-0'></div>
                </>
            );
        case ("Fenix"):
            return ( 
                    <>
                    <img src={fenixFullBody} alt="" className='object-cover pb-12'/>
                    <p className='text-white text-4xl font-extrabold absolute py-1 bottom-0 -translate-y-6 z-10'>{`${selectedSecondCharacterName.selectedSecondCharacterName}`}</p>
                    <div className='w-full h-10 absolute bg-rose-600 py-1 bottom-0'></div>
                    </>
            );
        case ("Ironman"):
            return ( 
                    <>
                    <img src={ironmanFullBody} alt="" className='object-cover pb-12'/>
                    <p className='text-white text-4xl font-extrabold absolute py-1 bottom-0 -translate-y-6 z-10'>{`${selectedSecondCharacterName.selectedSecondCharacterName}`}</p>
                    <div className='w-full h-10 absolute bg-red-600 py-1 bottom-0'></div>
                    </>
            );
        case ("Hulk"):
            return ( 
                <>
                    <img src={hulkFullBody} alt="" className='object-cover pb-12'
                    />
                    <p className='text-white text-4xl font-extrabold absolute py-1 bottom-0 -translate-y-6 z-10'>{`${selectedSecondCharacterName.selectedSecondCharacterName}`}</p>
                    <div className='w-full h-10 absolute bg-green-600 py-1 bottom-0'></div>
                </>
            );
        case ("Nova"):
            return ( 
                    <>
                    <img src={novaFullBody} alt="" className='object-cover pb-12'/>
                    <p className='text-white text-4xl font-extrabold absolute py-1 bottom-0 -translate-y-6 z-10'>{`${selectedSecondCharacterName.selectedSecondCharacterName}`}</p>
                    <div className='w-full h-10 absolute bg-amber-600 py-1 bottom-0'></div>
                    </>
            );
        case ("Thor"):
            return ( 
                <>
                    <img src={thorFullBody} alt="" className='object-cover pb-12'
                    />
                    <p className='text-white text-4xl font-extrabold absolute py-1 bottom-0 -translate-y-6 z-10'>{`${selectedSecondCharacterName.selectedSecondCharacterName}`}</p>
                    <div className='w-full h-10 absolute bg-cyan-600 py-1 bottom-0'></div>
                </>
            );
        case ("Ultron"):
            return ( 
                    <>
                    <img src={ultronFullBody} alt="" className='object-cover pb-12'/>
                    <p className='text-white text-4xl font-extrabold absolute py-1 bottom-0 -translate-y-6 z-10'>{`${selectedSecondCharacterName.selectedSecondCharacterName}`}</p>
                    <div className='w-full h-10 absolute bg-slate-600 py-1 bottom-0'></div>
                    </>
            );
            case ("BlackWidow"):
                return ( 
                        <>
                        <img src={blackWidowFullBody} alt="" className='object-cover pb-12'/>
                        <p className='text-white text-4xl font-extrabold absolute py-1 bottom-0 -translate-y-6 z-10'>{`${selectedSecondCharacterName.selectedSecondCharacterName}`}</p>
                        <div className='w-full h-10 absolute bg-neutral-600 py-1 bottom-0'></div>
                        </>
                );
            case ("Batman"):
            return ( 
                    <>
                        <img src={batmanFullBody} alt="" className='object-cover pb-12'/>
                        <p className='text-white text-4xl font-extrabold absolute py-1 bottom-0 -translate-y-6 z-10'>{`${selectedCharacterName.selectedCharacterName}`}</p>
                        <div className='w-full h-10 absolute bg-blue-600 py-1 bottom-0'></div>
                    </>
            );
        case ("Superman"):
            return ( 
                <>
                    <img src={supermanFullBody} alt="" className='object-cover pb-12'
                    />
                    <p className='text-white text-4xl font-extrabold absolute py-1 bottom-0 -translate-y-6 z-10'>{`${selectedCharacterName.selectedCharacterName}`}</p>
                    <div className='w-full h-10 absolute bg-lime-600 py-1 bottom-0'></div>
                </>
            );
        case ("WonderWoman"):
            return ( 
                    <>
                    <img src={wonderWomanFullBody} alt="" className='object-cover pb-12'/>
                    <p className='text-white text-4xl font-extrabold absolute py-1 bottom-0 -translate-y-6 z-10'>{`${selectedCharacterName.selectedCharacterName}`}</p>
                    <div className='w-full h-10 absolute bg-rose-600 py-1 bottom-0'></div>
                    </>
            );
        case ("Flash"):
            return ( 
                    <>
                    <img src={flashFullBody} alt="" className='object-cover pb-12'/>
                    <p className='text-white text-4xl font-extrabold absolute py-1 bottom-0 -translate-y-6 z-10'>{`${selectedCharacterName.selectedCharacterName}`}</p>
                    <div className='w-full h-10 absolute bg-red-600 py-1 bottom-0'></div>
                    </>
            );
        case ("Shazam"):
            return ( 
                <>
                    <img src={shazamFullBody} alt="" className='object-cover pb-12'
                    />
                    <p className='text-white text-4xl font-extrabold absolute py-1 bottom-0 -translate-y-6 z-10'>{`${selectedCharacterName.selectedCharacterName}`}</p>
                    <div className='w-full h-10 absolute bg-green-600 py-1 bottom-0'></div>
                </>
            );
        case ("Darkseid"):
            return ( 
                    <>
                    <img src={darkFullBody} alt="" className='object-cover pb-12'/>
                    <p className='text-white text-4xl font-extrabold absolute py-1 bottom-0 -translate-y-6 z-10'>{`${selectedCharacterName.selectedCharacterName}`}</p>
                    <div className='w-full h-10 absolute bg-amber-600 py-1 bottom-0'></div>
                    </>
            );
        case ("Joker"):
            return ( 
                <>
                    <img src={jokerFullBody} alt="" className='object-cover pb-12'
                    />
                    <p className='text-white text-4xl font-extrabold absolute py-1 bottom-0 -translate-y-6 z-10'>{`${selectedCharacterName.selectedCharacterName}`}</p>
                    <div className='w-full h-10 absolute bg-cyan-600 py-1 bottom-0'></div>
                </>
            );
        case ("Harley Quinn"):
            return ( 
                    <>
                    <img src={harleyQuinnFullBody} alt="" className='object-cover pb-12'/>
                    <p className='text-white text-4xl font-extrabold absolute py-1 bottom-0 -translate-y-6 z-10'>{`${selectedCharacterName.selectedCharacterName}`}</p>
                    <div className='w-full h-10 absolute bg-slate-600 py-1 bottom-0'></div>
                    </>
            );
            case ("Raven"):
                return ( 
                        <>
                        <img src={ravenFullBody} alt="" className='object-cover pb-12'/>
                        <p className='text-white text-4xl font-extrabold absolute py-1 bottom-0 -translate-y-6 z-10'>{`${selectedCharacterName.selectedCharacterName}`}</p>
                        <div className='w-full h-10 absolute bg-neutral-600 py-1 bottom-0'></div>
                        </>
                )
            }
}
 
export default SelectedCharacter2;