
export default function Result({result, handleBtn, playerChoiceImage, computerChoiceImage}) {
    return (
        <div className="flex flex-col gap-8 mt-8 items-center justify-center">

            <div className="flex gap-8 mt-4 top items-center justify-center">

                <div className="flex flex-col items-center">
                    <h3 className="hidden sm:block font-barlow text-white tracking-widest text-center mb-3">YOU PICKED</h3>
                    <img src={playerChoiceImage} className='w-[10rem] h-[10rem] object-contain image'/>
                    <h3 className="block sm:hidden font-barlow text-white tracking-widest text-center mt-3">YOU PICKED</h3>
                </div>

                <div className="hidden sm:flex flex-col items-center gap-3 mx-auto">
                    <h1 className="font-barlow text-white tracking-wide text-4xl">{result}</h1>
                    <button onClick={handleBtn} className="font-barlow bg-white px-8 py-2 text-secgrad hover:text-red-600 
                    tracking-wider rounded-md text-[12px]">PLAY AGAIN</button>
                </div>

                <div className="flex flex-col items-center">
                    <h3 className="hidden sm:block font-barlow text-white tracking-widest text-center mb-3">THE HOUSE PICKED</h3>
                    <img src={computerChoiceImage} className='w-[10rem] h-[10rem] object-contain image'/>
                    <h3 className="block sm:hidden font-barlow text-white tracking-widest text-center mt-3">THE HOUSE PICKED</h3>
                </div>

            </div>

            <div className="sm:hidden flex flex-col items-center gap-3 mx-auto mt-6 mb-2">
                <h1 className="font-barlow text-white tracking-wide text-5xl">{result}</h1>
                <button onClick={handleBtn} className="font-barlow bg-white px-16 py-3 text-secgrad hover:text-red-600 
                tracking-widest rounded-md text-20">PLAY AGAIN</button>
            </div>
        </div>
    )
}