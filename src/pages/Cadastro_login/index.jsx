import './index.css'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

export default function CadastroLogin(){
    
    return(
        <div className='container_menu'>
            <div className='entrar'>
                <img src='/logoSignin.svg' alt='logo signin'></img>
                <h1>JÁ POSSUI CONTA ?</h1>
                <p>Acesse sua conta agora mesmo.</p>
                <button className='btnEnviar'>Entrar</button>
            </div>

            <div className='cadastro'>
                <div className='gridText'>
                    <h2>CRIE SUA CONTA</h2>
                    <p>Registre-se e tenha acesso a insights valiosos.</p>
                </div>
                <div className='gridInput'>
                    <TextField
                        id="input-with-icon-textfield"
                        label="Nome"
                        sx={{ m: 1, width: '100%'}}
                        size="small"
                        slotProps={{
                        input: {
                            startAdornment: (
                            <InputAdornment position="start">
                                <img src='/user-alt-1-svgrepo-com.svg'/>
                            </InputAdornment>
                            ),
                        },
                        }}
                    />
                    <TextField
                        id="cpf_cnpj"
                        label="CPF/CNPJ"
                        type='number'
                        size="small"
                        sx={{ m: 1, width: '100%' }}
                        slotProps={{
                        input: {
                            startAdornment: (
                            <InputAdornment position="start">
                                <img src='/id-card-svgrepo-com.svg'/>
                            </InputAdornment>
                            ),
                        },
                        }}
                    />
                    <TextField
                        id="tel_cel"
                        label="Telefone/Celular"
                        sx={{ m: 1, width: '100%' }}
                        type='number'
                        size="small"
                        slotProps={{
                        input: {
                            startAdornment: (
                            <InputAdornment position="start">
                                <img src='/telephone-signal-svgrepo-com.svg'/>
                            </InputAdornment>
                            ),
                        },
                        }}
                    />
                    <TextField
                        id="cep"
                        label="CEP"
                        sx={{ m: 1, width: '100%' }}
                        type='number'
                        size="small"
                        slotProps={{
                        input: {
                            startAdornment: (
                            <InputAdornment position="start">
                                <img src='/place-marker-svgrepo-com.svg'/>
                            </InputAdornment>
                            ),
                        },
                        }}
                    />
                    <TextField
                        id="endereco"
                        label="Endereço"
                        sx={{ m: 1, width: '100%' }}
                        type='text'
                        size="small"
                        slotProps={{
                        input: {
                            startAdornment: (
                            <InputAdornment position="start">
                                <img src='/house-user-svgrepo-com.svg'/>
                            </InputAdornment>
                            ),
                        },
                        }}
                    />
                    <TextField
                        id="email"
                        label="E-mail"
                        sx={{ m: 1, width: '100%' }}
                        type='email'
                        size="small"
                        slotProps={{
                        input: {
                            startAdornment: (
                            <InputAdornment position="start">
                                <img src='/email-1573-svgrepo-com.svg'/>
                            </InputAdornment>
                            ),
                        },
                        }}
                    />
                    <TextField
                        id="senha"
                        label="Senha"
                        sx={{ m: 1, width: '100%' }}
                        type='password'
                        size="small"
                        slotProps={{
                        input: {
                            startAdornment: (
                            <InputAdornment position="start">
                                <img src='/password-svgrepo-com.svg'/>
                            </InputAdornment>
                            ),
                        },
                        }}
                    />
                    <button className='btnCad'>Cadastrar</button>
                </div>
                
                
                
            
            </div>
        </div>
    )
}