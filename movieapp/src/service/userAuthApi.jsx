import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const url = "localhost:8080"

// localhost: 8080/signUp

export const userAuthApiSlice = createApi({
    reducerPath: "userAuth",
    baseQuery: fetchBaseQuery({baseUrl: `${url}`}),
    endpoints: (builder)=> ({
        signUp: builder.mutation({
            query:(data)=>({
                url:"/signUp",
                method: "POST",
                header: {"Content-Type":"application/json"},
                body: data
            })
        })
    })
})

export const {useSignUpMutation} = userAuthApiSlice;