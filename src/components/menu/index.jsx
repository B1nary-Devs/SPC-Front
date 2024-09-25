
import './index.css'
import { useState } from 'react';



export default function Menu(){
    const [menuCss, setMenuCss] = useState('menu')
    const [menuStatus, setMenuStatus] = useState(false)
    const [iconGrid, setIconGrid] = useState('iconGrid')
    const [usuarioNome, setUsuarioNome] = useState('')
    const [homeNome, setHomeNome] = useState('')
    const [dasboardName, setDasboardName] = useState('')
    const [cadastroNome, setCadastroNome] = useState('')

    function modalOpen(){
        setMenuStatus(true)
        setUsuarioNome('Julia Silva')
        setHomeNome('Home')
        setDasboardName('Dashboard')
        setCadastroNome('Cadastro')
        setIconGrid('iconClose')
        setMenuCss('menu menuOpen')
    }

    function modalclose(){
        setMenuStatus(false)
        setUsuarioNome('')
        setHomeNome('')
        setDasboardName('')
        setCadastroNome('')
        setIconGrid('logoGrid')
        setMenuCss('menu')
    }



    return(
        <div className='container_menu'>
            <div className={menuCss}>

                <div className={iconGrid}>
                    <img src="/icon_menu.svg" alt="Icon_menu" onClick={()=>modalOpen() } ></img>
                </div>
                {
                    menuStatus && (
                        <div className='logoGrid'>
                            <img src="/icon_menu.svg"  alt="Icon_menu" onClick={()=> modalclose()} ></img>
                        </div>
                    )
                }
                
                <div className='iconGrid'>
                    <img src='/usuario.svg' alt="foto Usuario"></img>
                    <h3>{usuarioNome}</h3>
                </div>

                <div className='iconGrid'>
                    <img src='/home.svg' alt="home"></img>
                    <h3>{homeNome}</h3>
                </div>

                <div className='iconGrid'>
                    <img src='/dashboard.svg' alt="Dashboard"></img>
                    <h3>{dasboardName}</h3>
                </div>

                <div className='iconGrid'>
                    <img src='/cadastro.svg' alt="Cadastro"></img>
                    <h3>{cadastroNome}</h3>
                </div>

            </div>
        </div>
    )
}