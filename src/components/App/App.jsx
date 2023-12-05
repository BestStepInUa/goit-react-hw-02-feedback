import { Component } from "react"

import Section from "../Section"
import Feedback from "../Feedback"
import Statistics from "../Statistics"
import Notification from "../Notification"

import AppContainer from "./App.styled"

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  addFeedback = stat => this.setState(prev => ({ [stat]: prev[stat] + 1 }))
  
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
      <AppContainer>
        <Section title="Please leave Feedback">
          <Feedback stats={Object.keys(this.state)} addFeedback={this.addFeedback} />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics stats={Object.entries(this.state)}
              countTotalFeedback={this.countTotalFeedback}
              countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (<Notification message="There is no feedback" />)}
        </Section>
      </AppContainer>
    )
  }
}