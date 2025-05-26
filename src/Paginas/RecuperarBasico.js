import { Typography, Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; // ← Importar el hook
import '../estilos/RecuperarBasico.css';

export function RecuperarBasico() {
  const navigate = useNavigate(); // ← Inicializar

  const {
    register, handleSubmit, watch,
    formState: { errors },
  } = useForm();

  const contraseña_nueva = watch("contraseñaNueva");

  const validarContraseña = (value) => {
    if (value.length < 8) return "La contraseña debe tener mínimo 8 caracteres";
    if (value.length > 15) return "La contraseña debe tener máximo 15 caracteres";
    return true;
  };

  const confirmarContraseña = (value) => {
    if (value !== contraseña_nueva) {
      return 'Las contraseñas deben coincidir';
    }
    return true;
  };

  const onSubmit = (data) => {
    console.log("Formulario enviado", data);
    alert("Contraseña cambiada exitosamente.");
    navigate("/login"); // ← Redirigir al login
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h4" gutterBottom>
          Cambiar contraseña
        </Typography>

        <label htmlFor="contraseña-anterior">Ingrese su anterior contraseña</label>
        <input
          id="contraseña-anterior"
          type="password"
          {...register("contraseñaAnterior", { required: "La contraseña anterior es obligatoria" })}
        />
        {errors.contraseñaAnterior && <span>{errors.contraseñaAnterior.message}</span>}

        <label htmlFor="contraseñaNueva">Ingrese su nueva contraseña</label>
        <input
          id="contraseñaNueva"
          type="password"
          {...register("contraseñaNueva", {
            required: "La contraseña nueva es obligatoria",
            validate: validarContraseña
          })}
        />
        {errors.contraseñaNueva && <span>{errors.contraseñaNueva.message}</span>}

        <label htmlFor="contraseñaConfirmacion">Confirme su contraseña</label>
        <input
          id="contraseñaConfirmacion"
          type="password"
          {...register("contraseñaConfirmacion", {
            required: "Por favor, confirme su contraseña",
            validate: confirmarContraseña
          })}
        />
        {errors.contraseñaConfirmacion && <span>{errors.contraseñaConfirmacion.message}</span>}

        <button type="submit">Cambiar contraseña</button>
      </form>
    </Box>
  );
}
