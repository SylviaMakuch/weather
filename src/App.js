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
    
    const getWeather =  () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=15ebeb9ae9a6bb955c251aff8c966b82`)
        .then(res => res.json())
        .then(result => {
            const weatherData = {
                city: result.name,
                temp: result.main.temp,
                feels_like: result.main.feels_like,
                temp_min: result.main.temp_min,
                temp_max: result.main.temp_max,
                humidity: result.main.humidity,
                description: result.weather[0].description,
                timezone: result.timezone,
            }
            setWeather(weatherData);
          console.log(weather)
        })
    }

    const updateCity = (e) => {
        setCity(e.target.value);
    }

    const getSearch = (e) => {
        e.preventDefault();
        getWeather();

    }


    return (
        <PageContainer>
            <WeatherContainer>
                <h1>Weather App</h1>
                <Form onSubmit={getSearch}>
                    <Input type="text" placeholder="Enter City" onChange={updateCity} />
                    <Button type="submit">Search</Button>
                </Form>
                {weather.city && (
                    <div>
                        <p>{weather.city}</p>
                        <p> Today's Date: </p>
                        <p>Weather: {weather.description}</p>
                        <p>Temperature: {weather.temp}</p>
                        <p>Feels like: {weather.feels_like}</p>
                        <p>Min Temp Today: {weather.temp_min}</p>
                        <p>Max Temp Today: {weather.temp_max}</p>
                        <p>Humidity: {weather.humidity}</p>
                        <p>Time Zone: {weather.timezone}</p>
                    </div>
                )}
            </WeatherContainer>
        </PageContainer>
    );
    }

export default App;
