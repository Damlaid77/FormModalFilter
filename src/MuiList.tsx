import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import MailIcon from '@mui/icons-material/Mail'

export const MuiList = () => {
  return (
    <Box sx={{width: '400px', bgcolor: '#ffffff'}}>
        <List>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemAvatar>
                            <Avatar>
                                <MailIcon/>
                            </Avatar>
                        </ListItemAvatar>
                    </ListItemIcon>
                    <ListItemText primary='List item 1' secondary='Secondary text'/>
                </ListItemButton>
            </ListItem>
            <Divider/>
            <ListItem>
                <ListItemIcon>
                <ListItemAvatar>
                        <Avatar>
                            <MailIcon/>
                        </Avatar>
                    </ListItemAvatar>
                </ListItemIcon>
                <ListItemText primary='List item 2'/>
            </ListItem>
            <Divider/>
            <ListItem>
                <ListItemIcon>
                <ListItemAvatar>
                        <Avatar>
                            <MailIcon/>
                        </Avatar>
                    </ListItemAvatar>
                </ListItemIcon>
                <ListItemText primary='List item 3'/>
            </ListItem>
        </List>
    </Box>
  )
}
