import React from 'react'
import Navbar from '../components/Navbar';
import "../style/Home.css"
import MainDiscover from '../components/MainDiscover';

function Discover() {
  return (
    <>
      <header>
        {Navbar}
      </header>
      <div>
        {MainDiscover}
      </div>
    </>
  )
}

export default Discover