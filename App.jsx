import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './Layout'
import { Home } from './pages/home'
import { Features } from './pages/features'
import { BarChart } from './pages/barchart'

import './App.css'

function App() {
  // TODO: Might not be the best to have this one here, maybe it's better to pull from the current constants list
  const placeHolder = { name: 'All' }
  const [quarterValue, setQuarter] = useState(placeHolder)
  const [platformValue, setPlatform] = useState(placeHolder)
  const [sentimentValue, setSentiment] = useState(placeHolder)

  const dropdownState = {
    quarterValue,
    setQuarter,
    platformValue,
    setPlatform,
    sentimentValue,
    setSentiment,
  }

  const dropdownSelectedValues = {
    quarterValue,
    platformValue,
    sentimentValue,
  }

  // State to trigger data fetching
  const [fetchTrigger, setFetchTrigger] = useState(0)

  // Increment to trigger useEffect in DataFetcher
  const triggerFetch = () => {
    setFetchTrigger((prev) => prev + 1)
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              dropdownSetters={dropdownState}
              triggerFetch={triggerFetch}
            />
          }
        >
          <Route index element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route
            path="/barchart"
            element={
              <BarChart
                dropdownGetters={dropdownSelectedValues}
                fetchTrigger={fetchTrigger}
              />
            }
          />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
