import { Routes, Route } from 'react-router-dom'
import CadastroLogin from '../pages/Cadastro_login'
import Dashboard from '../pages/Dashboard/Dashboard'

function RoutesApp(){
    return(
        <Routes>
            <Route path='/cadastroLogin' element={<CadastroLogin/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
    )
}

export default RoutesApp