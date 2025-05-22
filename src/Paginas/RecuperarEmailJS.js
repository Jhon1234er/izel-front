import { useForm } from 'react-hook-form';

export function RecuperarEmailJS() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(`Instrucciones enviadas al correo: ${data.correo}`);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit(onSubmit)} className="formulario-login">
        <h2>Recuperar Contraseña</h2>

        <label>Correo electrónico</label>
        <input type="email" {...register("correo", { required: true })} />

        <button type="submit">Enviar instrucciones</button>
      </form>
    </div>
  );
}
