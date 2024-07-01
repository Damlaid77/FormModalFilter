import React, { useState } from 'react'
import { Autocomplete, Stack, TextField } from '@mui/material'

type Skill = {
    id: number
    label: string
}
export const MuiAutoComplete = () => {
    const skills = ['html', 'css', 'js', 'ts', 'react']
    const [value, setValue] = useState<string | null>(null)
    const [skill, setSkill] = useState<Skill | null>(null)
    const skillsOptions = skills.map((skill, index) => ({
        id: index +1,
        label: skill
    }))
  return (
    <Stack spacing={2} width='250px'>
        <Autocomplete 
            options={skills}
            renderInput={(params) => <TextField {...params} label='Skills'/>}
            value={value}
            onChange={(event: any, newValue: string | null) => setValue(newValue)}
            freeSolo
        />
        <Autocomplete 
            options={skillsOptions}
            renderInput={(params) => <TextField {...params} label='Skills'/>}
            value={skill}
            onChange={(event: any, newValue: Skill | null) => setSkill(newValue)}
        />
    </Stack>
  )
}
