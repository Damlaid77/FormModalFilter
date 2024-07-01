import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Tab } from '@mui/material'
import React, { useState } from 'react'

export const MuiTab = () => {
    const [value, setValue] = useState('1')
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue)
    }
    return (
    <Box>
        <TabContext value={value}>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <TabList aria-label='Tabs example' onChange={handleChange}>
                    <Tab label='Tab One' value='1'/>
                    <Tab label='Tab Two' value='2'/>
                    <Tab label='Tab Three' value='3'/>
                </TabList>
            </Box>
            <TabPanel value='1'>Panel 1</TabPanel>
            <TabPanel value='2'>Panel 2</TabPanel>
            <TabPanel value='3'>Panel 3</TabPanel>
        </TabContext>
    </Box>
  )
}
