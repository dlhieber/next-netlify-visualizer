import { BarChart, Tooltip, Bar, Legend, CartesianGrid, XAxis, YAxis, Treemap } from 'recharts';
import { Button, MenuItem, H1 as H2 } from "@blueprintjs/core";
import { Select } from "@blueprintjs/select";
import { ItemRenderer } from "@blueprintjs/select";
import { useState, useEffect } from "react"
import { resolveHref } from 'next/dist/next-server/lib/router/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  const [voteData, setVoteData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [sentimentedConcepts, setSentimentedConcepts] = useState([]);
  const [sentimentedEntities, setSentimentedEntities] = useState([]);
  const [topicConcepts, settopicConcepts] = useState([]);
  const [topicEntities, settopicEntities] = useState([]);

  const [billIDText, setbillIDText] = useState('');
  const [summary, setSummary] = useState('')
  const [billTitle, setbillTitle] = useState('');
  const [billIDList, setbillIDList] = useState({ 'value': [] });
  const COLORS = ['#8889DD', '#9597E4', '#8DC77B'];


  const getBill = (e) => {
    e.preventDefault();
    console.log('Getting /data/' + e.target[0].value + '.json')
    fetch('/data/' + e.target[0].value + '.json')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setbillIDText((billid) => billid = +e.target[0].value)
        setbillTitle(data.BillTitle)
        setSummary(data.summary)


        let initialPartyList = [...new Set(data.votes.map(vote => vote.CaucusShortName))];
        let voteTallies = []

        initialPartyList.forEach((party) => {
          voteTallies.push({ partyName: party, yeaVote: 0, nayVote: 0 })

        })
        data.votes.forEach(vote => {
          if (vote.IsVoteNay == "true") {
            voteTallies.forEach(tally => {
              if (tally.partyName === vote.CaucusShortName) {
                tally.nayVote++
              }
            })

          }
          if (vote.IsVoteYea == "true") {
            voteTallies.forEach(tally => {
              if (tally.partyName === vote.CaucusShortName) {
                tally.yeaVote++
              }
            })
          }

        })                                                                
        setVoteData(voteTallies)

      })


      .catch((error) => {
        aToast(`Error occured Bill ID "${e.target[0].value}"`)
        console.log(error)
        console.log(`Error with ${e.target[0].value}`)
      })
  }


  useEffect(() => {
    //setVoteData(testVoteData)
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

    <H2 >
      Bill ID: {billIDText}
    </H2>
    <H2>
      {billTitle}
    </H2>
    <p>
      {summary}
    </p>
    <BarChart width={730} height={250} data={voteData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="partyName" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="yeaVote" fill="#8884d8" />
      <Bar dataKey="nayVote" fill="#82ca9d" />
    </BarChart>

    <BarChart width={730} height={250} data={voteData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="partyName" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="yeaVote" fill="#8884d8" />
      <Bar dataKey="nayVote" fill="#82ca9d" />
    </BarChart>

    <BarChart width={730} height={250} data={voteData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="partyName" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="yeaVote" fill="#8884d8" />
      <Bar dataKey="nayVote" fill="#82ca9d" />
    </BarChart>

    <BarChart width={730} height={250} data={voteData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="partyName" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="yeaVote" fill="#8884d8" />
      <Bar dataKey="nayVote" fill="#82ca9d" />
    </BarChart>

    <BarChart width={730} height={250} data={voteData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="partyName" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="yeaVote" fill="#8884d8" />
      <Bar dataKey="nayVote" fill="#82ca9d" />
    </BarChart>
    
  </>


}

export default BillChart