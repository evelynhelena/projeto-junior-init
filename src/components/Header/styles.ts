import { Box } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { styled } from "@mui/system";

export const AppBarStyled = styled(AppBar)({
	padding: "2rem 0",
	boxShadow: "none"
});

export const BoxLinkStyled = styled(Box)({
	flexGrow: 1,
	a: {
		padding: "0 1rem",
		fontSize: "1.25rem",
		":hover": {
			color: "var(--cyan-100)",
		}
	},
	".activeLink":{
		color: "var(--blue-100)"
	}
});