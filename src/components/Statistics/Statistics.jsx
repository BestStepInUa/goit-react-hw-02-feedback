import { Component } from "react";
import StatisticsContainer from "./Statistics_styled";

export default class Statistics extends Component {      
    render() {
        const { good, neutral, bad } = this.props.stat;
        return (
            <StatisticsContainer>
            <h2>Statistics</h2>
                <p>Good: <span>{good}</span></p>
                <p>Neutral: <span>{neutral}</span></p>
                <p>Bad: <span>{bad}</span></p>
            </StatisticsContainer>    
        )
    }
}