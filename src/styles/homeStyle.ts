import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const BoxAboutBlogStyled = styled(Box)({
	display: "flex", 
	alignItems: "center", 
	justifyContent: "space-between", 
	marginTop: "3rem"
});

export const TypographyAboutBlogStyled = styled(Typography)({
	fontSize: "5rem",
	lineHeight: "7.063rem",
	marginTop: "0.938rem",
	fontWeight: "bold",
	span: {
		color: "var(--purple-100)"
	}
});

interface SubscribeInfoStyledProps {
    component: "p" | "span";
}
  
export const SubscribeInfoStyled = styled(Typography, {
	shouldForwardProp: (prop) =>
		prop !== "color" && prop !== "variant" && prop !== "sx",
	name: "SubscribeInfoStyledProps",
	slot: "Root",
})<SubscribeInfoStyledProps>(() => ({
	fontSize: "1.5rem",
	color: "var(--gray-100)",
	maxWidth: "50rem",
	lineHeight: "2.75rem",
	marginTop: "1.875rem"
}));