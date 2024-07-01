import { CircularProgress, LinearProgress, Stack } from '@mui/material'
import React from 'react'

export const MuiProgress = () => {
  return (
    <Stack spacing={2}>
        <CircularProgress color='success' variant='determinate' value={60}/>

        <LinearProgress/>
    </Stack>
  )
}
