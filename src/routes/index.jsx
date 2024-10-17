import { Routes, Route } from 'react-router-dom'
import CadastroLogin from '../pages/SignUp'
import Dashboard from '../pages/Dashboard'
import SignIn from '../pages/SignIn'
import Home from '../pages/Home'
import DuplicatesDue from '../pages/DuplicatesDue'
import DuplicatesExpired from '../pages/DuplicatesExpired'
import DuplicatesCompleted from '../pages/DuplicatesCompleted'
import Sacados from '../pages/Sacados'

function RoutesApp(){
    return(
        <Routes>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/' element={<CadastroLogin/>}/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/duplicatas/duplicatesDue' element={<DuplicatesDue/>}/>
            <Route path='/duplicatas/expiredDue' element={<DuplicatesExpired/>}/>
            <Route path='/duplicatas/completedDue' element={<DuplicatesCompleted/>}/>
            <Route path='/sacados' element={<Sacados/>}/>
        </Routes>
    )
}

export default RoutesApp