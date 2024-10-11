import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import TextField from '@mui/material/TextField';
import './signin.css'

export default function SignIn() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => console.log(data);

    return (

        <div className='container-painel-signin'>
            <div className="container-login-info">
                <img src="/logoB1.png" alt="Logo" />
            </div>

            <main className="container-login">
                <img src="score.png" alt="Score" />
                <div className="container-login-header">
                    <h1>Login</h1>
                    <h4>Estamos felizes em vê-lo. Entre para continuar.</h4>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <TextField
                            {...register("email", {
                                required: "Este campo é obrigatório",
                                maxLength: {
                                    value: 20,
                                    message: "O campo precisa ter no máximo 20 caracteres."
                                }
                            })}
                            error={!!errors.email}
                            label="Email"
                            variant="standard"
                            helperText={
                                <ErrorMessage
                                    errors={errors}
                                    name="email"
                                    render={({ message }) => message}
                                />
                            }
                        />

                        <TextField
                            {...register("password", {
                                required: "Este campo é obrigatório",
                                maxLength: {
                                    value: 20,
                                    message: "O campo precisa ter no máximo 20 caracteres."
                                }
                            })}
                            error={!!errors.email}
                            label="password"
                            variant="standard"
                            helperText={
                                <ErrorMessage
                                    errors={errors}
                                    name="email"
                                    render={({ message }) => message}
                                />
                            }
                        />

                        <button type="submit">Entrar</button>

                    </form>
                </div>
            </main>
        </div>
    );
}
