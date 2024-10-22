import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import IconButton from '@mui/material/IconButton';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import './ModalEdit.css'; 

export default function ModalEdit({ children, user }) {
    const [open, setOpen] = React.useState(false);

    const { control, register, handleSubmit, setValue, formState: { errors } } = useForm();

    const handleClickOpen = () => {
        setOpen(true);

        if (user) {
            setValue('nome', user.nome);
            setValue('tipo', user.perfil); 
            setValue('contato', user.celular);
            setValue('email', user.email);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onSubmit = (data) => {
        console.log('Dados submetidos:', data);
        handleClose(); 
    };

    return (
        <React.Fragment>
            <Button variant="text" endIcon={children} onClick={handleClickOpen} />
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth={true}
                maxWidth={'xl'}
            >
                <div className="modalEdit-header">
                    <h1>Editar Dados</h1>
                    <IconButton onClick={handleClose} color="error" size="large">
                        <CancelPresentationIcon fontSize="inherit" />
                    </IconButton>
                </div>
                <div className="modalEdit-body">
                    <form className='modalEdit-form' onSubmit={handleSubmit(onSubmit)}>
                                                <div className="modalEdit-form-group">
                            <TextField
                                label="Nome"
                                variant="outlined"
                                fullWidth
                                {...register('nome', { required: 'Nome é obrigatório' })}
                                error={!!errors.nome}
                                helperText={errors.nome ? errors.nome.message : ''}
                            />
                        </div>

                        
                        <div className="modalEdit-form-group">
                            <FormControl fullWidth variant="outlined" error={!!errors.tipo}>
                                <InputLabel id="tipo-label">Tipo</InputLabel>
                                <Controller
                                    name="tipo"
                                    control={control}
                                    defaultValue="" 
                                    render={({ field }) => (
                                        <Select
                                            labelId="tipo-label"
                                            label="Tipo"
                                            {...field}
                                        >
                                            <MenuItem value="">
                                                <em>Selecione o Tipo</em>
                                            </MenuItem>
                                            <MenuItem value="Sacado">Sacado</MenuItem>
                                            <MenuItem value="Cessionaria">Cessionária</MenuItem>
                                        </Select>
                                    )}
                                    rules={{ required: 'Tipo é obrigatório' }}
                                />
                                {errors.tipo && <span className="error-message">{errors.tipo.message}</span>}
                            </FormControl>
                        </div>

                        
                        <div className="modalEdit-form-group">
                            <TextField
                                label="Contato"
                                variant="outlined"
                                fullWidth
                                {...register('contato', { required: 'Contato é obrigatório' })}
                                error={!!errors.contato}
                                helperText={errors.contato ? errors.contato.message : ''}
                            />
                        </div>

                        
                        <div className="modalEdit-form-group">
                            <TextField
                                label="Email"
                                type="email"
                                variant="outlined"
                                fullWidth
                                {...register('email', {
                                    required: 'Email é obrigatório',
                                    pattern: {
                                        value: /^\S+@\S+\.\S+$/,
                                        message: 'Email inválido'
                                    }
                                })}
                                error={!!errors.email}
                                helperText={errors.email ? errors.email.message : ''}
                            />
                        </div>

                        <div className="modalEdit-form-group">
                            <Button className='cancel-edit-button' onClick={handleClose} variant="outlined" color="secondary">
                                Voltar
                            </Button>
                        </div>

                        <div className="modalEdit-form-group modalEdit-submit">
                            <Button className='send-edit-button' type="submit" >
                                Enviar
                            </Button>
                        </div>
                    </form>
                </div>
            </Dialog>
        </React.Fragment>
    );
}
