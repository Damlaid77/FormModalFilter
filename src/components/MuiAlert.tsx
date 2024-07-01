import { Alert, AlertTitle, Button, Stack } from '@mui/material'
import React from 'react'
import CheckIcon from '@mui/icons-material/Check'

export const MuiAlert = () => {
  return (
    <Stack spacing={2}>
        <Alert severity='error'>Tis is an error</Alert>
        <Alert severity='info'>Tis is an info</Alert>
        <Alert severity='success'>Tis is an success</Alert>
        <Alert severity='warning'>Tis is an warning</Alert>

        <Alert variant='outlined' severity='error'>Tis is an error</Alert>
        <Alert variant='outlined' severity='info'>Tis is an info</Alert>
        <Alert variant='outlined' severity='success'>Tis is an success</Alert>
        <Alert variant='outlined' severity='warning'>Tis is an warning</Alert>

        <Alert variant='filled' severity='error'
            onClose={() => alert('close')}
        >
            <AlertTitle>Error</AlertTitle>
            Tis is an error
        </Alert>
        <Alert variant='filled' severity='info'>Tis is an info</Alert>
        <Alert variant='filled' severity='success'>Tis is an success</Alert>
        <Alert variant='filled' severity='warning'
            icon={<CheckIcon fontSize='inherit'/>}
            action={
                <Button color='inherit' size='small'>
                    UNDO
                </Button>
            }
        >
            Tis is an warning
        </Alert>
    </Stack>
  )
}
