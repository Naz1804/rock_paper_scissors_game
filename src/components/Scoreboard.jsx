import logo from "../assets/logo.svg"

export default function Scoreboard({count}) {
    return (
        <div className="self-start px-8 py-5 scoreboard ml-auto mr-auto 
        border-2 border-head rounded-3xl max-w-[550px] sm:w-full 
        mt-4 flex gap-8">
            <img src={logo} className="logo w-[150px] h-[100px]" />
            <div className="h-auto w-auto bg-white ml-auto px-6 py-4 box rounded-xl">
                <h4 className="text-score font-barlow tracking-wide text-center">SCORE</h4>
                <h1 className="font-barlow count text-5xl text-dark text-center">{count}</h1>
            </div>
        </div>
    )
}