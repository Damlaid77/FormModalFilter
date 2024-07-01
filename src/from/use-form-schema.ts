import * as yup from 'yup';

interface FormModel {
    name: string;
    age: number | null;
}

const defaultValues: FormModel = ({
    name: '',
    age: null,
})

const useFormSchema = () => {
    const schema = yup.object({
        age: yup.number().required()
    });

    return { schema, defaultValues };
}

export { useFormSchema };
export type { FormModel };