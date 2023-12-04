import { Component } from "react";
import FeedbackContainer from './Feedback_styled'

export default class Feedback extends Component  {    
    render() {
        const { addFeedback } = this.props.addFeedback;
        console.log(this.props.addFeedback);
        return (
            <FeedbackContainer>
                <h2>Please leave feedback</h2>
                <div>
                    <button onClick={addFeedback} name='good'>Good</button>
                    <button onClick={addFeedback} name='neutral'>Neutral</button>
                    <button onClick={addFeedback} name='bad'>Bad</button>
                </div>
            </FeedbackContainer>   
        )
    }  
    

}