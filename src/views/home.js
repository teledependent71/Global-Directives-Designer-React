import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Global Directives Designer</title>
        <meta property="og:title" content="Global Directives Designer" />
      </Helmet>
    </div>
  )
}

export default Home
