import styles from './App.module.css'
import Form from './components/Form/Form'
import WeatherDetail from './components/WeatherDetail/WeatherDetail'
import useWeather from './hooks/useWeather'

function App() {

  const { weather, fetchWeather, asWeatherData } = useWeather()

  return (
    <>
      <h1 className={styles.title}>Weather Finder</h1>

      <div className={styles.container}>
        <Form 
          fetchWeather={fetchWeather}
        />

        { asWeatherData && <WeatherDetail 
            weather={weather}
          />
        }
      </div>
    </>
  )
}

export default App
