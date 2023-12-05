import FeedbackContainer from './Feedback.styled'

const Feedback = ({ stats, addFeedback }) => {
    return (
        <FeedbackContainer>
            {stats.map(stat => (
                <button
                    type="button"
                    key={stat}
                    onClick={() => addFeedback(stat)}
                >
                {stat}
                </button>
            ))} 
        </FeedbackContainer>
    )    
}   

export default Feedback