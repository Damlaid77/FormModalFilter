import { Avatar, AvatarGroup, Stack } from '@mui/material'
import React from 'react'

export const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={1}>
            <Avatar sx={{bgcolor: 'primary.light'}}>BW</Avatar>
            <Avatar sx={{bgcolor: 'success.light'}}>CK</Avatar>
        </Stack>
        <Stack direction='row' spacing={1}>
            <AvatarGroup max={3}>
            <Avatar sx={{bgcolor: 'primary.light'}}>BW</Avatar>
                <Avatar sx={{bgcolor: 'success.light'}}>CK</Avatar>
                <Avatar src='' alt='person'/>
                <Avatar src='' alt='person'/>
            </AvatarGroup>
        </Stack>
        <Stack direction='row' spacing={1}>
            <Avatar sx={{bgcolor: 'primary.light', width:48, height:48}}>BW</Avatar>
            <Avatar variant='square' sx={{bgcolor: 'success.light'}}>CK</Avatar>
        </Stack>
    </Stack>
  )
}
