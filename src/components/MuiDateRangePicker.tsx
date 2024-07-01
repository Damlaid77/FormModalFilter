import { DateRange } from '@mui/lab'
import { Box } from '@mui/material'
import React, { useState } from 'react'
import { DateRangePicker } from '@mui/x-date-pickers-pro';


export const MuiDateRangePicker = () => {
    const [value, setValue] = useState<DateRange<Date>>([null, null])
  return (
    <Box width='500px'>
        <DateRangePicker
            
            
            value={value}
            onChange={(newValue) => {
                setValue(newValue)
            }}
        />
    </Box>
  )
}
