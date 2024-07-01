import React, { useEffect } from "react";
import { FormModel, useFormSchema } from "./use-form-schema";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField } from "@mui/material";

const Form = () => {
    const { schema, defaultValues } = useFormSchema();
    
    const { control, getValues, watch, setValue, handleSubmit, formState } = useForm<FormModel>({
        defaultValues,
        mode: 'onChange',
        resolver: yupResolver(schema, undefined, { mode: 'async', raw: true }) as any
    })

    const nameWatch = watch('name');
    const ageWatch = watch('age');

    const submitHandler = (data: any) => {
        console.log(data);
    }

    useEffect(() => {
        console.log('nameWatch', nameWatch);
        // setValue('age', typeof ageWatch === 'number' ? ageWatch + 1 : 0);
    }, [nameWatch])

    useEffect(() => {
        console.log('ageWatch', ageWatch);
    }, [ageWatch])

    return (
        <>
            <Controller
                control={control}
                name="name"
                render={({ field, fieldState }) => (
                   <>
                        {field.value}
                        <TextField
                            value={field.value}
                            onChange={field.onChange}
                        />
                        {/* {!!fieldState.error?.message ? 'Error' : undefined} */}
                        {!!formState.errors.age ? 'Error' : undefined}
                   </>
                )}
            />
            <Button onClick={handleSubmit(submitHandler)}>123</Button>
        </>
    )
};

export { Form };