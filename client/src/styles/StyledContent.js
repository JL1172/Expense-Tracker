import styled from "styled-components"

export const StyledContent = styled.div`
    width : 100%;
    min-height : 95vh;
    height : fit-content;
    display : flex;
    flex-wrap : wrap;
    padding-top : 2rem;
    .container {
        width : 35rem; 
        height : 32vh;
        border-radius : 5px;
        box-shadow : 0 0 .2em whitesmoke;
        display : flex;
        flex-direction : column;
        justify-content : center;
        /* align-items : center; */
        background-color : #d8d8dd;
        position : relative;
        margin : auto;
    }
    .heading-box {
        color : gray;
        font-size : 20px;
        margin-left : .8rem;
        margin-top : 1rem;
    }
    .balance {
        font-size : 26px;
        font-weight : bolder;
        margin-left : .8rem;
    }
    #subContainer {
        position : relative;
        width : 100%;
        height : 100%;
    }
    #secondaryIncome {
        display : flex;
        margin-left : .8rem;
        font-size : 20px;
    }
    .last {
        margin-top : 2rem;
        margin-bottom : 2rem;
        box-shadow : 0 0 .2em whitesmoke;
        display : flex;
        flex-direction : column;
        justify-content : space-evenly;

        position : relative;
        flex-grow : 2;
        background-color : #1f2937;
        width : 35rem; 
        padding-bottom : 1rem;
        padding-top : 1rem;
        height : 100%;
    }
    .heading-box-two {
        color : white;
        display : flex;
        margin-top : 1rem;
        align-items : center;
    }
    .activities {
        display : flex;
        margin-top : 1rem;
        height : 5rem;
        width : 100%;
        justify-content : space-between;
        align-items : center;
        outline : 2px solid #111827;
        padding : .5rem;
        border-radius : 5px;
        font-size : 20px;
        color : #d3d3d3;
        &:hover {
       background-color : #2e353d;
       transition : 50ms;
       color : white;
    }
        span {
            font-size : 22px;
        }
    }
    @media screen and (max-width: 1136px){
        .container {
            margin-bottom : 2rem;
        } 
        #incomeUsed {
            display : none;
        }
    }
    @media screen and (max-width: 480px){
        .container {
           height : 44vh;
        } 
        #incomeUsed {
            display : none;
        }
    }
`
