import {configureStore} from "@reduxjs/toolkit";
import { userAuthApiSlice } from "../service/userAuthApi";
// import {setupListener} from "@reduxjs/toolkit/query";


export const store = configureStore({
    reducer:{
        [userAuthApiSlice.reducerPath] : userAuthApiSlice.reducer
    },
    middleware: (getDefaultMiddleware)=>(
        getDefaultMiddleware().concat(userAuthApiSlice.middleware)
        )
})

// setupListener(store.dispath)