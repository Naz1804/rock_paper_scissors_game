import Ruling from '../assets/image-rules.svg'
import close from '../assets/icon-close.svg'
import { useState } from 'react'

export default function Rules() {
    const [btn, setBtn] = useState(false)

    function handleClick() {
        setBtn(!btn)
    }

    return (
        <>
        <button onClick={handleClick}  className='self-center sm:self-end mt-auto px-8 py-2 
        sm:mr-4 sm:mb-4 mb-8
        font-barlow text-white border-2 border-white rounded-lg
        hover:text-secgrad hover:bg-white'>
            RULES
        </button>

        {btn && 
        <div className='bg-white w-full h-full sm:w-[440px] sm:h-auto py-20 px-4 sm:p-4
        absolute self-center rounded-md text-center sm:flex flex-col sidedown sideup z-10'>

            <div className='mb-4 text-center sm:flex'>
                <h2 className='font-barlow text-3xl text-black sm:text-gray-400'>RULES</h2>
                <button onClick={handleClick} className='ml-auto hidden sm:block'>
                    <img src={close} alt='x' className='object-contain select-none'/>
                </button>
            </div>
            <img src={Ruling} alt='rules' className='w-[350px] h-[300px] object-contain self-center mt-[7rem] rule-top sm:mt-0 mx-auto' />
            <button onClick={handleClick} className='mt-[7rem] rule-top sm:hidden'>
                <img src={close} alt='x' className='object-contain select-none'/>
            </button>
        </div>
        }

        {btn && <div className='top-0 left-0 fixed w-full h-full z-[1] bg-black opacity-50'></div>}
        </>
    )
}