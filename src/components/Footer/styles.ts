import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";

export const GridStyled = styled(Grid)({
	textAlign: "center"
});

export const BoxLinkStyled = styled(Box)({
	span: {
		display: "block",
		fontSize: "1.563rem",
		lineHeight: "3.125",
		color: "var(--cyan-100)"
	},
	a: {
		fontSize: "1rem",
		lineHeight: "1.5rem",
		fontWeight: "300",
	}
});

export const BoxDividerStyled = styled(Box)({
	margin: "3rem 0", 
	padding: "1px", 
	backgroundColor: "var(--white)"
});
export const BoxFolowStyled = styled(Box)({
	span: {
		fontSize: "1.5rem",
		fontWeight: "300",
		paddingRight: "20px",
	},
	a: {
		paddingRight: "20px",
		svg: {
			fontSize: "2.5rem",
		}
	}
});