import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box } from "@mui/material";

import { Header } from "../../components/Header";
import { BannerBox, BoxApresentation, BoxInfo, BoxYoutube, ContainerStyled } from "../../styles/blogStyles";

export default function Blog() {
	return (
		<BannerBox>
			<Header />
			<ContainerStyled>
				<BoxApresentation>
					<BoxInfo>
						<h1> 
							<span>Aqui você encontra </span>
							<br />
					O MELHOR CONTEÚDO!
						</h1>
					</BoxInfo>
					<BoxYoutube>
						<Box className="youtubeIcon">
							<YouTubeIcon/>
						</Box>
						<Box className="youtubeInfo">
							<strong>30+</strong>
							<span>Aulas no youtube</span>
						</Box>
					</BoxYoutube>
				</BoxApresentation>
			</ContainerStyled>
		</BannerBox>
	);
}