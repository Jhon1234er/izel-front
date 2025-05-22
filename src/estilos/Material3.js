// src/Material3.js
import { createTheme } from '@mui/material/styles';

const tema = createTheme({
  palette: {
    primary: {
      main: '#013857',
    },
    secondary: {
      main: '#A8D8B9',
    },
    background: {
      default: '#f5f5f5',
      paper: '#fff',
    },
    text: {
      primary: '#333',
      secondary: '#555',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700, fontSize: '2.5rem', lineHeight: 1.2 },
    h2: { fontWeight: 600, fontSize: '1.8rem', lineHeight: 1.3 },
    body1: { fontWeight: 400, fontSize: '1rem', lineHeight: 1.5 },
    button: { fontWeight: 600, textTransform: 'uppercase' },
  },
  spacing: 8,
});

export default tema;
