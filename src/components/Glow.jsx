import React, { useEffect, useState } from "react";
import styled from 'styled-components'

const GlowContainer = styled.div`
    width: 500px;
    height: 400px;
    border-radius: 10px;
    padding: 10px;
    position: relative;
    background-color: ${({ lightOn }) => lightOn ? `rgb(240,240,240)` : `rgb(60,60,60)`};
`;

const GlowBulb = styled.div`
    position: absolute;
    top: 150px;
    left: 150px;
    background-color: ${({ color }) => `rgba(${color.r}, ${color.g}, ${color.b}, 1)`};
    border-radius: 100%;
    width: 200px;
    height: 200px;
    box-shadow: ${({ color, lightOn }) => lightOn && `0 10px 60px 20px rgba(${color.r}, ${color.g}, ${color.b}, 0.7)`};
    
`;

const GlowBulbBase = styled.div`
    position: absolute;
    top: 70px;
    left: 210px;
    background-color: rgb(218, 218, 218);
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    width: 70px;
    height: 90px;
`;

const Wire = styled.div`
    position: absolute;
    left: 242px;
    background-color: rgb(87, 87, 87);
    width: 8px;
    height: 150px;
`;

const LightStatusContainer = styled.div`
    border: 1px solid black;
    border-radius: 4px;
    padding: 0.25rem;
    background-color: white;
    position: absolute;
    display: flex;
    gap: 0.25rem;
`

const ToggleLight = styled.input.attrs({type: 'checkbox'})``;

export default function FunctionnalGlow({color}) {
    const [lightOn, setLightOn] = useState(false);

    // componentDidMount
    // useEffect(() => {
    //     console.log(`👋 Trigger onMount`);
    // }, []);

    // componentDidUpdate
    // useEffect(() => {
    //     console.log(`👋 Trigger on every changement (⚠️ not recommended)`);
    // });

    // componentDidUpdate on state lightOn changes
    // useEffect(() => {
    //     console.log(`✅ Effect => lightOn : ${lightOn ? "💡" : "⚫"}`);
    // }, [lightOn]);

    // componentDidUpdate on props color changes
    // useEffect(() => {
    //     console.log(`✅ Effect => color : ${getHeartColor()}`);
    // }, [color]);

    // componentDidUpdate on state lightOn and props color change
    // useEffect(() => {
    //     console.log(`✅ Effect => color : ${getHeartColor()} | lightOn : ${lightOn ? "💡" : "⚫"}`);
    // }, [lightOn, color]);

    // componentWillUnmount
    // useEffect(() => {
    //     return () => console.log(`❌ Clean up`);
    // }, []);

    // clean up with on state lightOn and props color change
    // useEffect(() => {
    //     console.log(`✅ Effect => color : ${getHeartColor()} | lightOn : ${lightOn ? "💡" : "⚫"}`);
    //     return () => console.log(`❌ Clean up`);
    // }, [lightOn, color]);


    const getHeartColor = () => {
        if (color.r === 200 && color.g === 200) {
            return "💛";
        } else if (color.r === 200) {
            return "❤️";
        } else if (color.g === 200) {
            return "💚";
        } else {
            return "💙";
        }
    }

    return (
        <GlowContainer lightOn={lightOn}>
            <LightStatusContainer>
                <ToggleLight onClick={() => setLightOn(!lightOn)}/>
                {lightOn ? "ON" : "OFF"}
            </LightStatusContainer>
            <Wire />
            <GlowBulbBase />
            <GlowBulb color={color} lightOn={lightOn} />
        </GlowContainer>
    )
}