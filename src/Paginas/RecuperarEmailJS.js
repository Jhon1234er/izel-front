import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

export function RecuperarEmailJS() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send(
        'service_uwrup8u',       // Service ID
        'template_3y790uk',      // Template ID
        {
          to_email: data.correo,
          link: 'http://localhost:3000/recuperar-basico',
        },
        'op4r5T8IxiunB-ymf'     // Public Key
      )
      .then(() => {
        alert(`Instrucciones enviadas al correo: ${data.correo}`);
        reset();
      })
      .catch((error) => {
        console.error('Error al enviar:', error.text || error);
        alert('Ocurrió un error al enviar el correo.');
      });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit(onSubmit)} className="formulario-login">
        <h2>Recuperar Contraseña</h2>

        <label htmlFor="correo">Correo electrónico</label>
        <input
          id="correo"
          type="email"
          {...register('correo', { required: true })}
          placeholder="tu-email@ejemplo.com"
        />

        <button type="submit">Enviar instrucciones</button>
      </form>
    </div>
  );
}