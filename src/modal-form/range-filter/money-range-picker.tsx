import { Box, Stack, TextField } from '@mui/material'
import React, { FC } from 'react'
import { Control, Controller } from 'react-hook-form'
import { FormModal, valueFormModel } from '../use-form-schema'

interface MoneyRangeProps {
    control: Control<FormModal, any>
    startMoneyRange: valueFormModel
    endMoneyRange: valueFormModel
}

export const MyMoneyRangePicker: FC<MoneyRangeProps> = ({control, startMoneyRange, endMoneyRange}) => {
  return (
    <Stack spacing={4} direction='row'>
        <Controller
            control={control}
            name='startMoneyRange'
            render={({field, formState}) => (
                <>
                    <TextField
                        label = 'Стоимость с'
                        value={field.value}
                        onChange={field.onChange}
                    />
                    {formState.errors.startMoneyRange?.message}
                </>
            )}
        />
        <Controller
            control={control}
            name='endMoneyRange'
            render={({field, formState}) => (
                <>
                    <TextField
                        label = 'Стоимость по'
                        value={field.value}
                        onChange={field.onChange}
                    />
                    {formState.errors.endMoneyRange?.message}
                </>
            )}
        />
    </Stack>
  )
}
