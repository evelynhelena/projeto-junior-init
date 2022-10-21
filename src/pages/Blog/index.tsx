import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box } from "@mui/material";

import { Header } from "../../components/Header";
import { BannerBox, BoxApresentation, BoxInfo, BoxYoutube, ContainerStyled } from "../../styles/blogStyles";

export default function Blog() {
	return (
		<>

			<BannerBox>
				<Header />
				<ContainerStyled>
					<BoxApresentation sx={
						{ 
							marginTop: { xs: "2rem", md: "8rem" } 
						}}>
						<BoxInfo>
							<h1>
								<span>Aqui você encontra </span>
								<br />
							MELHOR CONTEÚDO!
							</h1>
						</BoxInfo>
						<BoxYoutube sx={{justifyContent: {xs:"center", md:"flex-start"}}}>
							<Box className="youtubeIcon">
								<YouTubeIcon />
							</Box>
							<Box className="youtubeInfo">
								<strong>30+</strong>
								<span>Aulas no youtube</span>
							</Box>
						</BoxYoutube>
					</BoxApresentation>
				</ContainerStyled>
			</BannerBox>
			<h1>Ola muando</h1>
		</>
	);
}