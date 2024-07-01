import React, { useState } from 'react'
import { Box, TextField, MenuItem } from '@mui/material'

export const MuiSelect = () => {
  // const [country, setCountry] = useState('')
  const [countries, setCountries] = useState<string[]>([])
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setCountries(event.target.value as string)
    const value = event.target.value
    
    setCountries(typeof value === 'string' ? value.split(',') : value) // делаем множ выбор
  }
  console.log(countries);
  
  return (
    <Box width='250px'>
        <TextField 
          label='Select country' 
          select
          value={countries}
          onChange={handleChange}
          fullWidth
          SelectProps={{
            multiple: true
          }}
          size='small'
          color='secondary'
          helperText='Chose your country'
          error
        >
            <MenuItem value='IN'>India</MenuItem>
            <MenuItem value='US'>USA</MenuItem>
            <MenuItem value='AU'>Australia</MenuItem>
        </TextField>
    </Box>
  )
}
