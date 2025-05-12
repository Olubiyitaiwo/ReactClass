import { useState } from 'react'
import SignUp from './component/Authenticate/SignUp/signup'
import router from './router/router'
import { RouterProvider } from 'react-router'

function App() {


  return (
    <RouterProvider router={router}/>
  )
}

export default App
