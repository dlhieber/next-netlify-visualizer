import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { Button, MenuItem } from "@blueprintjs/core";
import { Select } from "@blueprintjs/select";
import {  ItemRenderer } from "@blueprintjs/select";
import {useState, useEffect} from "react"
import { resolveHref } from 'next/dist/next-server/lib/router/router';
const testVoteData = [
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


function BillChart(){
      const [voteData, setVoteData] = useState();

      const [billIDList, setbillIDList] = useState({'value':[]});
      const updateVoteGraph = (e)=>{
        e.preventDefault();
        console.log('Getting /data/'+e.target[0].value+'.json')
        fetch('/data/'+e.target[0].value+'.json')
        .then(res=>res.json())
        .then(data => {
          console.log(data)
        })
        
        
        .catch((error)=>{
          console.log(error)
          console.log(`Error with ${e.target[0].value}`)
        })
    }
    
    
     useEffect(()=>{
      setVoteData(testVoteData)
      fetch('/BillIDs.json').then(res=>res.json())
      .then(data => {
        setbillIDList(data)})

     }, [])
     return <>
         <form onSubmit={updateVoteGraph} >
            <input id="BillID"></input>
            <button type='submit' >Search</button>
         </form>
       
        <LineChart width={600} height={300} data={voteData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
          </LineChart>
    </>

    
}

export default BillChart