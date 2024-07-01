import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React, { useState } from 'react'

export const MuiDialog = () => {
    const [open, setOpen] = useState<boolean>(false)
  return (
    <>
        <Button onClick={() => setOpen(true)}>
            Open dialog
        </Button>
        <Dialog 
            open={open} 
            aria-labelledby='dialog-title' 
            aria-describedby='dialog-description'
            onClose={() => setOpen(false)}
        >
            <DialogTitle id='dialog-title'>Title</DialogTitle>
            <DialogContent id='dialog-description'>
                <DialogContentText>Are you sure?</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
                <Button onClick={() => setOpen(false)}>Submit</Button>
            </DialogActions>
        </Dialog>
    </>
  )
}
