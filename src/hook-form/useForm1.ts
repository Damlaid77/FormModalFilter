import * as yup from 'yup'

export interface FormModel {
    firstName: string,
    lastName: string,
    sirName: string,
    changedData: boolean,
    changedFirstName?: string,
    changedLastName?: string,
    changedSirName?: string,
    age: number,
    phone: string,
    email: string,
    city: string
}

const defaultValues: FormModel = ({
    firstName: '',
    lastName: '',
    sirName: '',
    changedData: false,
    changedFirstName: '',
    changedLastName: '',
    changedSirName: '',
    age: 0,
    phone: '',
    email: '',
    city: ''
})


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const useFormSchemaPractice = () => {

    const schema = yup.object({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        sirName: yup.string().required(),
        changeData: yup.boolean(),
        changedFirstName: yup
            .string()
            .when('changeData', {
                is: (changeData: boolean) => changeData,
                then: schema => schema.required()
            }),
        changedLastName: yup.string().when('changeData', {
            is: true,
            then: schema => schema.required()
        }),
        changedSirName: yup.string().when('changeData', {
            is: true,
            then: schema => schema.required()
        }),
        age: yup.number().min(18).positive().integer().required(),
        phone: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
        email: yup.string().email().required(),
        city: yup.string().required() 
    })
    return {schema, defaultValues}
}