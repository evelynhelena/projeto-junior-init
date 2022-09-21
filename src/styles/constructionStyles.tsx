import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const BoxStyled = styled(Box)({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	marginTop: "10rem"
});
export const TypographyStyled = styled(Typography)({
	textTransform: "uppercase"
});