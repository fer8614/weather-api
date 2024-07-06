import { countries } from "../data/countries";
import styles from './Form.module.css'

export default function Form() {
  return (
    <form className={styles.form}>
        <div className={styles.field}>
            <label htmlFor="city">City: </label>
            <input type="text" name="city" id="city" placeholder="City Name" />
        </div>

        <div className={styles.field}>
            <label htmlFor="country">Country: </label>
            <select name="country" id="">
                <option value="">-- Select a country --</option>
                {countries.map((country) => (
                    <option 
                        key={country.code}
                        value={country.code}
                    >
                        { country.name }
                    </option>
                ))}
            </select>
        </div>

        <input className={styles.submit} type="submit" value='Check weather'/>
    </form>
  )
}
