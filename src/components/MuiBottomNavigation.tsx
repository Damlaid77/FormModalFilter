import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonIcon from '@mui/icons-material/Person'

export const MuiBottomNavigation = () => {
    const [value, setValue] = useState(0)
  return (
    <BottomNavigation 
        sx={{position:'absolute', width:'100%', bottom: 0}}
        value={value}
        onChange={(event, newValue) => {
            setValue(newValue)
        }}
        showLabels
    >
        <BottomNavigationAction label='Home' icon={<HomeIcon/>}/>
        <BottomNavigationAction label='Favorites' icon={<FavoriteIcon/>}/>
        <BottomNavigationAction label='Profile' icon={<PersonIcon/>}/>
    </BottomNavigation>
  )
}
