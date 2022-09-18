import React, { useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import './chart.scss'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
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
import data from '../../Data/tropical nights/zurich.json'

const Chart = () => {
    const [city, setCity] = useState('ZÜRICH')

    const [parameter, setParameter] = React.useState('');

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
                <FormGroup className='checkbox'>
                    <FormControlLabel control={<Checkbox onChange={e => setCity('Zurich')} className='boxes' defaultChecked />} label="ZÜRICH" />
                    <FormControlLabel control={<Checkbox onChange={e => setCity('Geneva')} className='boxes' />} label="GENEVA" />

                    <FormControlLabel control={<Checkbox onChange={e => setCity('Lucerene')} className='boxes' />} label="LUCERNE" />
                    <FormControlLabel control={<Checkbox onChange={e => setCity('Winterthur')} className='boxes' />} label="WINTERTHUR" />
                    <FormControlLabel control={<Checkbox onChange={e => setCity('Basel')} className='boxes' />} label="BASEL" />
                    <FormControlLabel control={<Checkbox onChange={e => setCity('LA CHAUX-DE-FONDS')} className='boxes' />} label="LA CHAUX-DE-FONDS" />
                </FormGroup>

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
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box >

                </div>

                <div className="graph">
                    <LineChart
                        width={800}
                        height={450}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                    >
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}
                        <XAxis dataKey="year" />
                        <YAxis dataKey="value" />
                        <Tooltip />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="value"
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