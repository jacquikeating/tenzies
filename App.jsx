import Die from "./Die.jsx"

export default function App() {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <section id="dice-container">
            {nums.map((num) => {
                return <Die key={num} value={(Math.floor(Math.random() * 6) + 1)} />
            })}
        </section>
    )
}