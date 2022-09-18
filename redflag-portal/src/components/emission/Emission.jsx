import './emission.scss'
import Sidebar from '../sidebar/Sidebar'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Emission = () => {

    const [response, setResponse] = useState([])

    const url = 'https://api.mapbox.com/directions-matrix/v1/mapbox/driving/-105.044052,40.5417839;-105.434219,41.233714?sources=0&access_token=pk.eyJ1Ijoic3ByaXRhbiIsImEiOiJjbDd1dGFubTUwNTJ0M3lsaGY1bGNkZ2NsIn0.jWWLPs5fevoroG-O_yAV7g'

    useEffect(() => {
        
    }, [])


    return (
        <>
            <Sidebar />
            <div className='emission'>
                {/* https://api.mapbox.com/directions-matrix/v1/mapbox/driving/-105.044052,40.5417839;-105.434219,41.233714?sources=0&access_token=xyz */}
            </div>
        </>
    )
}

export default Emission