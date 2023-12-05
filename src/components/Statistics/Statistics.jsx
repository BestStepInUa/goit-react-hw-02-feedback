import { Component } from "react"
import StatisticsContainer from "./Statistics.styled"
export default class Statistics extends Component {    
    render() { 
        const { countTotalFeedback, countPositiveFeedbackPercentage } = this.props        
        return (
            <StatisticsContainer>
                {this.props.stats.map(stat => (
                    <p key={stat[0]}>{stat[0]}: <span>{stat[1]}</span></p>
                ))}                            
                <p key="Total">Total: <span>{countTotalFeedback()}</span></p>
                <p key="Positive feedback">Positive feedback: <span>{countPositiveFeedbackPercentage()}</span></p>
            </StatisticsContainer>    
        )
    }
}