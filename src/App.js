import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import swal from "sweetalert";

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-image: url("https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1124&q=100");
  background-size: cover;
`;

const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: #475c8414;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  color: white;
  width: 90%;

  @media (min-width: 1020px) {
    width: 50%;
    height: 50%;
  }

  @media (max-width: 1120px) {
    font-size: 0.8rem;
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  height: 50px;
  width: 50%;
  border-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  background-color: #11192894;
  color: white;
  font-size: 1.2rem;
  padding: 0 1rem;
  margin: 1rem 1rem;

  @media (max-width: 1120px) {
    margin: 1rem 0.4rem;
  }
`;

const Button = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.125);
  background-color: #11192894;
  color: white;
  font-size: 0.5rem;
  margin: 1rem 1rem;
  font-weight: bold;

  &:hover {
    background-color: #111928;
    cursor: pointer;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  justify-items: start;
  align-items: center;

  @media (max-width: 420px) {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
  }
`;

const App = () => {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState("");
    const [weatherResults, setWeatherResults] = useState("");

    const getWeather = async () => {
        try {
            fetch(
                `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=15ebeb9ae9a6bb955c251aff8c966b82`
            )
                .then((res) => res.json())
                .then((data) => {
                    if (data.cod === 200) {
                        setWeather({
                            city: data.name,
                            temp_min: KtoC(data.main.temp_min),
                            temp_max: KtoC(data.main.temp_max),
                            humidity: data.main.humidity,
                            description: data.weather[0].description,
                            icon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
                        });
                    } else {
                        swal ( "Oops" ,  `${city} could not be found, please enter a valid city ` ,  "error" )
                    }
                });
        } catch (error) {
            alert("City not found");
        }
    };

    function KtoC(K) {
        return Math.floor(K - 273.15);
    }

    const updateCity = (e) => {
        setCity(e.target.value);
    };

    const getSearch = (e) => {
        e.preventDefault();
        getWeather();
    };

    return (
        <PageContainer>
            <WeatherContainer>
                <h1>Weather App</h1>
                <Form onSubmit={getSearch}>
                    <Input type="text" placeholder="Enter City" onChange={updateCity} />
                    <Button type="submit">Search</Button>
                </Form>
                {weather.city && (
                    <Grid>
                        <div style={{ gridArea: "1 / 1 / 2 / 3" }}>
                            <h2>{weather.city}</h2>
                            <p>
                                {" "}
                                <small>{new Date().toLocaleDateString()} </small>{" "}
                            </p>
                        </div>
                        <div>
                            <img src={weather.icon} alt="weather icon" />
                            <p> {weather.description}</p>
                        </div>

                        <div>
                            <p>Min</p>
                            <h3> {weather.temp_min}°C </h3>
                        </div>
                        <div>
                            <p>Max</p>
                            <h3> {weather.temp_max}°C </h3>
                        </div>
                        <div>
                            <p>Humidity </p>
                            <h3> {weather.humidity}% </h3>
                        </div>
                    </Grid>
                )}
            </WeatherContainer>
        </PageContainer>
    );
};

export default App;
