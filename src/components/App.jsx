/* eslint-disable no-restricted-globals */
import { Component } from "react";
import Feedback from "./Feedback";
import Statistics from "./Statistics";
import styled from "styled-components";

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
       good: 1,
       neutral: 2,
       bad: 3, 
  }
  feedbackCounter = (e) => {
    this.setState(prev => ({
      [name]: prev.name + 1
    }))
    console.log(e.target)
  }

  render() {
      console.log(this.state);
        return (
          <StyledAppContainer>
            <Feedback addFeedback={this.feedbackCounter}/>
            <Statistics stat={this.state}/>
          </StyledAppContainer>
    );
    }
};
