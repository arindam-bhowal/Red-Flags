import React, { useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import './chart.scss'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import zurich from '../../Data/tropical nights/Zurich_tropical_nights_hot_days.json'
import lausanne from '../../Data/tropical nights/Lausanne_tropical_nights_hot_days.json'
import geneva from '../../Data/tropical nights/Geneva_tropical_nights_hot_days.json'
import bern from '../../Data/tropical nights/Bern_tropical_nights_hot_days.json'
import basel from '../../Data/tropical nights/Basel_tropical_nights_hot_days.json'

const Chart = () => {
    const [city, setCity] = useState('zurich')

    const [parameter, setParameter] = useState('value');

    const handleChange = (event) => {
        setParameter(event.target.value);
    };

    return (
        <>
            <Sidebar />
            <div className='charts'>
                <div className="heading">
                    <h2>Graphs</h2>

                    <p>Climate Report for Swiss cities with more than 100,000 residents</p>
                </div>
                <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>

                <div className="select">
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Parameters</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={parameter}
                            label="Age"
                            onChange={handleChange}
                            style={{color: 'white'}}
                        >
                            <MenuItem value="value">Tropical Nights</MenuItem>
                            <MenuItem value="hot days">Hot Days</MenuItem>
                        </Select>
                    </FormControl>
                </Box >

                </div>

                <div className="graph">
                    <LineChart
                        width={800}
                        height={450}
                        data={zurich}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                    >
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}
                        <XAxis dataKey="year" />
                        <YAxis dataKey={parameter} />
                        <Tooltip />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey={parameter}
                            stroke="#8884d8"
                            activeDot={{ r: 8 }}
                        />
                    </LineChart>
                </div>
            </div>
        </>
    )
}

export default Chart