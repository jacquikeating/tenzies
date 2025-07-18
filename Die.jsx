export default function Die({value, isHeld, id, holdDie}) {
    return (
        <button 
            className={isHeld ? ("die held-die") : ("die")}
            onClick={() => holdDie(id)}
            aria-pressed={isHeld}
            aria-label={`Die with value ${value}, 
            ${isHeld ? "held" : "not held"}`}
        >
            <p className="die-value">{value}</p>
        </button>
    )
}