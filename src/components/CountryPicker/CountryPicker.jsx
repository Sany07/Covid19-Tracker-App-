import React, { useState, useEffect } from 'react';
import { fetchCountryData } from '../../api';



const CountryPicker = ({ handleCountryChange }) => {

    const [ countries , setCountryData] = useState([])    

    useEffect(()=>{
     
        const fetchCountryDataApi = async () =>{

            setCountryData(await fetchCountryData());

        }
            fetchCountryDataApi();
    },[setCountryData])
   
    return (
        <div className="col-lg-6 mx-auto text-center m-5">
            <select className="custom-select custom-select-lg mb-3" defaultValue="" onChange={(e) => { handleCountryChange(e.target.value)}}>
                <option value="">Global</option>
                {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </select>
        </div>
    )
}

export default CountryPicker