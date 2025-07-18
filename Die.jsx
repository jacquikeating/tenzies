export default function Die({value, isHeld, id, holdDie}) {
    return (
        <button 
            className={isHeld ? ("die held-die") : ("die")}
            onClick={() => holdDie(id)}
        >
            <p className="die-value">{value}</p>
        </button>
    )
}