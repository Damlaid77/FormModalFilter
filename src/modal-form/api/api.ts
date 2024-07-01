import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const FormApi = createApi({
    reducerPath: 'FormApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/comments'}),
    endpoints: (builder) => ({
        getFormRequest: builder.query({
            query: () => '/1'
        })
    })
})
