import { Button, Modal, Stack } from '@mui/material'
import React, { FC } from 'react'
import { MyDateRangePicker } from './range-filter/date-range-picker'
import { MyMoneyRangePicker } from './range-filter/money-range-picker'
import { Control, UseFormHandleSubmit } from 'react-hook-form'
import { FormModal } from './use-form-schema'
import { applyFiltersForm } from './slice/form-slice'
import { useAppDispatch } from './hooks/hooks'

interface FormModalFilterProps {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
    control:  Control<FormModal, any>
    handleSubmit: UseFormHandleSubmit<FormModal, undefined>
}

export const FormModalFilter: FC<FormModalFilterProps> = ({isOpen, setIsOpen, control, handleSubmit}) => {
    const dispatch = useAppDispatch()
    const styles = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    }

    const onSubmit = (data: FormModal) => {
        setIsOpen(false)
        // console.log(data);
        
        dispatch(applyFiltersForm(data))
    }
  return (
    <Modal 
                open={isOpen} 
                onClose={() => setIsOpen(false)} 
            >   
                <Stack sx={styles} direction='column' spacing={2}>
                    <MyDateRangePicker 
                        control={control}
                        startDate='startDate'
                        endDate='endDate'  
                    />
                    <MyMoneyRangePicker
                        control={control}
                        startMoneyRange='startMoneyRange'
                        endMoneyRange='endMoneyRange'
                    />
                    <Stack spacing={4} direction='row'  justifyContent='flex-end'>
                        <Button onClick={() => setIsOpen(false)}>Отменить</Button>
                        <Button 
                            variant='contained'
                            onClick={handleSubmit(onSubmit)}
                        >
                            Применить
                        </Button>
                    </Stack>
                </Stack>
            </Modal>  
  )
}
