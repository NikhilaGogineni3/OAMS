import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios'; 
import Avatar from '@mui/material/Avatar'; 
import Button from '@mui/material/Button'; 
import CssBaseline from '@mui/material/CssBaseline'; 
import TextField from '@mui/material/TextField'; 
import FormControlLabel from '@mui/material/FormControlLabel'; 
import Checkbox from '@mui/material/Checkbox'; 
import Link from '@mui/material/Link'; 
import Grid from '@mui/material/Grid'; 
import Box from '@mui/material/Box'; 
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'; 
import Typography from '@mui/material/Typography'; 
import Container from '@mui/material/Container'; 
import { createTheme, ThemeProvider } from '@mui/material/styles'; 
 
const defaultTheme = createTheme(); 
 
export default function Login() { 
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({ email: '', password: '' }); 
  const [errorMessage, setErrorMessage] = useState(''); 
  const [welcomeMessage, setWelcomeMessage] = useState('');  
 
  const handleSubmit = async (event) => { 
    event.preventDefault(); 
    try { 
      const response = await axios.post('http://localhost:8080/signin', formData); 
      const { username } = response.data; 
 
      setWelcomeMessage(`Welcome, ${username}!`);  
      navigate('/', {state:{username}});  
    } catch (error) { 
      setErrorMessage('Invalid email or password'); 
    } 
  }; 
 
  const handleChange = (e) => { 
    setFormData({ ...formData, [e.target.name]: e.target.value }); 
  }; 
 
  return ( 
    <ThemeProvider theme={defaultTheme}> 
      <Container component="main" maxWidth="xs"> 
        <CssBaseline /> 
        <Box 
          sx={{ 
            marginTop: 8, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
          }} 
        > 
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}> 
            <LockOutlinedIcon /> 
          </Avatar> 
          <Typography component="h1" variant="h5"> 
            Login
          </Typography> 
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}> 
            <TextField 
              onChange={handleChange} 
              value={formData.email} 
              margin="normal" 
              required 
              fullWidth 
              id="email" 
              label="Email Address" 
              name="email" 
              autoComplete="email" 
              autoFocus 
            /> 
            <TextField 
              onChange={handleChange} 
              value={formData.password} 
              margin="normal" 
              required 
              fullWidth 
              name="password" 
              label="Password" 
              type="password" 
              id="password" 
              autoComplete="current-password" 
            /> 
            <FormControlLabel 
              control={<Checkbox value="remember" color="primary" />} 
              label="Remember me" 
            /> 
            <Button 
              type="submit" 
              fullWidth 
              variant="contained" 
              sx={{ mt: 3, mb: 2 }} 
            > 
              Login 
            </Button> 
            <Grid container> 
              <Grid item xs> 
                <Link href="#" variant="body2"> 
                  Forgot password? 
                </Link> 
              </Grid> 
              <Grid item> 
                <Link href="/Signup" variant="body2"> 
                  {"Don't have an account? Sign Up"} 
                </Link> 
              </Grid> 
            </Grid> 
            {welcomeMessage && <Typography variant="body1" color="primary">{welcomeMessage}</Typography>} {/* Display welcome message if present */} 
            {errorMessage && <Typography color="error">{errorMessage}</Typography>} {/* Display error message */} 
          </Box> 
        </Box> 
      </Container> 
    </ThemeProvider> 
  ); 
}
