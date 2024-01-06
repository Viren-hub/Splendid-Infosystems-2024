import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';  // Import Alert component
import { Container } from '@mui/material';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === 'Virendra' && password === 'Admin') {
            setLoginError(false);  
        } else {
            setLoginError(true);
        }
    };

    return (
        <div className="login-box">
            <Container maxWidth="sm">
                <Card>
                    <CardContent>
                        <h2>Login</h2>
                        <form>
                            <TextField
                                label="Username"
                                variant="outlined"
                                fullWidth
                                value={username}
                                onChange={handleUsernameChange}
                                margin="normal"
                            />
                            <TextField
                                type="password"
                                label="Password"
                                variant="outlined"
                                fullWidth
                                value={password}
                                onChange={handlePasswordChange}
                                margin="normal"
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                onClick={handleSubmit}
                            >
                                Login
                            </Button>
                            {loginError && (
                                <Alert severity="error" sx={{ marginTop: 2 }}>
                                    Incorrect username or password.
                                </Alert>
                            )}
                        </form>
                    </CardContent>
                </Card>
            </Container>
        </div>
    );
};

export default Login;
