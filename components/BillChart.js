import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { Button, MenuItem, H1 } from "@blueprintjs/core";
import { Select } from "@blueprintjs/select";
import { ItemRenderer } from "@blueprintjs/select";
import { useState, useEffect } from "react"
import { resolveHref } from 'next/dist/next-server/lib/router/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
function BillChart() {
  const aToast = (toastMessage) => toast.error(toastMessage, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  })
  const [voteData, setVoteData] = useState();
  const [billIDText, setbillIDText] = useState('');

  const [billTitle, setbillTitle] = useState('');
  const [billIDList, setbillIDList] = useState({ 'value': [] });
  const getBill = (e) => {
    e.preventDefault();
    console.log('Getting /data/' + e.target[0].value + '.json')
    fetch('/data/' + e.target[0].value + '.json')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setbillIDText((billid) => billid = +e.target[0].value)
        setbillTitle(data.BillTitle)
        
      })


      .catch((error) => {
        aToast(`Invallid Bill ID "${e.target[0].value}"`)
        console.log(error)
        console.log(`Error with ${e.target[0].value}`)
      })
  }


  useEffect(() => {
    setVoteData(testVoteData)
    fetch('/BillIDs.json').then(res => res.json())
      .then(data => {
        setbillIDList(data)
      })

  }, [])
  return <>
    <form onSubmit={getBill} >
      <input id="BillID"></input>
      <button type='submit' >Search</button>
    </form>

    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover={false}
    />

    <H1 >
      Bill ID: {billIDText}
    </H1>
    <H1>
    Bill Title: {billTitle}
    </H1>
    <LineChart width={600} height={300} data={voteData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
    </LineChart>
  </>


}

export default BillChart