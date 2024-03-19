export default function ButtonsCreateChart({
  debugValue,
  items,
  triggerFetch,
}) {
  const handleCleanChange = (event) => {
    console.log('Set default values for filters & facets', event)
  }
  const handleSearchChange = (event) => {
    console.log('Request data, draw chart', event)
    console.log('values: ', debugValue) // TODO Used for debug
  }

  return (
    <>
      <span>
        <button
          type="button"
          className="rounded-l-md ring-inset ring-1 ring-gray-400 px-3 py-2 text-sm font-semibold"
          onClick={handleCleanChange}
        >
          Clear
        </button>
        <button
          type="button"
          className="ml-[-1px] rounded-r-md ring-inset ring-1 ring-gray-400 px-3 py-2 text-sm font-semibold"
          onClick={() => {
            handleSearchChange()
            triggerFetch()
          }}
        >
          Search
        </button>
      </span>
    </>
  )
}
// --tw-shadow: 0 0 #0000;
