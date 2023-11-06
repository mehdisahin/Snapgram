import './globals.css'
import { Route, Routes } from 'react-router-dom';
import SigninForm from './_auth/forms/SigninForm';
import Home from './_root/pages/Home';
import SignupForm from './_auth/forms/SignupForm';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/rOOTlayout';
const App = () => {
  return (
<main className="flex h-screen">
    <Routes>
    {/*Public Routes */}
    <Route element= {<AuthLayout/>}>
        
    <Route path="/sign-in" element={<SigninForm/>} />
    <Route path="/sign-up" element={<SignupForm/>} />

    </Route>

    {/*Private Routes */}
    <Route path="/" element={<RootLayout/>}>

    <Route index element={<Home/>}/>

    </Route>
   
    </Routes>

</main>
  )
}

export default App