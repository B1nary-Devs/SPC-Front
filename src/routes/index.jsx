import { Routes, Route } from 'react-router-dom'
import SignUp from '../pages/SignUp'
import Dashboard from '../pages/Dashboard'
import SignIn from '../pages/SignIn'
import Home from '../pages/Home'
import DuplicatesDue from '../pages/DuplicatesDue'
import DuplicatesExpired from '../pages/DuplicatesExpired'
import DuplicatesCompleted from '../pages/DuplicatesCompleted'
import Sacados from '../pages/Sacados'
import Users from '../pages/Users'
import Profile from '../pages/Profile'
import ShowTermo from '../pages/ShowModal'
import Mapa from '../pages/Map'
import Conliation from '../pages/Conciliation'
import Anomalies from '../pages/Anomalies'

function RoutesApp(){
    return(
        <Routes>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/login' element={<SignIn/>}/>
            <Route path='/signUp' element={<SignUp/>}/>
            <Route path='/' element={<SignIn/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/termo' element={<ShowTermo/>}/>
            <Route path='/duplicatas/duplicatesDue' element={<DuplicatesDue/>}/>
            <Route path='/duplicatas/expiredDue' element={<DuplicatesExpired/>}/>
            <Route path='/duplicatas/completedDue' element={<DuplicatesCompleted/>}/>
            <Route path='/sacados' element={<Sacados/>}/>
            <Route path='/users' element={<Users/>}/>
            <Route path='/mapa' element={<Mapa/>}/>
            <Route path='/conciliation' element={<Conliation/>}/>
            <Route path='/anomalies' element={<Anomalies/>}/>
        </Routes>
    )
}

export default RoutesApp