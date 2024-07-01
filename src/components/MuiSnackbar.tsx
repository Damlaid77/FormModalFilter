import { Alert, AlertProps, Button, Snackbar, Stack } from '@mui/material'
import React, { forwardRef, useState } from 'react'

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
    function SnackbarAlert(props, ref) {
        return <Alert elevation={6} ref={ref} {...props} />
    }
)

export const MuiSnackbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return
        }
        setIsOpen(false)
    }
  return (
    <>
        <Button onClick={() => setIsOpen(true)}>Submit</Button>
        <Snackbar 
            message='Form submit successfully!'
            autoHideDuration={4000}
            open={isOpen}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center'
            }}
        />
        <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
            <SnackbarAlert onClose={handleClose} severity='success'>
                Form sub successfully!
            </SnackbarAlert>
        </Snackbar>
    </>
  )
}
