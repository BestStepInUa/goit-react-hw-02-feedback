import styled from 'styled-components'

const StatisticsContainer = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;    
    row-gap: 5px;

p {
    font-size: 18px;
    font-style: italic;
}

p:nth-last-child(-n + 2) {
    font-weight: bold;
}
`
export default StatisticsContainer