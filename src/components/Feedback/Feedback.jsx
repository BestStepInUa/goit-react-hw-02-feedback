import { Component } from "react";
import FeedbackContainer from './Feedback.styled'

export default class Feedback extends Component  {   
    render() {
        const { addFeedback } = this.props       
        return (
            <FeedbackContainer>
                    {this.props.stats.map(stat => (
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
    

}