import { Box } from '@mui/material'
import React from 'react'

export const MuiResponsiveness = () => {
  return (
    <Box
        sx={{
            height: '300px',
            width: {
                xs: 100, //0
                sm: 200, //600
                md: 300, //900
                lg: 400, //1200
                xl: 500, //1536
            },
            bgcolor: 'primary.main'
        }}
    >

    </Box>
  )
}
