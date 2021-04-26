import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { Button, MenuItem } from "@blueprintjs/core";
import { Select } from "@blueprintjs/select";
import {useState, useEffect} from "react"
const someData = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const updateGraph = (e)=>{
    e.preventDefault();
    fetch('/TestData.json').then((res)=>{
        console.log(res.json())
    })
}
function BillChart(){
      const [data, setData] = useState();
     useEffect((someAttrs)=>{
         setData(someData)
     })
     return <>
         <form onSubmit={updateGraph} >
            <input id="BillID"></input>
            <button type='submit' >Search</button>
         </form>
        <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
          </LineChart>
    </>

    
}

export default BillChart