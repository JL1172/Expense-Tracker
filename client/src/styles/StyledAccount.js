import styled from "styled-components";

export const StyledAccount = styled.div`
display : flex;
min-height : 60vh;
height : fit-content;
position : relative;

.spans {
    position : relative;
    width : 60%;
}
.inputs-fields-no2 {
    width : 100%;
    margin-bottom : 3rem;
    position : relative;
}
.icons-eyes {
    position : absolute;
    width : 1.5rem;
    top : 1rem;
    right : 1rem;
}
.alerts {
    position : fixed;
    width : 100%;
    bottom: 0;
}
#breadCrumb {
    position : absolute;
    display : flex; 
    justify-content : center;
    align-items : center;
    padding : .5rem;
    height : 3rem;
}
.fin-header {
    font-size : 20px;
    display : flex;
    align-items : center;
    margin-bottom : 2rem;
}
.inputs-fields {
    width : 60%;
    margin-bottom : 3rem;
    position : relative;
}
.buttons {
    width : 50%;
}
.columnOne {
    border-right : 1px solid lightgray;
    border-bottom : 1px solid lightgray;
    width : 40vw;
    display : flex;
    padding : 2rem;
    justify-content  :center;
    flex-direction : column;
    font-size : 20px;
    .grayOutText {
        color : lightgray;
        font-size : 18px;
    }
}
.columnTwo {
    padding-top: 1.3rem;
    width : 60vw;
    border-bottom : 1px solid lightgray;
    display : flex;
    flex-direction : column;
    justify-content : space-evenly;
    align-items : center;
}
#x-out {
    position : absolute;
    right : 1rem;
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
@media screen and (max-width: 940px) {
    display : flex;
    min-height : 80vh;
    height : fit-content;
    flex-wrap : wrap;
    #cleared {
        margin-bottom : 4rem;
    }
.columnOne {
    border-right : 1px solid lightgray;
    border-bottom : 1px solid lightgray;
    display : flex;
    padding : 2rem;
    height : 20vh;
    width : 100%;
    justify-content  :center;
    flex-direction : column;
    font-size : 20px;
    margin-top : 3rem;
    .grayOutText {
        font-size : 18px;
        color : lightgray;
    }
}
.columnTwo {
    width : 100%;
    margin-top : 3rem;
    height :60vw;
    border-bottom : 1px solid lightgray;
    display : flex;
    flex-direction : column;
    justify-content : space-evenly;
    align-items : center;
} 
}

@media screen and (max-width: 640px) {
    display : flex;
    min-height : 80vh;
    height : fit-content;
    flex-wrap : wrap;
.columnOne {
    margin-top : 3.2rem;
    border-right : 1px solid lightgray;
    border-bottom : 1px solid lightgray;
    display : flex;
    padding : 2.3rem;
    width : 100%;
    justify-content  :center;
    flex-direction : column;
    font-size : 20px;
    .grayOutText {
        font-size : 18px;
        color : lightgray;
    }
}
.columnTwo {
    width : 100%;
    margin-top : 3rem;
    padding : 1.5rem;
    min-height :50vw;
    height :fit-content; 
    border-bottom : 1px solid lightgray;
    display : flex;
    flex-direction : column;
    justify-content : space-evenly;
    align-items : center;
} 
.spans {
    width : 100%;
}
.inputs-fields, .inputs-fields-no2 {
    width : 100%;
    margin-bottom : 3rem;
}
}
`
