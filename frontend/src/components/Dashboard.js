import React from 'react'
import { useSelector } from "react-redux"
import SearchComponent from './SearchComponent';
import SearchModal from './SearchModal';
import EndorseModal from './Modal';
import "../styles/Dashboard.css";


function Dashboard() {

  let data = useSelector((state) => state.api.apiData)
  console.log(data);
  

  return (
    <div className='dashboard-container'>
      <div className='dashboard-heading'>
        <h1>Background Verification</h1>
      </div>
      <div className='dashboard-welcome'>
        <h2>Hello {data.username}, Welcome to the dashboard</h2>
      </div>
      <div className='dashboard-buttons'> 
        <EndorseModal></EndorseModal>
        <SearchModal></SearchModal>
      </div>
      
      <SearchComponent></SearchComponent> 
      
    </div>
  )
}

export default Dashboard