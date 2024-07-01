import React, { FC, RefAttributes } from 'react'
import { Control, Controller, FieldPath, FieldPathValues, FieldValue, FieldValues, Path, PathValue } from 'react-hook-form';
import { FormModal, valueFormModel } from '../use-form-schema';
import { DateRangePickerProps, DateTimePicker, PickerValidDate } from '@mui/x-date-pickers-pro';
import { Box, Stack } from '@mui/material';
import { FormModel } from '../../from/use-form-schema';
import { DateInputs } from 'react-date-inputs';

// export type FieldPath<TFieldValues extends FieldValues> = Path<TFieldValues>
// export type FieldValues = Record<string, any>;

interface DateRangeProps {
    control:  Control<FormModal, any>
    startDate: FieldPath<FormModal>
    endDate: FieldPath<FormModal>
}

export const MyDateRangePicker: FC<DateRangeProps> = ({control, startDate, endDate}) => {
  return (
    <Box>
        <Stack direction='row' spacing={4}>
            <Controller
                control={control}
                name='startDate'
                render={({field: startDateField, formState: formStart}) => (
                    <Controller
                        control={control}
                        name='endDate'
                        render={({field: endDateField, formState: formEnd}) => (
                            <>
                                <DateTimePicker
                                    label='Дата с'
                                    value={startDateField.value}
                                    onChange={startDateField.onChange}
                                />
                                {formStart.errors.startDate?.message}
                                <DateTimePicker
                                    label='Дата по'
                                    value={endDateField.value}
                                    onChange={endDateField.onChange}
                                />
                                {formEnd.errors.endDate?.message}
                            </>
                            
                        )}
                    />
                )}
            />
            
        </Stack>
    </Box>
  )
}
