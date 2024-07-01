import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import { IconButton, Tooltip } from '@mui/material'

export const MuiTooltip = () => {
  return (
    <Tooltip title='Delete' placement='right' arrow
        enterDelay={500}
        leaveDelay={200}
    >
        <IconButton>
            <DeleteIcon/>
        </IconButton>
    </Tooltip>
  )
}
