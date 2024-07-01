import React, { useState } from 'react'
import { Rating, Stack } from '@mui/material'

export const MuiRating = () => {
    const [value, setValue] = useState<number | null>(3)
    const handleChange = (_event: React.ChangeEvent<{}>, newValue: number | null) => {
        setValue(newValue)
    }
  return (
    <Stack spacing={2}>
        <Rating 
            value={value} 
            onChange={handleChange} 
            precision={0.5}
            // readOnly
            // icon={<Icon78643 fontSize='inherit'/>}
            // emptyIcon={<Icon78643 fontSize='inherit'/>}
            highlightSelectedOnly
        />
    </Stack>
  )
}
