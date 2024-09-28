import { Routes, Route } from 'react-router-dom'
import CadastroLogin from '../pages/Cadastro_login'
import Dashboard from '../pages/Dashboard/Dashboard'
import Home from '../pages/Home'

function RoutesApp(){
    return(
        <Routes>
            <Route path='/cadastroLogin' element={<CadastroLogin/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/' element={<Home/>}/>
        </Routes>
    )
}

export default RoutesApp