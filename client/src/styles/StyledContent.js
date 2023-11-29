import styled, { keyframes } from "styled-components"

const kf = keyframes`
0% {
 
    transform : rotate(-90deg);
}
50% {
}
100% {
    transform : rotate(90deg);
    transform : rotate(0);
}
`

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
        
        height : fit-content;
    }
    .heading-box-two {
        color : white;
        display : flex;
        margin-top : 1rem;
        align-items : center;
    }
    .activities {
        cursor: pointer;
        position : relative;
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
        transition : .1s ease-in-out;
        &:hover {
       background-color : #2e353d;
       transition : 50ms;
       color : white;
    }
        span {
            font-size : 22px;
        }
    }
    .hidden-section {
        display : block;
    }
    .shown-section {
        display : flex;
        align-items : center;
    }
    .unmarked {
        display : none;
    }
    #notFocused {
    position : relative;
    }
    #notFocused::before {
        content : "";
        position : absolute;
        border : 2px solid #4f46e5;
        left : 0;
        width : 5rem;
        height : 100%;
        transform : scaleX(0);
        z-index : 2;
        transform-origin : left;
        border-bottom-right-radius : 4rem;
        transition : .2s ease-in-out;
        background-color : #4f46e5;
    }
    #focused {
    background-color : #111827;
    color : white;
    position : relative;
    }
    #focused::before {
        content : "";
        position : absolute;
        border : 2px solid #4f46e5;
        left : 0;
        width : 5rem;
        height : 100%;
        transform : scaleX(1000%);
        z-index : 2;
        transform-origin : left;
        border-bottom-right-radius : 4rem;
        transition : .2s ease-in-out;
        background-color : #4f46e5;
        
    }
    #trash {
        color : #111827;
        position : absolute;
        left : 2rem;
        z-index : 3;
        width : 2rem;
        cursor: pointer;
    }
    #pencil {
        position : absolute;
        z-index : 3;
        cursor: pointer;
        color : #111827;
        left : 7rem;
        width : 2rem;
    }
    #trash, #pencil {
        animation : ${kf} .3s ease-in-out forwards;
        &:hover {
            transform : scale(105%);
            color : pink;
            transition : 100ms;
        }
    }
    @media screen and (max-width: 1136px){
        .container {
            margin-bottom : 2rem;
        } 
        #incomeUsed {
            display : none;
        }
        #focused::before {
        content : "";
        position : absolute;
        border : 2px solid #4f46e5;
        left : 0;
        width : 5rem;
        height : 100%;
        transform : scaleX(700%);
        z-index : 2;
        transform-origin : left;
        border-bottom-right-radius : 4rem;
        transition : .2s ease-in-out;
        background-color : #4f46e5;
    }
    }
    @media screen and (max-width : 1000px){
        .hidden-section {
            display : none;
        }
    }
    @media screen and (max-width : 765px) {
        #focused::before {
        content : "";
        position : absolute;
        border : 2px solid #4f46e5;
        left : 0;
        width : 5rem;
        height : 100%;
        transform : scaleX(400%);
        z-index : 2;
        transform-origin : left;
        border-bottom-right-radius : 4rem;
        transition : .2s ease-in-out;
        background-color : #4f46e5;
    }
    }
    @media screen and (max-width: 480px){
        #trash {
        color : #111827;
        position : absolute;
        left : 3rem;
        z-index : 3;
        width : 1.5rem;
    }
    #pencil {
        position : absolute;
        z-index : 3;
        color : #111827;
        left : 7rem;
        width : 1.5rem;
    }
        #focused::before {
        content : "";
        position : absolute;
        border : 2px solid #4f46e5;
        left : 0;
        width : 5rem;
        height : 100%;
        transform : scaleX(250%);
        z-index : 2;
        transform-origin : left;
        border-bottom-right-radius : 4rem;
        transition : .2s ease-in-out;
        background-color : #4f46e5;
    }
        .container {
           height : 44vh;
        } 
        .unmarked {
            display : flex;
            align-items : center;
        }
        #incomeUsed, .marked {
            display : none;
        }
    }
`
