const API_KEY = "62af1fc936d566dbdf64506c910d6f2f"
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";


const cityInput = document.getElementById('city-input')
const searchBtn = document.getElementById('search-btn')
const weatherDisplay = document.getElementById('weather-display')
const errorMessage = document.getElementById('error-message')


const cityName = document.getElementById('city-name')
const weatherDescription = document.getElementById('weather-description')
const temperature = document.getElementById('temperature')
const humidity = document.getElementById('humidity')
const windSpeed = document.getElementById('wind-speed')
const weatherIcon = document.getElementById('weather-icon')

async function fetchWeather(city){
    try{
        const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);

        if(!response.ok){
            throw new Error("city not found")
        }

        const data = await response.json()
        displayWeather(data)
        console.log(data)
        errorMessage.classList.add("hidden")
        weatherDisplay.classList.remove('hidden')

    } catch(error){
        showError(error.message)
    }
}


function showError(message){
    errorMessage.textContent = message
    errorMessage.classList.remove('hidden')
    weatherDisplay.classList.add('hidden')
}

function displayWeather(data){
    cityName.textContent = `Weather in ${data.name}, ${data.sys.country}`
    weatherDescription.textContent = `Condition: ${data.weather[0].description}`
    temperature.textContent = `Temperature: ${data.main.temp} C `
    humidity.textContent = `Humidity: ${data.main.humidity}`
    windSpeed.textContent = `Wind Speed: ${data.wind.speed}`
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}

searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim()
    
    if(city){
        fetchWeather(city)
        cityInput.value = ''
    } else {
        showError("Please enter a city name")
    }
})