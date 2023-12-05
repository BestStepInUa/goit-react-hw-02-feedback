import StatisticsContainer from "./Statistics.styled"

const Statistics = ({stats, countTotalFeedback, countPositiveFeedbackPercentage}) => {    
    return (
        <StatisticsContainer>
            {stats.map(stat => (
                <p key={stat[0]}>{stat[0]}: <span>{stat[1]}</span></p>
            ))}                            
            <p key="Total">Total: <span>{countTotalFeedback()}</span></p>
            <p key="Positive feedback">Positive feedback: <span>{countPositiveFeedbackPercentage()} %</span></p>
        </StatisticsContainer>

    )   
}

export default Statistics