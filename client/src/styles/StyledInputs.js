import styled from "styled-components";

export const StyledInputs = styled.div`
height : 100vh;
.input-default {
    padding-left : 5px;
    font-size : 1.4rem;
    height : 2.4rem;
    transition : .1s ease-in-out;
    &:focus {
        border : none;
        outline : 2px solid #4F46E5;
        transition : 50ms;
    }
}
button {
    height : 2.4rem;
    display : flex;
    align-items : center;
    justify-content : center;
}
`