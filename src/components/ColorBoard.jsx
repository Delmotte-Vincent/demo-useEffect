import React from "react";
import styled from 'styled-components'

const BoardContainer = styled.div`
    padding-top: 0.3rem;
    display: flex;
    justify-content: space-between;
    width: 500px;
`;

const ColorButton = styled.button`
    padding: 4px 12px;
    min-width: 10rem;
    cursor: pointer;
    background: none;
    border: 1px solid black;
    color: ${({ buttonColor }) => `rgba(${buttonColor.r}, ${buttonColor.g}, ${buttonColor.b}, 1)`};
    border: ${({ buttonColor }) => `1px solid rgba(${buttonColor.r}, ${buttonColor.g}, ${buttonColor.b}, 1)`};
`;

export default function ColorBoard({setColor}) {

    return (
        <BoardContainer>
            <ColorButton buttonColor={{r: 200, g: 0, b: 0}} onClick={() => setColor({r: 200, g: 0, b: 0})}>Rouge</ColorButton>
            <ColorButton buttonColor={{r: 0, g: 200, b: 0}} onClick={() => setColor({r: 0, g: 200, b: 0})}>Vert</ColorButton>
            <ColorButton buttonColor={{r: 0, g: 0, b: 200}} onClick={() => setColor({r: 0, g: 0, b: 200})}>Bleu</ColorButton>
        </BoardContainer>  
    )
}