
import './index.css'
import { useState } from 'react';



export default function Menu(){
    const [menuCss, setMenuCss] = useState('menu')
    const [menuStatus, setMenuStatus] = useState(false)
    const [usuarioNome, setUsuarioNome] = useState('')
    const [homeNome, setHomeNome] = useState('')
    const [dasboardName, setDasboardName] = useState('')
    const [cadastroNome, setCadastroNome] = useState('')


    function modal(){
        setMenuStatus(!menuStatus)
        if(menuStatus){
            setUsuarioNome('Julia Silva')
            setHomeNome('Home')
            setDasboardName('Dashboard')
            setCadastroNome('Cadastro')
            setMenuCss('menu menuOpen')
        }else{
            setUsuarioNome('')
            setHomeNome('')
            setDasboardName('')
            setCadastroNome('')
            setMenuCss('menu')
        }
    }

    return(
        <div className={menuCss}>

            <div className='iconGrid'>
                <div className='iconLogo'>
                    <img src="/icon_menu.svg" alt="Icon_menu" onClick={()=>modal() } ></img>
                </div>
                
            </div>
            
            <div className='iconGrid'>
                <div>
                    <img src='/usuario.svg' alt="foto Usuario"></img>
                </div>
                <h3>{usuarioNome}</h3>
            </div>

            <div className='iconGrid'>
                <div>
                    <img src='/home.svg' alt="home"></img>
                </div>
                <h3>{homeNome}</h3>
            </div>

            <div className='iconGrid'>
                <div>
                    <img src='/dashboard.svg' alt="Dashboard"></img>
                </div>
                <h3>{dasboardName}</h3>
            </div>

            <div className='iconGrid'>
                <div>
                    <img src='/cadastro.svg' alt="Cadastro"></img>
                </div>
                <h3>{cadastroNome}</h3>
            </div>

        </div>
    )
}