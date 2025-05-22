// src/Paginas/IniciarSesion.jsx
import { useForm } from 'react-hook-form';
import { Typography, Button, Box } from '@mui/material';
import './../estilos/IniciarSesion.css';

export function IniciarSesion() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const validarCorreo = (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || 'Correo inválido';

  const validarContrasena = (value) =>
    value?.length >= 6 || 'Debe tener al menos 6 caracteres';

  const onSubmit = (data) => {
    console.log('Datos enviados:', data);
    // Aquí iría la lógica de autenticación
  };

  return (
    <Box className="login-container">
      <form onSubmit={handleSubmit(onSubmit)} className="formulario-login">
        <Typography variant="h4" component="h2" gutterBottom>
          Iniciar Sesión
        </Typography>

        <label htmlFor="correo">Correo electrónico</label>
        <input
          id="correo"
          type="email"
          {...register('correo', { validate: validarCorreo })}
          aria-invalid={errors.correo ? 'true' : 'false'}
        />
        {errors.correo && <span className="error">{errors.correo.message}</span>}

        <label htmlFor="contrasena">Contraseña</label>
        <input
          id="contrasena"
          type="password"
          {...register('contrasena', { validate: validarContrasena })}
          aria-invalid={errors.contrasena ? 'true' : 'false'}
        />
        {errors.contrasena && (
          <span className="error">{errors.contrasena.message}</span>
        )}

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Acceder
        </Button>
      </form>

      <div className="opciones-recuperacion">
        <p>
          <a href="/recuperar-basico">¿Olvidaste tu contraseña?</a>
        </p>
        <p>
          <a href="/recuperar-emailjs">Recuperar con EmailJS</a>
        </p>
      </div>
    </Box>
  );
}
