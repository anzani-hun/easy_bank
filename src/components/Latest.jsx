import React, { useEffect, useState } from 'react'

// API FETCHELÉSE ez fontos
const Latest = () => {
  const [apiData, setApiData] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/latest.json")
      .then(res => res.json())
      .then(data => setApiData(data))
  }, [])

  return (
    <section id="latest">
      <div className="wrapper">
        <h2>Latest</h2>
        <div className="cards">

        { apiData.map(data => <div>{data.title}</div>) }

        </div>

      </div>
    </section>
  )
}

export default Latest