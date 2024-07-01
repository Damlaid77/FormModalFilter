import { Badge, Stack } from '@mui/material'
import React from 'react'
import MailIcon from '@mui/icons-material/Mail'

export const MuiBadge = () => {
  return (
    <Stack spacing={2} direction='row'>
        <Badge badgeContent={5} color='primary'>
            <MailIcon/>
        </Badge>
        <Badge badgeContent={0} color='primary' showZero>
            <MailIcon/>
        </Badge>
        <Badge badgeContent={77} color='primary' max={10000}>
            <MailIcon/>
        </Badge>
        <Badge variant='dot' color='primary' invisible={true}>
            <MailIcon/>
        </Badge>
    </Stack>
  )
}
