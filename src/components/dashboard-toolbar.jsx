import { useState } from 'react'
import Dropdown from './dropdown'
import DateRangePicker from './date-range-picker'
import DatePickerTest from './date-range-picker-test'
import ButtonsCreateChart from './buttons-create-chart'

// TODO: Move into constants file
const quarters = [
  { name: 'All' },
  { name: 'Q1' },
  { name: 'Q2' },
  { name: 'Q3' },
  { name: 'Q4' },
]

const platforms = [
  { name: 'All' },
  { name: 'iOS' },
  { name: 'Android' },
  { name: 'Web' },
  { name: 'Medallia' },
]

const sentiments = [
  { name: 'All' },
  { name: 'Positive' },
  { name: 'Neutral' },
  { name: 'Negative' },
]

const dropdowLabels = {
  quarterLabel: 'Select a Quarter',
  platformLabel: 'Select a Platform',
  sentimentLabel: 'Select a Sentiment',
}

// Options to pick values from elements and use it for drawing the chart
// a. Lift state. State for the components can live here instead of inside elements
// b. Get the element by class or id, and then reading its value
// c. Use context API?
// Seems like doing b can be more straightforward although not as clean.

export default function DashboardToolbar({ dropdownSetters, triggerFetch }) {
  // const [quarterValue, setQuarter] = useState(quarters[0])
  // const [platformValue, setPlatform] = useState(platforms[0])
  // const [sentimentValue, setSentiment] = useState(sentiments[0])

  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          {/* <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1> */}
          <div className="flex gap-x-5">
            {/* <DateRangePicker /> */}
            <DatePickerTest label={'Select date start'} />
            <DatePickerTest label={'Select date end'} />
            <Dropdown
              items={quarters}
              label={dropdowLabels.quarterLabel}
              selectedValue={dropdownSetters.quarterValue}
              setValue={dropdownSetters.setQuarter}
            />
            {/* <Dropdown items={quarters} label={dropdowLabels.quarterLabel} /> */}
            <Dropdown
              items={platforms}
              label={dropdowLabels.platformLabel}
              selectedValue={dropdownSetters.platformValue}
              setValue={dropdownSetters.setPlatform}
            />
            <Dropdown
              items={sentiments}
              label={dropdowLabels.sentimentLabel}
              selectedValue={dropdownSetters.sentimentValue}
              setValue={dropdownSetters.setSentiment}
            />
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 pt-1 pb-7 sm:px-6 lg:px-8">
          <div className="flex ml-auto w-40 justify-center rounded-md">
            <ButtonsCreateChart
              debugValue={dropdownSetters.sentimentValue}
              triggerFetch={triggerFetch}
            />
          </div>
        </div>
      </header>
    </>
  )
}
