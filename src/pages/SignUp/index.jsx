import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, MenuItem, Typography, Box } from '@mui/material';
import './CadastroUsuario.css'; 

export default function CadastroUsuario() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box
      className="form-container"
    >
      <h1>Usuários</h1>
      <h4> Cadastrar novo usuário </h4>

      <form onSubmit={handleSubmit(onSubmit)} className="form-content">
        <div className="form-group">
          <TextField
            label="Nome"
            fullWidth
            {...register('nome', { required: 'O campo nome é obrigatório' })}
            error={!!errors.nome}
            helperText={errors.nome ? errors.nome.message : ''}
            className="form-field"
          />

          <TextField
            label="Tipo"
            select
            fullWidth
            {...register('tipo', { required: 'O campo tipo é obrigatório' })}
            error={!!errors.tipo}
            helperText={errors.tipo ? errors.tipo.message : ''}
            className="form-field"
          >
            <MenuItem value="Admin">Admin</MenuItem>
            <MenuItem value="User">User</MenuItem>
          </TextField>
        </div>

        <div className="form-group">
        
          <TextField
            label="Contato"
            fullWidth
            {...register('contato', { required: 'O campo contato é obrigatório' })}
            error={!!errors.contato}
            helperText={errors.contato ? errors.contato.message : ''}
            className="form-field"
          />

          <TextField
            label="Email"
            fullWidth
            type="email"
            {...register('email', { 
              required: 'O campo email é obrigatório', 
              pattern: { value: /^\S+@\S+$/i, message: 'Email inválido' } 
            })}
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : ''}
            className="form-field"
          />
        </div>

        <div className="button-group">
          <button
            onClick={() => console.log('Voltar')} 
            className="button-cadastroUsuario"
          >
            Voltar
          </button>

          <button 
            type="submit" 
            fullWidth 
            className="button-cadastroUsuario"
          >
            Salvar
          </button>
        </div>
      </form>
    </Box>
  );
}
