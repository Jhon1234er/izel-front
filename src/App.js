import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import tema from './estilos/Material3';
import { Encabezado } from './Componentes/Encabezado';
import { Principal } from './Paginas/Principal';
import { IniciarSesion } from './Paginas/IniciarSesion';
import { RecuperarBasico } from './Paginas/RecuperarBasico';
import { RecuperarEmailJS } from './Paginas/RecuperarEmailJS';
import { Piepagina } from './Componentes/Piepagina';
import './App.css';
import { NotFound } from './Componentes/NotFound';

function App() {
  return (
    <ThemeProvider theme={tema}>
      <div
        className="App"
        style={{ display: 'grid', minHeight: '100dvh', gridTemplateRows: 'auto 1fr auto' }}
      >
        <BrowserRouter>
          <Encabezado />
          <Routes>
            <Route path="/" element={<Principal />} />
            <Route path="/login" element={<IniciarSesion />} />
            <Route path="/recuperar-basico" element={<RecuperarBasico />} />
            <Route path="/recuperar-emailjs" element={<RecuperarEmailJS />} />
            <Route path='*' element={<NotFound/>}/>
          </Routes>
          <Piepagina />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
