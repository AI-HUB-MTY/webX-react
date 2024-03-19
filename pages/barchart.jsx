import DataFetch from '../components/data-fetch'

export function BarChart({ dropdownGetters, fetchTrigger }) {
  return (
    <>
      <h1>Barchart page</h1>
      <DataFetch
        dropdownGetters={dropdownGetters}
        fetchTrigger={fetchTrigger}
      />
    </>
  )
}
