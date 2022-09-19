import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const SubscribeButtonStyled = styled(Button)({
	marginTop: 3,
	width: "18.75rem",
	fontSize: "1.25rem",
	height: "5rem",
	fontWeight: "bold",
	backgroundColor: "var(--purple-100)",
	":hover": {
		backgroundColor: "var(--cyan-100)",
		boxShadow: "0px 6px 11px -2px rgba(78, 160, 171)",
	}
});