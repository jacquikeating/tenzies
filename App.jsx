import { useState, useRef, useEffect } from "react";
import Confetti from "react-confetti";
import Die from "./Die.jsx";

export default function App() {
  const [diceArr, setDiceArr] = useState(generateDice());
  const [rollCount, setRollCount] = useState(0);
  const rollBtn = useRef(null);

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
    setRollCount(rollCount + 1);
    if (gameWon) {
      setRollCount(0);
      setDiceArr(generateDice());
    } else {
      setDiceArr((prevDiceArr) =>
        prevDiceArr.map((die) =>
          die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) }
        )
      );
    }
  }

  function generateRollText() {
    if (!gameWon) {
      return `Rolls: ${rollCount}`;
    } else if (gameWon && rollCount < 11) {
      return `You're a rockstar! You won with just ${rollCount} rolls!`;
    } else if (gameWon && rollCount > 25) {
      return `You got there in the end! You won with ${rollCount} rolls.`;
    } else {
      return `You won with ${rollCount} rolls!`;
    }
  }

  useEffect(() => {
    rollBtn.current.focus();
  }, [gameWon]);

  return (
    <main>
      {gameWon && <Confetti />}
      <div aria-live="polite" className="sr-only">
        {gameWon && (
          <p>Congratulations! You won! Press "New Game" to start again.</p>
        )}
      </div>

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

      <span>{generateRollText()}</span>

      <button className="roll-btn" onClick={rollDice} ref={rollBtn}>
        {gameWon ? "New Game" : "Roll the dice!"}
      </button>
    </main>
  );
}
