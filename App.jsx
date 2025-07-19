import { useState } from "react";
import Die from "./Die.jsx";

export default function App() {
  const [diceArr, setDiceArr] = useState(generateDice());

  let gameWon =
    diceArr.every((die) => die.isHeld) &&
    diceArr.every((die) => die.value === diceArr[0].value);

  function generateDice() {
    return new Array(10).fill(0).map((dieObject, index) => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: index,
    }));
  }

  function holdDie(dieID) {
    setDiceArr((prevDiceArr) =>
      prevDiceArr.map((die) =>
        die.id === dieID ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  }

  function rollDice() {
    setDiceArr((prevDiceArr) =>
      prevDiceArr.map((die) =>
        die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) }
      )
    );
  }

  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>

      <section id="dice-container">
        {diceArr.map((die) => {
          return (
            <Die
              key={die.id}
              value={die.value}
              isHeld={die.isHeld}
              id={die.id}
              holdDie={holdDie}
            />
          );
        })}
      </section>

      <button className="roll-btn" onClick={rollDice}>
        {gameWon ? "New Game" : "Roll the dice!"}
      </button>
    </main>
  );
}
