import { Routes, Route } from 'react-router-dom'

import Teste from '../pages/Teste/teste'

function RoutesApp(){
    return(
        <Routes>
            <Route path='/teste' element={<Teste/>}/>
        </Routes>
    )
}

export default RoutesApp