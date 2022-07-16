import { Box } from '@mui/material';
import './App.css';
import NavBar from './components/NavBar';
import ToggleTheme from './components/ToggleTheme';
import ProcessProvier from "./context/ProcessContext"
import ThemeProvider from "./context/ThemeContext"
import AuthProvider from "./context/AuthProvider"


function App() {

  return (
    <ProcessProvier>
      <ThemeProvider>
        <AuthProvider>
          <Box>
            <NavBar />
            <ToggleTheme/>
          </Box>
        </AuthProvider>
      </ThemeProvider>
    </ProcessProvier>
  );
}

export default App;
