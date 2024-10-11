import { Routes, Route } from 'react-router-dom'
import CadastroLogin from '../pages/SignUp'
import Dashboard from '../pages/Dashboard'
import SignIn from '../pages/SignIn'
import Home from '../pages/Home'
import DuplicatesDue from '../pages/DuplicatesDue'
import DuplicatesExpired from '../pages/DuplicatesExpired'
import DuplicatesCompleted from '../pages/DuplicatesCompleted'

function RoutesApp(){
    return(
        <Routes>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/' element={<CadastroLogin/>}/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/duplicatesDue' element={<DuplicatesDue/>}/>
            <Route path='/expiredDue' element={<DuplicatesExpired/>}/>
            <Route path='/completedDue' element={<DuplicatesCompleted/>}/>
        </Routes>
    )
}

export default RoutesApp