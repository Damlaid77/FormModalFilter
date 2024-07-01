import React, { useState } from 'react'
import { Stack, TextField, InputAdornment } from '@mui/material'

export const MuiTextField = () => {
    const [value, setValue] = useState('')
  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={2}>
            <TextField label='Name' variant='standard'/>
            <TextField label='Name' variant='outlined'/>
            <TextField label='Name' variant='filled'/>
        </Stack>
        <Stack spacing={2} direction='row'>
            <TextField label='Form Input' size='small' color='secondary'/>
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField 
                label='Farm Input' 
                value={value} 
                onChange={e => setValue(e.target.value)}
                required 
                error={!value}
                helperText={!value ? 'Required' : 'Do not share'}
            /> 
            <TextField 
                label='Farm Input' 
                helperText='Do not share'
                type='password'
                disabled
            /> 
            <TextField label='Read only' InputProps={{readOnly: true}}/> 
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField 
                label='Amount'
                InputProps={{
                    startAdornment: <InputAdornment position='start'>$</InputAdornment>
                }}
            />
            <TextField 
                label='Weight'
                InputProps={{
                    endAdornment: <InputAdornment position='end'>kg</InputAdornment>
                }}
            />
        </Stack>
    </Stack>
  )
}
