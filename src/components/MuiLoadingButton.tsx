import { LoadingButton } from '@mui/lab'
import { Stack } from '@mui/material'
import React from 'react'
import SaveIcon from '@mui/icons-material/Save'

export const MuiLoadingButton = () => {
  return (
    <Stack spacing={2} direction='row'>
        <LoadingButton loading variant='outlined'>Submit</LoadingButton>
        <LoadingButton 
            loading 
            variant='outlined'
            loadingPosition='start'
            startIcon={<SaveIcon/>}
        >
            Save
        </LoadingButton>
    </Stack>
  )
}
