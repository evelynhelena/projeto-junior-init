import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import logo from "../../../public/images/logo.png";
import { AppBarStyled, BoxLinkStyled } from "./styles";

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
];

export function Header() {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBarStyled
			position="static"
			color="transparent"
		>
			<Container maxWidth="lg">
				<Toolbar disableGutters>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
					>
						<Image
							src={logo}
							width={239}
							height={50.08}
							alt="logo"
						></Image>
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-AppBarStyled"
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
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
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
						sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}

					>
						<Image
							src={logo}
							width={239}
							height={50.08}
							alt="Logo"
						></Image>

					</Typography>
					<BoxLinkStyled
						sx={{display: { xs: "none", md: "flex", justifyContent: "end" }}}
					>
						{pages.map((page) => (
							<Link
								key={page.page}
								href={page.link}
							>
								<a>{page.page}</a>
							</Link>
						))}
					</BoxLinkStyled>
				</Toolbar>
			</Container>
		</AppBarStyled>
	);
}