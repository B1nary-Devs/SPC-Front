import { Routes, Route } from 'react-router-dom'
import CadastroUsuario from '../pages/SignUp'
import Dashboard from '../pages/Dashboard'
import SignIn from '../pages/SignIn'
import Home from '../pages/Home'
import DuplicatesDue from '../pages/DuplicatesDue'
import DuplicatesExpired from '../pages/DuplicatesExpired'
import DuplicatesCompleted from '../pages/DuplicatesCompleted'
import Users from '../pages/Users'

function RoutesApp(){
    return(
        <Routes>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/signUp' element={<CadastroUsuario/>}/>
            <Route path='/login' element={<SignIn/>}/>
            <Route path='/duplicatas/duplicatesDue' element={<DuplicatesDue/>}/>
            <Route path='/duplicatas/expiredDue' element={<DuplicatesExpired/>}/>
            <Route path='/duplicatas/completedDue' element={<DuplicatesCompleted/>}/>
            <Route path='/users' element={<Users/>}/>
        </Routes>
    )
}

export default RoutesApp