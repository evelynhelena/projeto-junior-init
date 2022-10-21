import { Box,Container } from "@mui/material";
import { styled } from "@mui/system";

import BannerBlog from "../../public/images/bannerBlog.svg";

export const BannerBox = styled(Box)({
	backgroundImage: `url(${BannerBlog.src})`,
	backgroundRepeat: "no-repeat",
	backgroundSize:"cover",
	padding: "0 0 10rem 0",
});

export const ContainerStyled = styled(Container)({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
});


export const BoxApresentation = styled(Box)({
	display: "flex",
	marginTop: "8rem",
	flexDirection: "column",
});

export const BoxInfo = styled(Box)({
	textAlign: "center",
	h1:{
		fontWeight: "bold",
		fontSize: "4rem",
		lineHeight: "6rem",
	
		span:{
			color: "var(--cyan-50)"
		}
	}
});

export const BoxYoutube = styled(Box)({
	display: "flex",
	gap: "1rem",
	alignItems: "center",
	marginTop: "0.125rem",

	".youtubeIcon":{
		padding: "0.5rem",
		borderRadius: "10px",
		backgroundColor: "var(--purple-100)",

		svg:{
			fontSize: "3.5rem"
		}
	},

	".youtubeInfo":{
		display: "flex",
		flexDirection: "column",

		strong: {
			fontWeight: "bold", 
			fontSize: "3rem",
			lineHeight: "4rem",
		},

		span:{
			fontWeight: "normal", 
			fontSize: "1.3rem",
		}
	}
});