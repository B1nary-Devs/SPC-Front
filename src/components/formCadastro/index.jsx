import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import './form.css'


const CadastroForm = ({ onSubmit }) => {
    return(
        <form onSubmit={onSubmit} className='form'>
            <TextField
                id='input-with-icon-textfield'
                label='Nome'
                name='nome'
                sx={{ m: 1, width: '100%'}}
                size='small'
                required
                slotProps={{
                input: {
                    startAdornment: (
                    <InputAdornment position='start'>
                        <img src='/user-alt-1-svgrepo-com.svg'/>
                    </InputAdornment>
                    ),
                },
                }}
            />
            <TextField
                id='cpf_cnpj'
                label='CPF/CNPJ'
                type='number'
                size='small'
                name='cpf_cnpj'
                required
                sx={{ m: 1, width: '100%' }}
                slotProps={{
                input: {
                    startAdornment: (
                    <InputAdornment position='start'>
                        <img src='/id-card-svgrepo-com.svg'/>
                    </InputAdornment>
                    ),
                },
                }}
            />
            <TextField
                id='tel_cel'
                label='Telefone/Celular'
                sx={{ m: 1, width: '100%' }}
                type='number'
                name='tel_cel'
                size='small'
                slotProps={{
                input: {
                    startAdornment: (
                    <InputAdornment position='start'>
                        <img src='/telephone-signal-svgrepo-com.svg'/>
                    </InputAdornment>
                    ),
                },
                }}
            />
            <TextField
                id='cep'
                label='CEP'
                sx={{ m: 1, width: '100%' }}
                type='number'
                name='cep'
                size='small'
                required
                slotProps={{
                input: {
                    startAdornment: (
                    <InputAdornment position='start'>
                        <img src='/place-marker-svgrepo-com.svg'/>
                    </InputAdornment>
                    ),
                },
                }}
            />
            <TextField
                id='endereco'
                label='Endereço'
                sx={{ m: 1, width: '100%' }}
                type='text'
                name='endereco'
                size='small'
                required
                slotProps={{
                input: {
                    startAdornment: (
                    <InputAdornment position='start'>
                        <img src='/house-user-svgrepo-com.svg'/>
                    </InputAdornment>
                    ),
                },
                }}
            />
            <TextField
                id='email'
                label='E-mail'
                sx={{ m: 1, width: '100%' }}
                type='email'
                name='email'
                size='small'
                required
                slotProps={{
                input: {
                    startAdornment: (
                    <InputAdornment position='start'>
                        <img src='/email-1573-svgrepo-com.svg'/>
                    </InputAdornment>
                    ),
                },
                }}
            />
            <TextField
                id='senha'
                label='Senha'
                sx={{ m: 1, width: '100%' }}
                type='password'
                name='senha'
                size='small'
                required
                slotProps={{
                input: {
                    startAdornment: (
                    <InputAdornment position='start'>
                        <img src='/password-svgrepo-com.svg'/>
                    </InputAdornment>
                    ),
                },
                }}
            />
            <button type='submit' className='btnForm'>Cadastrar</button>
        </form>
    )
}

export default CadastroForm