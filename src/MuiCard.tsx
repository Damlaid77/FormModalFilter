import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

export const MuiCard = () => {
  return (
    <Box width='300px'>
        <Card>
            <CardMedia 
                component='img'
                height='140'
                image='https://source.unsplash.com/random'
                alt='unsplash imag'
            />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    React
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                React React React
                React React React
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small' variant='contained'>
                    Share
                </Button>
                <Button size='small'>
                    Learn more
                </Button>
            </CardActions>
        </Card>
    </Box>
  )
}
