import React, { useState } from 'react'
import { Stack, Button, IconButton, ButtonGroup, 
    ToggleButton, ToggleButtonGroup
 } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'
import { log } from 'console';


export const MuiButton = () => {
    const [formats, setFormats] = useState<string | null>(null)
    console.log(formats);
    
    const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string | null) => {
        setFormats(updatedFormats)
    }
  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction='row'>
            <Button 
                variant='text' 
                href='https://google.com'
            >
                Text
            </Button>
            <Button variant='contained'>Text</Button>
            <Button variant='outlined'>Text</Button>
        </Stack>
        <Stack spacing={2} direction='row'>
            <Button variant='contained' color='primary'>Primary</Button>
            <Button variant='contained' color='secondary'>Secondary</Button>
            <Button variant='contained' color='error'>Error</Button>
            <Button variant='contained' color='warning'>Warning</Button>
            <Button variant='contained' color='info'>Info</Button>
            <Button variant='contained' color='success'>Success</Button>
        </Stack>
        <Stack display='block' spacing={2} direction='row'>
             <Button variant='contained' size='small'>Small</Button>
             <Button variant='contained' size='medium'>Medium</Button>
             <Button variant='contained' size='large'>Large</Button>
        </Stack>
        <Stack spacing={2} direction='row'>
            <Button variant='contained'
                disableRipple 
                startIcon={<SendIcon/>}>Send</Button>
            <Button 
                variant='contained' 
                endIcon={<SendIcon/>}
                disableElevation
                onClick={() => alert('Click')}
            >
                Send
            </Button>
            <IconButton aria-label='send' color='success' size='small'>
                <SendIcon/>
            </IconButton>
        </Stack>
        <Stack direction='row'>
            <ButtonGroup variant='contained' orientation='vertical'
                size='small' color='secondary'
                aria-label='alignment button group'
            >
                <Button>Left</Button>
                <Button>Center</Button>
                <Button>Right</Button>
            </ButtonGroup>
        </Stack>
        <Stack direction='row'>
            <ToggleButtonGroup aria-label='text formatting'
                value={formats}
                onChange={handleFormatChange}
                size='small'
                color='success'
                exclusive // возможность выбора только одного варианта 
            >
                <ToggleButton value='bold' aria-label='bold'><FormatBoldIcon/></ToggleButton>
                <ToggleButton value='italic' aria-label='italic'><FormatItalicIcon/></ToggleButton>
                <ToggleButton value='underlined' aria-label='underlined'><FormatUnderlinedIcon/></ToggleButton>
            </ToggleButtonGroup>
        </Stack>
    </Stack>
    
  )
}
