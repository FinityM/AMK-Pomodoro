import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';


import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Footer() {
    return <footer>
        <Box>
        <Box sx={{ bgcolor: 'primary.main' }}/>
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Help</Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Contact
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Contact
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Contact
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Account</Box>
                        <Box>
                            <Link href="/login" color="inherit">
                                Login
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/register" color="inherit">
                                Sign up
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Contact
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Test</Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Contact
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Contact
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Contact
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </footer>;
}