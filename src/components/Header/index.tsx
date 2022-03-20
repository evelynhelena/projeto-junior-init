import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import Image from 'next/image'
import logo from '../../../public/images/logo.png';

const pages = [
    {
        page: "Sobre", link: "/",
    },
    {
        page: "Tutoriais", link: "/construction",
    },
    {
        page: "Blog", link: "/construction",
    }
]

export function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar
            position="static"
            color="transparent"
            sx={{ padding: "2rem 0" }}
        >
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <Image
                            src={logo}
                            width={239}
                            height={50.08}
                            alt="logo"
                        ></Image>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page.page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}

                    >
                        <Image
                            src={logo}
                            width={239}
                            height={50.08}
                            alt="Logo"
                        ></Image>

                    </Typography>
                    <Box
                        sx={
                            {
                                flexGrow: 1,
                                display: { xs: 'none', md: 'flex', justifyContent: 'end' },
                                a: {
                                    padding: "0 1rem",
                                    fontSize: "1.25rem",
                                    ":hover": {
                                        color: "var(--cyan-100)",
                                    }
                                }
                            }
                        }
                    >
                        {pages.map((page) => (
                            <Link
                                key={page.page}
                                href={page.link}
                            >
                                <a>{page.page}</a>
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};