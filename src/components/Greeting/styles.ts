import { Typography } from "@mui/material";
import { styled } from "@mui/system";

interface GreetingStyledProps {
    mtop: string;
    component: "p" | "span";
}
  
export const GreetingStyled = styled(Typography, {

	shouldForwardProp: (prop) =>
		prop !== "color" && prop !== "variant" && prop !== "sx" && prop !== "component",
	name: "GreetingStyledProps",
	slot: "Root",
})<GreetingStyledProps>(({mtop}) => ({
	fontSize:"1.563rem",
	lineHeight: "3.125rem",
	color: "var(--cyan-100)",
	textTransform: "uppercase",
	marginTop: mtop
}));