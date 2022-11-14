export default function Nutrition({ nutrition }) {
    return (
        <>
            <span>{nutrition.label}: </span>
            <span>{nutrition.quantity}</span>
            <span> {nutrition.unit}</span>
        </>
    )
}
