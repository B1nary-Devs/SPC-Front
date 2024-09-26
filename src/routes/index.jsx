import { Routes, Route } from 'react-router-dom'

import CadastroLogin from '../pages/Cadastro_login'

function RoutesApp(){
    return(
        <Routes>
            <Route path='/cadastroLogin' element={<CadastroLogin/>}/>
        </Routes>
    )
}

export default RoutesApp