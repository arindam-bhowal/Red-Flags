import './emission.scss'
import Sidebar from '../sidebar/Sidebar'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Emission = () => {

    // const [response, setResponse] = useState([])

    const url = 'https://api.mapbox.com/directions-matrix/v1/mapbox/driving/-105.044052,40.5417839;-105.434219,41.233714?sources=0&access_token=pk.eyJ1Ijoic3ByaXRhbiIsImEiOiJjbDd1dGFubTUwNTJ0M3lsaGY1bGNkZ2NsIn0.jWWLPs5fevoroG-O_yAV7g'

    useEffect(() => {
         fetch(url).then(res => res.json()).then((response)=>{
            console.log(response)
         })
    }, [])


    return (
        <>
            <Sidebar />
            <div className='emission'>
                {/* https://api.mapbox.com/directions-matrix/v1/mapbox/driving/-105.044052,40.5417839;-105.434219,41.233714?sources=0&access_token=xyz */}
                <div class ="content">
    <form class="form">
    <div class ="title">
      <h1>Book a Flight</h1>
        <p>Select locations and dates to get started.</p>
    </div>
    <div class="progress">
      <p>Step 1 of 3</p>
    <div class="progress-bar">
      <div class="bar-pink">
        <p>33%</p>
      </div>
     </div>
    </div>
    <div class ="categories">
      <button class="flights button">Flights</button>
      <button class="Hotels button">Hotels</button>
      <button class ="Packages button">Packages</button>
    </div>
   <div class="row1">
    <div class="locations from-location1">
     <label class="from-location2" htmlFor="from">From:</label>
      <select class="from">
        <option value="England">Australia</option>
        <option value="England">Asgard</option>
        <option value="England">Brazil</option>
        <option value="England">Burma</option>
        <option value="England">Burundi</option>
        <option value="England">China</option>
        <option value="England">Congo</option>
        <option value="England">Dominican Republic</option>
        <option value="England">England</option>
        <option value="England">El Salvador</option>
        <option value="England">Ethiopia</option>
        <option value="India">India</option>
        <option value="England">Iraq</option>
        <option value="Italy">Italy</option>
        <option value="England">Japan</option>
        <option value="England">Russia</option>
        <option value="England">Somalia</option>
        <option value="England">Syria</option>
        <option value="United States">United States</option>
        <option value="England">Yemen</option>
        <option value="Wakanda">Wakanda</option>
      </select>
    </div>
    <div class="locations to-location1">
      <label class="to-location2" htmlFor="to">To:</label>
      <select class="to">
       <option value="England">Australia</option>
        <option value="England">Asgard</option>
        <option value="England">Brazil</option>
        <option value="England">Burma</option>
        <option value="England">Burundi</option>
        <option value="England">China</option>
        <option value="England">Congo</option>
        <option value="England">Dominican Republic</option>
        <option value="England">England</option>
        <option value="England">El Salvador</option>
        <option value="England">Ethiopia</option>
        <option value="India">India</option>
        <option value="England">Iraq</option>
        <option value="Italy">Italy</option>
        <option value="England">Japan</option>
        <option value="England">Russia</option>
        <option value="England">Somalia</option>
        <option value="England">Syria</option>
        <option value="United States">United States</option>
        <option value="England">Yemen</option>
        <option value="Wakanda">Wakanda</option>
      </select>
    </div>
  </div>
    <div class="row2">
      <div class="dates depart">
        <label class="depart-date" htmlFor="depart">Depart:</label>
        <input class="departure-date" type="date"></input>
      </div>
      <div class="dates return">
        <label class="returning-date" htmlFor="return">Return:</label>
        <input class="return-date" type="date"></input>     
      </div>
    </div>
    <div class="next-button">
    <button class="next" value="submit">Let's Fly!</button>
      </div>
    </form>
  </div>
            </div>
        </>
    )
}

export default Emission