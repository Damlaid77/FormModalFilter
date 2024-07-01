import { Avatar, Box, Skeleton, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

export const MuiSkeleton = () => {
const [loading, setLoading] = useState(true)

useEffect(() => {
    setTimeout(() => {
        setLoading(false)
    }, 3000)
}, [])
  return (
    <Box sx={{ width: '250px'}}>
        {
            loading ? 
                <Skeleton variant='rectangular' width={250} height={144} animation='wave'/>
                : 
                <img
                    src='https://get.wallhere.com/photo/sunlight-landscape-mountains-sea-lake-water-rock-nature-reflection-sky-photography-clouds-calm-ice-snowy-peak-morning-coast-horizon-Canada-Arctic-Banff-National-Park-Terrain-cloud-mountain-ocean-wave-atmospheric-phenomenon-computer-wallpaper-landform-wind-wave-mountain-range-meteorological-phenomenon-29288.jpg'
                    alt='Img'
                    width={256}
                    height={144}
                />
        }
        <Stack direction='row' spacing={1}
            sx={{ width: '100%', marginTop: '12px'}}
        >
            {
                loading ?
                    <Skeleton
                        variant='circular'
                        width={40}
                        height={40}
                        animation='wave'
                    />
                    :
                    <Avatar>V</Avatar>
            }
        <Stack sx={{ width: '80%'}}>
            {
                loading ?
                    <>
                        <Typography variant='body1'>
                            <Skeleton variant='text' width='100%' animation='wave'/>
                        </Typography>
                        <Typography variant='body1'>
                            <Skeleton variant='text' width='100%' animation='wave'/>
                        </Typography>
                    </>
                    :
                    <>
                        <Typography variant='body1'>React MUI Tutorial</Typography>
                    </>
            }
        </Stack>
        </Stack>
    </Box>
  )
}
