import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Navbar() {
    return (
        <div>
         <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
             <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  PRAVDA STORE
                </Typography>
                <Button color="inherit">Корзина</Button>
                <Button color="inherit">Аккаунт</Button>
             </Toolbar>
            </AppBar>
         </Box>
        </div>
    );
}