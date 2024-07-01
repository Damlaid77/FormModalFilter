import * as yup from 'yup'

export type valueFormModel = "startDate" | "endDate" | "startMoneyRange" | "endMoneyRange"
export const fieldsFormList: valueFormModel[] = ["startDate", "endDate", "startMoneyRange", "endMoneyRange"]



export interface FormModal {
    startDate: Date | null
    endDate: Date | null
    startMoneyRange: number | null
    endMoneyRange: number | null
}

export const defaultValues: FormModal = {
    startDate: null,
    endDate: null,
    startMoneyRange: null,
    endMoneyRange: null
}

export const useFormSchema = () => {
    const schema = yup.object({
        startDate: yup.date().min(new Date(1900, 0, 1)).max(new Date(), "Future date not allowed").notRequired(),
        endDate: yup.date().min(yup.ref('startDate'), "Ended date must be later than Start date").max(new Date(), "Future date not allowed").notRequired(),
        startMoneyRange: yup.number().positive().integer().notRequired(),
        endMoneyRange: yup.number().positive().integer().moreThan(yup.ref('startMoneyRange')).notRequired()
    })
    
    return { schema, defaultValues }
}