import { Component } from "react"
import Feedback from "./Feedback"
import Statistics from "./Statistics"
import Notification from "./Notification"
import styled from "styled-components"

const StyledAppContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 40;
    color: #010101;  
`
export default class App extends Component{
   state = {
       good: 0,
       neutral: 0,
       bad: 0, 
  }
  addFeedback = stat => this.setState(prev =>({[stat]: prev[stat] + 1}))    
  
  countTotalFeedback = () => {    
    return Object.values(this.state).reduce((total, value) => {
      return total += value
    })
  }

  countPositiveFeedbackPercentage = () => {    
    const { good } = this.state
    return (this.countTotalFeedback() === 0) ? 0 : ((good * 100) / this.countTotalFeedback()).toFixed(1)  
  }
  
  render() {
    
    return (      
      <StyledAppContainer>
        <Feedback stats={Object.keys(this.state)} addFeedback={this.addFeedback} />        
        {(this.countTotalFeedback() === 0) ? <Notification message="There is no feedback"/> :
        <Statistics stats={Object.entries(this.state)}
                    countTotalFeedback={this.countTotalFeedback}
                    countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
        />}        
      </StyledAppContainer>
    )
    }
}
