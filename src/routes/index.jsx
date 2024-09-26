import { Routes, Route } from 'react-router-dom'

import Teste from '../pages/Teste/teste'
import Dashboard from '../pages/Dashboard/Dashboard'

function RoutesApp(){
    return(
        <Routes>
            <Route path='/teste' element={<Teste/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
    )
}

export default RoutesApp