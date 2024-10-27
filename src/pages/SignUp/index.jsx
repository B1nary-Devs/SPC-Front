import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, MenuItem, Box } from '@mui/material';
import './CadastroUsuario.css';
import api from '../../api/api'
import { toast } from 'react-toastify';

export default function CadastroUsuario() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const response = api.post('/users/createUser', {
      ...data,
      "cep": "0000-000",
      "endereco": "N/A",
      "telefone": "0000000",
    })

      .then(() => {
        toast.success('Cadastrado com Sucesso')
      })

      .catch((error) => {
        console.log('====================================');
        console.log(error);
        console.log('====================================');
        toast.error('Falha ao registrar')
      })

  };

  return (
    <Box className="form-container">
      <h1>Usuários</h1>
      <h4>Cadastrar novo usuário</h4>

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
            label="Perfil"
            select
            fullWidth
            {...register('perfil', { required: 'O campo perfil é obrigatório' })}
            error={!!errors.perfil}
            helperText={errors.perfil ? errors.perfil.message : ''}
            className="form-field"
          >
            <MenuItem value="Sacado">Sacado</MenuItem>
            <MenuItem value="Cessionária">Cessionária</MenuItem>
          </TextField>
        </div>

        <div className="form-group">
          <TextField
            label="Celular"
            fullWidth
            {...register('celular', { required: 'O campo celular é obrigatório' })}
            error={!!errors.celular}
            helperText={errors.celular ? errors.celular.message : ''}
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

        <div className="form-group">
          <TextField
            label="Senha"
            fullWidth
            type="password"
            {...register('senha', { required: 'O campo senha é obrigatório', minLength: { value: 6, message: 'A senha deve ter no mínimo 6 caracteres' } })}
            error={!!errors.senha}
            helperText={errors.senha ? errors.senha.message : ''}
            className="form-field"
          />

          <TextField
            label="CPF ou CNPJ"
            fullWidth
            {...register('cpf_cnpj', {
              required: 'O campo CPF ou CNPJ é obrigatório',
              pattern: {
                value: /^\d{11}$|^\d{14}$/,
                message: 'CPF ou CNPJ inválido. Insira 11 dígitos para CPF ou 14 dígitos para CNPJ.'
              }
            })}
            error={!!errors.cpf_cnpj}
            helperText={errors.cpf_cnpj ? errors.cpf_cnpj.message : ''}
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
