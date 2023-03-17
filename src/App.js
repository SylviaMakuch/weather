import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-image: url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1124&q=100');
    background-size: cover;
`;

const WeatherContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50vh;
    width: 50vw;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: #11192894;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    color: white;
`;

const Input = styled.input`
    height: 50px;
    width: 300px;
    border-radius: 25px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    background-color: #11192894;
    color: white;
    font-size: 1.2rem;
    padding: 0 1rem;
    margin: 1rem 0;
`;


const App = () => {
    return (
        <PageContainer>
            <WeatherContainer>
                <h1>Weather App</h1>
                <Input type="search" placeholder="Enter a city name..."/>
                <input type="submit" value="Search"/>
                <h2>City</h2>
                <h3>Temperature</h3>
                <h3>Weather</h3>
            </WeatherContainer>
        </PageContainer>
    );
    }

export default App;
