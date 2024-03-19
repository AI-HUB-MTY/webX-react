import { useState } from 'react'
import { Datepicker } from 'flowbite-react'

export default function DatePickerTest({ label }) {
  // const [date, setDate] = useState(defaultValue)

  // const handleChange = (event) => {
  //   const value = event.target.value
  //   setDate(value)
  // }

  // console.log('default value', defaultValue)

  return (
    <div className="relative mt-1">
      <div className="text-left text-sm pl-10">{label}</div>
      <Datepicker
        className='p-0'
        labelTodayButton="Today"
        labelClearButton="Clean"
        // onChange={handleChange}
        // value={date}
      />
    </div>
  )
}
