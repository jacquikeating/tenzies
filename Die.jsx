export default function Die({value, isHeld, id}) {
    return (
        <button className={isHeld ? ("die held-die") : ("die")}>
            <p className="die-value">{value}</p>
        </button>
    )
}