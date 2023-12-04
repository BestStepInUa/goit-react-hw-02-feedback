import { Component } from "react";
import StatisticsContainer from "./Statistics.styled";


export default class Statistics extends Component {      
    render() { 
        const { countTotalFeedback } = this.props;
        return (
            <StatisticsContainer>
                <h2>Statistics</h2>
                {this.props.stats.map(stat => (
                    <p key={stat[0]}>{stat[0]}: <span>{stat[1]}</span></p>
                ))}
                <p key="Total">Total: <span>{() => countTotalFeedback()}</span></p>
            </StatisticsContainer>    
        )
    }
}