import { Routes, Route } from 'react-router-dom'
import CadastroLogin from '../pages/Cadastro_login'
import Dashboard from '../pages/Dashboard/Dashboard'
import Home from '../pages/Home'
import SignUp from '../pages/SignUp'

function RoutesApp(){
    return(
        <Routes>
            {/* <Route path='/cadastroLogin' element={<CadastroLogin/>}/> */}
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/' element={<CadastroLogin/>}/>
        </Routes>
    )
}

export default RoutesApp