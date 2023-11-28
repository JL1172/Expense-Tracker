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
    &:hover {
        outline : 1px solid white;
    }
    &:active {
        outline-offset : 4px;
        transition : 50ms ease-in-out;
    }
}
.hidden-profile-drop {
    transform : scaleY(100%);
    transform-origin : top;
    transition : .1s ease-in-out;
    background-color : white;
    position : absolute;
    display : flex;
    flex-direction : column;
    justify-content : space-evenly;
    right : 4em;
    top : 3.5rem;
    box-shadow : 0 0 .2em lightgray;
    border-radius : 5px;
}
.profile-section {
    color : #2b2b2b;
    width : 10rem;
    height : 2rem;
    display : flex;
    flex-direction : column;
    justify-content : center;
    padding-left : 1rem;
    font-size : 14px;
    cursor: pointer; 
    &:hover {
        border-radius : 5px;
        background-color : whitesmoke;
    }
}
.hidden-hidden {
    transform : scaleY(0);
    transition : .1s ease-in-out;
    position : absolute;
    right : 2rem;
    top : 2rem;
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
#hiddenMenu, .item, #bottomSection  {
    display : none;
}

.content-menu {
    transform : scaleY(0);
    height : 0;
    transform-origin : top;
    transition : .2s;
}

#lowerHalf {
    box-shadow : 0 0 .5em gray;
    height : 6rem;
    display : flex;
    align-items : center;
    padding-left : 1rem;

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
        color :  #d3d3d3;
        width : 2rem;
        height : 2rem;
        cursor: pointer;
        &:hover {
            color : white;
        }
    }
    .menu-drop {
        transform : scaleY(100%);
        transform-origin : top;
        transition : .2s;

        display : flex;
        flex-direction : column;
        justify-content : space-evenly;

        color : #d3d3d3;
        padding : .4rem;
        cursor: pointer;
        background-color : #1f2937;

        min-height : 50vh;
        height : 50vh;


    }
    .item {
        padding : 5px;
        display : block;
        border-radius : 5px;
        margin-bottom : 6px;
        &:hover {
            background-color : #2e353d;
            transition : 50ms;
    }
    }
    .current {
        background-color : #111827;
        color : white;
        transition : 50ms;
        &:hover {
            background-color : #111827;
        }
    }
    #bottomSection {
        margin-top : 1rem;
        display : flex;
        flex-direction : column;
        min-height : 20vh;
        height : fit-content;
        justify-content : space-evenly;
        border-top : 1px solid #d3d3d3;
    }
    #profile {
        margin-top : 1rem;
        display : flex;
        align-items : center;
        width : 10rem;
        justify-content : space-around;
    }
    .bottom-content {
        margin-top : .3rem;
        padding : 5px;
        display : block;
        border-radius : 5px;
        &:hover {
            background-color : #2e353d;
            transition : 50ms;
            color: white;
    }
    }
}
`