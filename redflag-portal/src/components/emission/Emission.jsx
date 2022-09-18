import Sidebar from '../sidebar/Sidebar'
import './emission.scss'
import cities from '../../Data/cities.json'
import { useEffect, useState } from 'react'



// const Emission = () => {

//   const [distance, setDistance] = useState(0)
//   const [response, setResponse] = useState([])
//   // const [response, setResponse] = useState([])
//   const [homeCoords, setHomeCoords] = useState({ lon: 0, lat: 0 })
//   const [workCoords, setWorkCoords] = useState({ lon: 0, lat: 0 })

//   const [homeLocation, setHomeLocation] = useState('-105.044052,40.5417839')
//   const [workLocation, setWorkLocation] = useState('-105.434219,41.233714')


//   const url = `https://api.mapbox.com/directions-matrix/v1/mapbox/driving/${homeLocation};${workLocation}?sources=0&access_token=pk.eyJ1Ijoic3ByaXRhbiIsImEiOiJjbDd1dGFubTUwNTJ0M3lsaGY1bGNkZ2NsIn0.jWWLPs5fevoroG-O_yAV7g`

//   useEffect(() => {
//     response && response.map(place=>{
//       setDistance(distance + place.distance)
//     })
//   }, [response])



//   const handleHomeLocation = (e) => {
//     setHomeLocation(e.target.value)
//   }

//   const handleWorkLocation = (e) => {
//     setWorkLocation(e.target.value)
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     fetch(url).then(res => res.json()).then((response) => {
//       setResponse(response.destinations)
//     })
//   }

//   const handleCheck = () => {
//     console.log(distance)
//   }


//   return (
//     <>
//       <Sidebar />
//       <div className='emission'>
//         {/* https://api.mapbox.com/directions-matrix/v1/mapbox/driving/-105.044052,40.5417839;-105.434219,41.233714?sources=0&access_token=xyz */}
//         <div className="content">
//           <form className="form">
//             <div className="title">
//               <h1>Check your climate impact!!</h1>
//               <p>Select locations to get started.</p>
//             </div>
//           <div className="inputBox">
//             <input type="text" placeholder='homeCoordinate' value={homeLocation} onChange={handleHomeLocation} />
//             <input type="text" placeholder='homeCoordinate' value={workLocation} onChange={handleWorkLocation}/>
//           </div>


//             <div className="next-button">
//             </div>
//           </form>
//               <button className="next" value="submit" onSubmit={handleSubmit}>Lets Start!</button>

//           <div className="checkResult" onClick={handleCheck}>
//             CheckResults
//           </div>

//         </div>
//       </div>
//     </>
//   )
// }

// export default Emission




const Emission = () => {


  
  const [homeLocation, setHomeLocation] = useState('-105.044052,40.5417839')
  const [workLocation, setWorkLocation] = useState('-105.434219,41.233714')
  
  const handleHomeChange = (e) => {
    setHomeLocation(e.target.value)
  }
  
  const handleWorkChange = (e) => {
    setWorkLocation(e.target.value)
  }
  
  const url = `https://api.mapbox.com/directions-matrix/v1/mapbox/driving/${homeLocation};${workLocation}?sources=0&access_token=pk.eyJ1Ijoic3ByaXRhbiIsImEiOiJjbDd1dGFubTUwNTJ0M3lsaGY1bGNkZ2NsIn0.jWWLPs5fevoroG-O_yAV7g`

  return (
    <>
      <Sidebar />
      <div className='emission'>

        <form class="search-form">
          <div class="input-container">
            <input type="text" class="search" placeholder="Home City or State" value={homeLocation} onChange={handleHomeChange} />
            <svg class="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
              <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
            </svg>
          </div>
          <div class="suggestions">
            <ul class="suggestions__list">
              <li>Filter for a city</li>
              <li>or a state</li>
            </ul>
          </div>
        </form>

        <form class="search-form">
          <div class="input-container">
            <input type="text" class="search" placeholder="Work City or State" value={homeLocation} onChange={handleWorkChange} />
            <svg class="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
              <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
            </svg>
          </div>
          <div class="suggestions">
            <ul class="suggestions__list">
              <li>Filter for a city</li>
              <li>or a state</li>
            </ul>
          </div>
        </form>
        <div className="btn">Calculate Value</div>
      </div>
    </>
  )
}

export default Emission