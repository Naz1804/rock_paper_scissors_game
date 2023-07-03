import Rock from '../assets/Rock.png'
import Paper from '../assets/Paper.png'
import Scissors from '../assets/Scissors.png'
import Triangle from '../assets/bg-triangle.svg'
import Result from './Result'
import { useState } from 'react'

const choices = [
    {id: 'rock', image: Rock},
    {id: 'paper', image: Paper},
    {id: 'scissors', image: Scissors}
]

export default function Game({updateCount}) {
    const [playerChoice, setPlayerChoice] = useState(null)
    const [computerChoice, setComputerChoice] = useState(null)
    const [playerChoiceImage, setPlayerChoiceImage] = useState(null)
    const [computerChoiceImage, setComputerChoiceImage] = useState(null)
    const [result, setResult] = useState('') 
    const [changeScreen, setChangeScreen] = useState(false)

    function handlePlayerChoice(choice) {
        const computerRandomChoice = choices[Math.floor(Math.random() * choices.length)];

        setPlayerChoice(choice);
        setPlayerChoiceImage(choices.find((item) => item.id === choice).image)
        setComputerChoice(computerRandomChoice);
        setComputerChoiceImage(computerRandomChoice.image)
    
        determineResult(choice, computerRandomChoice);
        setChangeScreen(!changeScreen)
    }

    function handleBtn() {
        setChangeScreen(!changeScreen)
    }

    function determineResult(playerChoice, computerChoice) {
        if (playerChoice === computerChoice.id) {
            setResult("DRAW");
        } else if (
            (playerChoice === 'rock' && computerChoice.id === 'scissors') ||
            (playerChoice === 'paper' && computerChoice.id === 'rock') ||
            (playerChoice === 'scissors' && computerChoice.id === 'paper')
        ) {
            setResult('YOU WIN');
            updateCount('win')
        } else {
            setResult('YOU LOSE');
            updateCount('lose')
        }
    }

    return (
        <div className='self-center mt-4'>
            {changeScreen ? 
            <Result result={result} handleBtn={handleBtn} playerChoiceImage={playerChoiceImage} computerChoiceImage={computerChoiceImage} /> 
            : (
               <>
                <img src={Triangle} alt='triangle' className='mt-[80px] w-80 h-80 relative triangle' />
                {choices.map((choice) => (
                    <button 
                    key={choice.id} 
                    onClick={() => handlePlayerChoice(choice.id)} 
                    className={`absolute ${choice.id}`}>
                        <img src={choice.image} className='w-[9rem] h-[9rem] object-contain image' />
                    </button>
                ))}
              </>
             )
            }
        </div>
    )
}