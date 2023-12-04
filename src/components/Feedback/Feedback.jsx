import { Component } from "react";
import FeedbackContainer from './Feedback.styled'

export default class Feedback extends Component  {    
    render() {
        const { addFeedback } = this.props;        
        return (
            <FeedbackContainer>
                <h2>Please leave feedback</h2>
                <div>
                    {this.props.stats.map(stat => (
                        <button
                            type="button"
                            key={stat}
                            onClick={() => addFeedback(stat)}
                        >
                            {stat}
                        </button>
                    ))}                    
                </div>
            </FeedbackContainer>   
        )
    }  
    

}