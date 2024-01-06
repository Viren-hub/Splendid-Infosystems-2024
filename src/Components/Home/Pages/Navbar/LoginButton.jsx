import React from 'react';
import {Button} from '@mui/material'
import { Link } from 'react-router-dom';

function LoginButton(props) {
    return (
        <div>
            <Button variant='contained' color="secondary" ><Link to="/login">Login</Link></Button>
        </div>
    );
}

export default LoginButton;