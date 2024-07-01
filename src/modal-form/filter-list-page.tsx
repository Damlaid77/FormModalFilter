import { Box, Button, Chip, Modal, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { FormModal, fieldsFormList, useFormSchema, valueFormModel } from './use-form-schema'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormModalFilter } from './form-moda-filterl'
import { useAppDispatch, useAppSelector } from './hooks/hooks'
import { array } from 'yup'
import { updateFilterForm } from './slice/form-slice'
import { isExists } from 'date-fns'

export const FilterListPage = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const { schema, defaultValues } = useFormSchema()
    const {control, watch, handleSubmit, formState, reset} = useForm<FormModal>({
        defaultValues,
        mode:'onChange',
        resolver: yupResolver(schema, undefined, { mode: 'async', raw: true }) as any
    })
    const filteredValues = useAppSelector(state => state.formReducer)
    const dispatch = useAppDispatch()
    const chipsFilter: any[] = []
    for ( let [n, v] of Object.entries(filteredValues)) {
        if(v !== null && typeof v === 'object') {
            chipsFilter.push([n, v.toString()])
        } else if (v !== null) {
            chipsFilter.push([n, v])
        } 
    }
    useEffect(()=> {
        console.log(  chipsFilter );
   }, [chipsFilter])

    return (
        <>  
            <Stack direction='row'>
                <Button onClick={() => {
                    setIsOpen(true)
                    reset(filteredValues) //  ???
                    }}
                >
                    Modal Filter
                </Button>
                {   
                    chipsFilter.map(chip => (
                        <Chip 
                            label={chip[1]} 
                            onDelete={() => dispatch(updateFilterForm(chip[0]))}
                        />
                    ))
                    
                }
            </Stack>
            <FormModalFilter 
                isOpen={isOpen} 
                setIsOpen={setIsOpen} 
                control={control} 
                handleSubmit={handleSubmit}
            />
            <Stack>
                List
            </Stack>
        </>   
    )
}
