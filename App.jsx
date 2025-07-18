import { useState } from "react"
import Die from "./Die.jsx"

export default function App() {
    const [diceArr, setDiceArr] = useState(generateDice())

    function generateDice() {
        return new Array(10)
            .fill(0)
            .map((dieObject, index) => ({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: index
            }))
    }

    function holdDie(dieID) {
        setDiceArr(prevDiceArr => prevDiceArr.map(die => 
            die.id === dieID ? {...die, isHeld: !die.isHeld} : die
        ))
    }

    return (
        <main>
            <section id="dice-container">
                {diceArr.map((die) => {
                    return <Die 
                        key={die.id} 
                        value={die.value} 
                        isHeld={die.isHeld}
                        id={die.id}
                        holdDie={holdDie}
                        />
                })}
            </section>

            <button className="roll-btn" onClick={() => setDiceArr(generateDice())}>Roll the dice!</button>
        </main> 
    )
}