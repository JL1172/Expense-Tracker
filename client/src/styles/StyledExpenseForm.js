import styled from "styled-components"


export const StyledExpenseForm = styled.div`
width : 100%;
min-height : 60vh;
height : fit-content;
display : flex;
flex-direction : column;
justify-content : center;
align-items : center;
#demo-simple-select-standard-label {
    position : absolute;
    top : 8rem;
}
#formGroup {
    height : 50vh;  
    width : 40vw;
    display : flex;
    justify-content : space-evenly;
    flex-direction :column;
}
#x-out {
    position : absolute;
    right : 4px;
    top : 4px;
    transition : 200ms;
    &:hover {
    transform : rotate(360deg) scale(115%);
    outline : 2px solid gray;
    padding : .2rem;
    border-radius : 5px;
    transition : 200ms;
    }

}
`