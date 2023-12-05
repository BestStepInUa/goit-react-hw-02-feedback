import styled from 'styled-components';

const FeedbackContainer = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;    
    row-gap: 5px;
div {
    display: flex;
    justify-content: center;    
    column-gap: 5px;
}
button {
    background-color: white;
    font-size: 18px;
    border-radius: 5px;
    border: 1px solid grey;
    cursor: pointer;
}
`
export default FeedbackContainer