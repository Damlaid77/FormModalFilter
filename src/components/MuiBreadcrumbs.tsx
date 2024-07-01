import { Box, Breadcrumbs, Link, Typography } from '@mui/material'
import React from 'react'

export const MuiBreadcrumbs = () => {
  return (
    <Box m={2}>
        <Breadcrumbs aria-label='breadcrumb' separator='>' maxItems={8}>
            <Link underline='hover' href='#'>Home</Link>
            <Link underline='hover' href='#'>Catalog</Link>
            <Link underline='hover' href='#'>Accessories</Link>
            <Typography color='text.primary'>Shoes</Typography>
        </Breadcrumbs>
    </Box>
  )
}
