import { useState } from "react"
import Die from "./Die.jsx"

export default function App() {
    const [diceArr, setDiceArr] = useState(generateDice())

    function generateDice() {
        return new Array(10)
            .fill(0)
            .map(() => ({
                value: Math.ceil(Math.random() * 6),
                isHeld: false
            }))
    }

    return (
        <main>
            <section id="dice-container">
                {diceArr.map((die, index) => {
                    return <Die key={index} value={die.value} />
                })}
            </section>

            <button className="roll-btn" onClick={() => setDiceArr(generateDice())}>Roll the dice!</button>
        </main> 
    )
}