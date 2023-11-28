import styled from "styled-components";

export const StyledDashBoard = styled.div`
min-height : 100vh;
height : fit-content;
width : 100%;
display : flex;
flex-direction : column;
#heading {
    background-color : #1f2937;
    height : 4rem;
    display : flex; 
    justify-content  : flex-end;
    align-items : center;
    position : relative;
}
#subHeading {
    display : flex;
    align-items : center;
    width : 40rem;
    justify-content : space-evenly;
}
.dir {
    margin-right : 5px;
    color : #d3d3d3;
    padding : .4rem;
    border-radius : 5px;
    cursor: pointer;
    &:hover {
       background-color : #2e353d;
       transition : 50ms;
    }
}
.active { 
    background-color : #111827;
    color : white;
    transition : 50ms;
    &:hover {
        background-color : #111827;
    }
}
#icon {
    &:active {
        border : 1px solid white;
    }
}
#chart {
    width : 2rem;
    height : 2rem;
    color : #4F46E5;
}
#charContainer {
    display : flex;
    color : white;
    align-items : center;
    justify-content : space-between;
    width : 11rem;
    position : absolute;
    left : 1rem;
}
#hiddenMenu {
    display : none;
}
@media screen and (max-width: 870px){ 
    #subHeading {
        display  : none;
    }
    #hiddenMenu {
        display : block;
        margin-right : 2rem;
        padding : .2rem;
        border-radius : 5px;
        transition : 50ms;
        &:hover {
            outline : 2px solid white;
        }
    }
    #menu {
        color : white;
        width : 2rem;
        height : 2rem;
        cursor: pointer;
    }
}
`