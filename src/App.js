import React from "react";
import { useState } from "react";
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

const Form = styled.form`
    display: flex;
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
    margin: 1rem 1rem;
`;

const Button = styled.button`
    height: 50px;
    width: 50px;
    border-radius: 25px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    background-color: #11192894;
    color: white;
    font-size: 0.5rem;
    margin: 1rem 1rem ;
`;


const App = () => {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState("");
    
    const getWeather = async () => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
        const data = await response.json();
        setWeather(data);
    }

    const updateCity = (e) => {
        setCity(e.target.value);
    }

    const getSearch = (e) => {
        e.preventDefault();
        getWeather();
        console.log(weather);
    }


    return (
        <PageContainer>
            <WeatherContainer>
                <h1>Weather App</h1>
                <Form onSubmit={getSearch}>
                    <Input type="text" placeholder="Enter City" onChange={updateCity} />
                    <Button type="submit">Search</Button>
                </Form>
                {/* <h2>{weather.name}</h2>
                <h3>{weather.main.temp}</h3>
                <h3>{weather.weather[0].main}</h3> */}
            </WeatherContainer>
        </PageContainer>
    );
    }

export default App;
