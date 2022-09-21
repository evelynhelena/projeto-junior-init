import { Box, Container, Grid, Typography } from "@mui/material";
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

export const ContainerStyled = styled(Container)({
	marginTop: "6rem"
});

export const TypographyMyNameStyled = styled(Typography)({
	fontSize: "2.813rem", 
	lineHeight: "4.375rem", 
	fontWeight: "bold"
});

export const BoxSocialmidiasStyled = styled(Box)({
	marginTop: 1,
	marginBottom: 5,
	a: { paddingRight: 1 },
	svg: {
		height: "3.125rem", width: "3.125rem",
		":hover": {
			color: "var(--cyan-100)",
		}
	}
});

export const GridImageMeStyled = styled(Grid)({
	img: { borderRadius: "15%" },
	marginBottom: "10rem"
});

export const BoxImageRocketStyled = styled(Box)({
	width: "300px",
	height: "300px",
	position: "absolute",
	right: 0, 
	bottom: "-135%",
});

export const BoxImageAstronautStyled = styled(Box)({
	width: "300px",
	height: "300px",
	position: "absolute",
});

