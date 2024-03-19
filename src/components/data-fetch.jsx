import { useState, useEffect } from 'react'
import axios from 'axios'
import { config } from '../config'

function DataFetch({ dropdownGetters, fetchTrigger }) {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  // TODO: Issue, if you console.log here messages get repeated twice.
  // If you look at the network tab, there's two calls for /reviews, fix that.
  useEffect(() => {
    // Define the function that fetches the data
    const fetchData = async () => {
      try {
        // Make a GET request to the API endpoint
        const response = await axios.get(config.serviceURL)
        // Set the response data to state
        setData(response.data)
        // debug params for url
        console.log('quarterValue: ', dropdownGetters.quarterValue)
        console.log('platformValue: ', dropdownGetters.platformValue)
        console.log('sentimentValue: ', dropdownGetters.sentimentValue)
      } catch (error) {
        // If an error occurs, set the error state
        setError(error)
      } finally {
        // Set the loading state to false
        setIsLoading(false)
      }
    }

    // Call the fetchData function
    fetchData()
  }, [fetchTrigger]) // The empty array ensures this effect runs only once after the initial render

  // Render the component UI
  return (
    <div>
      <h1>Data Fetcher</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error fetching data: {error.message}</p>
      ) : (
        <>
          <div>{config.serviceURL}</div>
          <div>Positive: {data.positive}</div>
          <div>Neutral: {data.neutral}</div>
          <div>Negative: {data.negative}</div>
          <ul>
            {/* TODO: Data safety */}
            {data.reviews.map((item) => (
              <li key={item._id}>{item.customer_comment}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default DataFetch
