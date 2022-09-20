import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const BoxStyled = styled(Box)({
	padding: "24px", 
	backgroundColor: "var(--black-800)", 
	borderRadius: "24px" , 
	height:"100%"
});

export const BoxImageStyled = styled(Box)({
	backgroundColor: "var(--purple-100)",
	display: "flex",
	width: "3.875rem",
	height: "3.875rem",
	justifyContent: "center",
	alignItems: "center",
	borderRadius: "50%",
});

export const TypographyTitleSyled = styled(Typography)({
	fontSize: "2.188rem",
	lineHeight: "5rem"
});



interface GreetingStyledProps {
    component: "p" | "span";
}
  
export const TypographyContentSyled = styled(Typography, {

	shouldForwardProp: (prop) =>
		prop !== "color" && prop !== "variant" && prop !== "sx",
	name: "GreetingStyledProps",
	slot: "Root",
})<GreetingStyledProps>(() => ({
	fontSize:"1.2rem",
	lineHeight: "32px", 
	fontWeight:300
}));