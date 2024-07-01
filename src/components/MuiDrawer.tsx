import { Box, Drawer, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
export const MuiDrawer = () => {
    const [isDrawerOpen, setisDrawerOpen] = useState(false)
  return (
    <>
        <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='logo'
            onClick={() => setisDrawerOpen(true)}
        >
            <MenuIcon/>
        </IconButton>
        <Drawer anchor='left' 
            open={isDrawerOpen}
            onClose={() => setisDrawerOpen(false)}
        >
            <Box p={2} width='250px' textAlign='center' role='presentation'>
                <Typography variant='h6' component='div'>Side Bar</Typography>
            </Box>
        </Drawer>
    </>
  )
}
