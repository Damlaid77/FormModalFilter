import { Stack, TextField } from '@mui/material'
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import React, { useState } from 'react'

export const MuiPicker = () => {
    const [selectDate, setSelectDate] = useState<Date | null>(null)
    const [selectedTime, setSelectedTime] = useState<Date | null>(null)
    console.log(selectDate);
    
  return (
    <Stack spacing={4} sx={{ width: '250px'}}>
        <DatePicker 
            label='Date Picker' 
            // renderInput={(params: any) => <TextField {...params} />} 
            value={selectDate}
            onChange={(newValue) => {
                setSelectDate(newValue)
            }}
        />
        <TimePicker 
            label='Time Picker' 
            value={selectDate}
            onChange={(newValue) => {
                setSelectDate(newValue)
            }}
        />
    </Stack>
  )
}
