import { ChangeEvent, useState } from "react";
import { countries } from "../data/countries";
import styles from './Form.module.css'
import { SearchType } from "../types";

export default function Form() {

    const [ search, setSearch ] = useState<SearchType>({
        city: '',
        country: ''
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

  return (
    <form className={styles.form}>
        <div className={styles.field}>
            <label htmlFor="city">City: </label>
            <input 
                type="text" 
                name="city" 
                id="city" 
                placeholder="City Name" 
                value={search.city}
                onChange={ handleChange }
            />
        </div>

        <div className={styles.field}>
            <label htmlFor="country">Country: </label>
            <select 
                name="country" 
                id="country"
                value={search.country}
                onChange={ handleChange }
            >
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
