import { Box, Button, Checkbox, FormControlLabel, Grid, MenuItem, Select, Stack, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormModel, useFormSchemaPractice } from './useForm1'

export const Form1 = () => {
    const {schema, defaultValues} = useFormSchemaPractice()
    const countries = ['Russia', 'USA', 'Ukraine', 'Belarus', 'Mexico']
    
    const {control, watch, getValues, handleSubmit, formState, reset } = useForm<FormModel>({
        defaultValues,
        mode: 'onChange',
        resolver: yupResolver(schema, undefined, { mode: 'async', raw: true }) as any
    })
    const submitHandler = (data: any) => {
      console.log(data);
      reset()
      console.log(getValues());
    }
    const changed = watch('changedData')
  useEffect(() => {
    console.log(changed);
  }, [changed])
  return (
    <div style={{display:'flex', justifyContent:'center'}}>
      <Stack width={720}>
        <Stack sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
          <Controller 
            control={control}
            name='firstName'
            render={({field}) => (
              <>
                <TextField
                  label='First Name'
                  onChange={field.onChange}
                  value={field.value}
                />
                {formState.errors.firstName?.message}
              </>
            )}
          />
          <Controller 
            control={control}
            name='lastName'
            render={({field}) => (
              <>
                <TextField 
                  onChange={field.onChange}
                  value={field.value}
                  label='Last Name'
                />
                {formState.errors.lastName?.message}
              </>
            )}
          />
          <Controller 
            control={control}
            name='sirName'
            render={({field}) => (
              <>
                <TextField 
                  onChange={field.onChange}
                  value={field.value}
                  label='Sir Name'
                />
                {formState.errors.sirName?.message}
              </>
            )}
          />
        </Stack>
        <Controller 
          control={control}
          name='changedData'
          render={({field}) => (
            <>
              {field.value}
              <FormControlLabel 
                label='Changed name'
                control={<Checkbox 
                  checked={field.value}
                  onChange={field.onChange}
                />} 
              />
            </>
          )}
        />
        {
          changed && 
          <>
            <Stack sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}} marginBottom={'42px'}>
              <Controller 
              control={control}
              name='changedFirstName'
              render={({field}) => (
                <>
                  <TextField
                    label='First Name'
                    onChange={field.onChange}
                    value={field.value}
                  />
                  {formState.errors.changedFirstName?.message}
                </>
              )}
            />
            <Controller 
              control={control}
              name='changedLastName'
              render={({field}) => (
                <>
                  <TextField 
                    onChange={field.onChange}
                    value={field.value}
                    label='Last Name'
                  />
                  {formState.errors.changedLastName?.message}
                </>
              )}
            />
            <Controller 
              control={control}
              name='changedSirName'
              render={({field}) => (
                <>
                  <TextField 
                    onChange={field.onChange}
                    value={field.value}
                    label='Sir Name'
                  />
                  {formState.errors.changedSirName?.message}
                </>
              )}
            />
            </Stack>
          </>
        } 
        <Stack 
          sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}
          // direction="column"
          // justifyContent="center"
          // alignItems="flex-start"
          // spacing={2}
        >
          <Controller 
            control={control}
            name='age'
            render={({field}) => (
              <>
                <TextField 
                  onChange={field.onChange}
                  value={field.value}
                  label='Age'
                />
                {formState.errors.age?.message}
              </>
            )}
          />
          <Controller 
            control={control}
            name='phone'
            render={({field}) => (
              <>
                <TextField 
                  onChange={field.onChange}
                  value={field.value}
                  label='Phone'
                />
                {formState.errors.phone?.message}
              </>
            )}
          />
          <Controller 
            control={control}
            name='email'
            render={({field}) => (
              <>
                <TextField 
                  onChange={field.onChange}
                  value={field.value}
                  label='Email'
                />
                {formState.errors.email?.message}
              </>
            )}
          />
        </Stack>
        <Stack width={'223px'} marginTop={'42px'}>
          <Controller 
            control={control}
            name='city'
            render={({field}) => (
              <>
                <TextField 
                  onChange={field.onChange}
                  value={field.value || ''}
                  label='City'
                  select
                  fullWidth
                >
                  {
                    countries.map(country => 
                      <MenuItem key={country} value={country}>{country}</MenuItem>
                    )
                  }
                </TextField>
                {formState.errors.city?.message}
              </>
            )}
          />
        </Stack>
        <Stack 
        spacing={4}
          marginTop={3}
          direction="row"
          justifyContent='flex-end'
        >
          <Button onClick={() => reset(defaultValues)}>
            Clear
          </Button>
          <Button 
            
            variant='contained'
            size='large' 
            onClick={handleSubmit(submitHandler)}
          >
            Submit
          </Button>
        </Stack>
        {/* <Grid container>
            <Grid item xs={4}>2</Grid>
            <Grid item xs={4}>3</Grid>
            <Grid item xs={4}>4</Grid>
            <Grid item xs={4}>5</Grid>
            <Grid item xs={4}>6</Grid>
        </Grid> */}
      </Stack>
    </div>
  )
}
