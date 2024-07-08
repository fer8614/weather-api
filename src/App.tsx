import styles from './App.module.css'
import Form from './components/Form/Form'
import Spinner from './components/Spinner/Spinner'
import WeatherDetail from './components/WeatherDetail/WeatherDetail'
import useWeather from './hooks/useWeather'

function App() {

  const { weather, loading, fetchWeather, asWeatherData } = useWeather()

  return (
    <>
      <h1 className={styles.title}>Weather Finder</h1>

      <div className={styles.container}>
        <Form 
          fetchWeather={fetchWeather}
        />

        { loading && <Spinner /> }
        { asWeatherData && <WeatherDetail 
            weather={weather}
          />
        }
      </div>
    </>
  )
}

export default App
