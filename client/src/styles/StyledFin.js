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
const fadeIn = keyframes`
0% {
    opacity : 0;
}
100% {
    opacity : 1;
}
`


export const StyledFin = styled.div`
    width : 100%;
    min-height : 95vh;
    height : fit-content;
    display : flex;
    flex-direction : column;
    flex-wrap : wrap;
    padding-top : 2rem;
    .custom-tooltip {
        text-align : center;
        min-width : 7rem;
        min-height : 2rem;
        padding-top : 4px;
        border-radius : 5px;
        width :fit-content;
        height : fit-content;
        background-color : white;
    }
    .label {
        z-index : 3;
        color : gray;
        display : flex;
        align-items : center;
        justify-content :center;
    }

    .container {
        padding-top : .5rem;
        padding-bottom : .3rem;
        width : 100%; 
        height : 50vh;
        border-radius : 5px;
        box-shadow : 0 0 .2em whitesmoke;
        display : flex;
        flex-direction : column;
        justify-content : center;
        align-items : center;
        background-color : #d8d8dd;
        position : relative;
        margin : auto;
        margin-bottom : 3rem;
    }
    .cat-icons {
        width : 2rem;
    }
    #category-rows {
        width : 100%;
        justify-content : space-around;
        display : flex;
        margin : 2rem;
        a,div {
            color : #4f46e5;
            text-decoration : none;
            &:hover {
                color : #d8d8dd;
                transition : 50ms ease-in-out;
                transition-property : color;
            }
        }
    }
    .category-analytics {
        display : flex;
        align-items : center;
        transition : .2s ease-in-out;
        cursor: pointer;
        border-radius : 5px;
        width : 10rem;
        justify-content : center;
        &:hover {
            background-color : #4f46e5;
            transition : .2s ease-in-out;
        }
    }
    .heading-box {
        color : gray;
        font-size : 20px;
        margin : 1rem;
    }

    .last {
        align-items : flex-start;
        margin : auto;
        box-shadow : 0 0 .2em whitesmoke;
        display : flex;
        flex-direction : column;
        justify-content : space-evenly;

        position : relative;
        flex-grow : 2;
        background-color : #1f2937;
        width : 100%; 
        padding-bottom : 1rem;
        padding-top : 1rem;
        
        height : fit-content;
    }

    .heading-box-two {
        color : white;
        display : flex;
        margin-top : 1rem;
        align-items : center;
        width : 100%;
        justify-content : space-between;
        span { 
            display : flex;
            align-items : center;
        }
        #showAll {
            cursor: pointer;
            position : relative;
            
        }}
        /* .active-filter-no2, .unactive-filter-no2 {
            margin-right : 5px;
            color : #d3d3d3;
            padding : .4rem;
            width : 10rem;
            display : flex;
            justify-content : center;
            align-items : center;
            border-radius : 5px;
            height : fit-content;
            &:hover {
                background-color : #2e353d;
                transition : 50ms;
            }
        }*/
      
        .active-background-no2 {
            background-color : #111827;
            width : 10rem;
            display : flex;
            justify-content : center;
            align-items : center;
            padding : .2rem;
            border-radius : 5px;
            transition : 500ms;
            cursor: pointer;
            &:hover {
                background-color : #111827;
            }
        }
        .unactive-background-no2 {
            width : 10rem;
            display : flex;
            justify-content : center;
            align-items : center;
            padding : .2rem;
            border-radius : 5px;
            cursor: pointer;
            transition : 500ms;
            &:hover {
                background-color : #2e353d;
                transition : 200ms;
            }
        }
        .radio {
          
        }
        .off {
            opacity : 1;
            background-color : transparent;
            backdrop-filter : blur(10px);
            border : 2px solid #4f46e5;
            border-radius : 5px;
            position : absolute;
            transform : scaleY(0);
            width : 10rem;
            right : 0;
            top : 5rem;
            min-height : 15rem;
            z-index : 13;
            transform-origin : top;
            transition : .2s;
            min-height : 15rem;
            height : fit-content;
        } 
        .on {
            opacity : 1;
            background-color : transparent;
            backdrop-filter : blur(10px);
            border : 2px solid #4f46e5;
            border-radius : 5px;
            position : absolute;
            transform : scaleY(100%);
            width : 15rem;
            right : 0;
            top : 5rem;
            min-height : 15rem;
            height : fit-content;
            z-index : 13;
            border-right-color : transparent;
            transform-origin : top;
            transition : .2s;
        }
        #radio-label {
            display : flex;
            align-items : center;
        }
        #filterSection {
            display : flex;
            flex-direction : column;
            justify-content : center;
            align-items : flex-start;
            height : 15rem;
            width : 100%;
            padding-left : 1rem;
        }
       /*  */
       

    .activities {
        cursor: pointer;
        position : relative;
        display : flex;
        margin-top : 2rem;
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
        z-index : 4;
        width : 2rem;
        cursor: pointer;
    }
    #pencil {
        position : absolute;
        z-index : 4;
        cursor: pointer;
        color : #111827;
        left : 7rem;
        width : 2rem;
    }
    #trash, #pencil {
        animation : ${kf} .3s ease-in-out forwards;
        &:hover {
            color : pink;
            transition : 100ms;
        }
    }
    .non-removal::after {
        content : "";
        position : absolute;
        border : 2px solid #7171bd;
        left : 0;
        width : 5rem;
        height : 100%;
        transform : scaleX(0);
        z-index : 10;
        transform-origin : left;
        border-bottom-right-radius : 4rem;
        transition : .2s ease-in-out;
        background-color : #7171bd;
    }
    .removal::after {
        content : "";
        position : absolute;
        border : 2px solid #7171bd;
        left : 0;
        width : 5rem;
        height : 100%;
        z-index : 10;
        transform-origin : left;
        border-bottom-right-radius : 4rem;
        transition : .2s ease-in-out;
        background-color : #7171bd;
        width : 100%;
    }
    #confirm {
        position : absolute;
        z-index : 11;
        cursor: pointer;
        color : #111827;
        left : 0;
        color : white;
        display : flex;
        align-items : center;
        justify-content : space-evenly;
        min-width : 95%;
        width : fit-content;
        span {
            display : flex;
            justify-content : center;
            width : 9rem;
            border-radius : 10px;
            transition : 100ms;
            &:hover {
                color : #1f2937;
                background-color : #4f46e5;
                transition : 300ms;
            }
        }
    }

    .seen-confirm {
        opacity : 0;
        animation : ${fadeIn} .1s ease-in-out forwards;
        animation-delay : .3s;
    }
    #button {
            display : flex;
            justify-content : center;
            width : 9rem;
            border-radius : 10px;
            transition : 100ms;
            &:hover {
                background-color : #4f46e5;
                transition : 300ms;
                color : #1f2937;
            }
        }
    #xMark {
        width : 2rem;
        margin-right : .4rem;
        transition : 100ms;
        z-index : 11;
        &:hover {
            transform : scale(110%);
            transition : 100ms;
        }
    }
    #xMark2 {
        width : 2rem;
        margin-left : .4rem;
        transition : 100ms;
        z-index : 11;
        &:hover {
            transform : scale(110%);
            transition : 100ms;
        }
    }

    .first-container {
        height : 60vh;
    }

    @media screen and (min-width: 1696px) {
        .off {
            opacity : 1;
            background-color : transparent;
            backdrop-filter : blur(10px);
            border : 2px solid #4f46e5;
            border-radius : 5px;
            position : absolute;
            transform : scaleY(0);
            width : 10rem;
            right : 0;
            top : 5rem;
            min-height : 15rem;
            z-index : 13;
            transform-origin : top;
            transition : .2s;
            min-height : 15rem;
            height : fit-content;
        } 
        .on {
            opacity : 1;
            background-color : transparent;
            backdrop-filter : blur(10px);
            border : 2px solid #4f46e5;
            border-radius : 5px;
            position : absolute;
            transform : scaleY(100%);
            width : 15rem;
            right : 0;
            top : 5rem;
            min-height : 15rem;
            height : fit-content;
            z-index : 13;
            border-right-color : transparent;
            transform-origin : top;
            transition : .2s;
        }
        .container, .last {
            width : 100vw;
        }
    }
    @media screen and (max-width: 1136px){
        .first-container {
            height : 50vh;
        }
        #category-rows {
            display : none;
        }
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
    .removal::after {
        content : "";
        width : 100%;
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
    .removal::after {
        content : "";
        width : 100%;
    }
   
    }
    @media screen and (max-width: 600px) {
        .off {
            opacity : 1;
            background-color : transparent;
            backdrop-filter : blur(10px);
            border : 2px solid #4f46e5;
            border-radius : 5px;
            position : absolute;
            transform : scaleY(0);
            width : 10rem;
            right : 0;
            top : 5rem;
            min-height : 15rem;
            z-index : 13;
            transform-origin : top;
            transition : .2s;
            min-height : 15rem;
            height : fit-content;
        } 
        .on {
            opacity : 1;
            background-color : transparent;
            backdrop-filter : blur(10px);
            border : 2px solid #4f46e5;
            border-radius : 5px;
            position : absolute;
            transform : scaleY(100%);
            width : 15rem;
            right : 0;
            top : 5rem;
            min-height : 15rem;
            height : fit-content;
            z-index : 13;
            border-right-color : transparent;
            transform-origin : top;
            transition : .2s;
        }
    }
    @media screen and (max-width: 500px) {
       
        #confirm {
        position : absolute;
        z-index : 11;
        cursor: pointer;
        color : #111827;
        left : 0;
        color : white;
        display : flex;
        align-items : center;
        justify-content : space-evenly;
        min-width : 95%;
        width : fit-content;
        span {
            display : flex;
            justify-content : center;
            width : 7rem;
            border-radius : 10px;
            transition : 100ms;
            &:hover {
                color : #1f2937;
                background-color : #4f46e5;
                transition : 300ms;
            }
        }
    }

    .seen-confirm {
        opacity : 0;
        animation : ${fadeIn} .1s ease-in-out forwards;
        animation-delay : .3s;
    }
    #button {
            display : flex;
            justify-content : center;
            width : 7rem;
            border-radius : 10px;
            transition : 100ms;
            &:hover {
                background-color : #4f46e5;
                transition : 300ms;
                color : #1f2937;
            }
        }
    #xMark {
        width : 2rem;
        margin-right : .4rem;
        transition : 100ms;
        z-index : 11;
        &:hover {
            transform : scale(110%);
            transition : 100ms;
        }
    }
    #xMark2 {
        width : 2rem;
        margin-left : .4rem;
        transition : 100ms;
        z-index : 11;
        &:hover {
            transform : scale(110%);
            transition : 100ms;
        }
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
        border-bottom-right-radius : 2.5rem;
        transition : .2s ease-in-out;
        background-color : #4f46e5;
    }
    .removal::after {
        content : "";
        width : 100%;
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
    @media screen and (max-width : 480px) {
        .removal::after {
        content : "";
        width : 100%;
        border-bottom-right-radius : 0;
    }
    .container {
        height : 50vh;
    }
    .last {
        height : fit-content;
        margin-bottom : 1rem;
    }
    #confirm {
        position : absolute;
        z-index : 11;
        cursor: pointer;
        color : #111827;
        left : 0;
        color : white;
        display : flex;
        align-items : center;
        justify-content : space-evenly;
        min-width : 100%;
        width : fit-content;
        span {
            display : flex;
            justify-content : center;
            width : 5rem;
            border-radius : 10px;
            transition : 100ms;
            &:hover {
                color : #1f2937;
                background-color : #4f46e5;
                transition : 300ms;
            }
        }
    }

    .seen-confirm {
        opacity : 0;
        animation : ${fadeIn} .1s ease-in-out forwards;
        animation-delay : .3s;
    }
    #button {
            display : flex;
            justify-content : center;
            width : 5rem;
            border-radius : 10px;
            transition : 100ms;
            &:hover {
                background-color : #4f46e5;
                transition : 300ms;
                color : #1f2937;
            }
        }
    #xMark {
        width : 2rem;
        margin-right : .4rem;
        transition : 100ms;
        z-index : 11;
        &:hover {
            transform : scale(110%);
            transition : 100ms;
        }
    }
    #xMark2 {
        width : 2rem;
        margin-left : .4rem;
        transition : 100ms;
        z-index : 11;
        &:hover {
            transform : scale(110%);
            transition : 100ms;
        }
    }
}
`
