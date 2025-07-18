import { useState } from "react"
import Die from "./Die.jsx"

export default function App() {
    const [diceArr, setDiceArr] = useState(generateDice())

    function generateDice() {
        return new Array(10)
            .fill(0)
            .map(() => Math.ceil(Math.random() * 6))
    }

    return (
        <main id="dice-container">
            {diceArr.map((die, index) => {
                return <Die key={index} value={die} />
            })}
            
        </main>
    )
}