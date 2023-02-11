import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Container, Rating } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

import ImgBlog from "../../../public/images/imgeblog.png";
import { Header } from "../../components/Header";
import { BannerBox, BoxApresentation, BoxBlog, BoxInfo, BoxYoutube, ContainerStyled } from "../../styles/blogStyles";

export default function Blog() {
	const [value, setValue] = useState<number | null>(2);

	return (
		<>
			{console.log(ImgBlog)}
			<Head>
				<title>JuniorInit | Blog</title>
			</Head>
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
						<BoxYoutube sx={{ justifyContent: { xs: "center", md: "flex-start" } }}>
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
			<Container>
				<Box display="flex" alignItems="center">
					<BoxBlog>
						<Box maxWidth="500px">
							<Box display="flex" gap={2} alignItems="center">
								<strong>HTML</strong>
								<Rating
									name="simple-controlled"
									size="large"
									value={value}
									onChange={(event, newValue) => {
										setValue(newValue);
									}}
								/>
							</Box>
							<p>Entenda o que é HTML e como iniciar suas primeiras páginas.</p>
							<span>icone</span>
						</Box>
					</BoxBlog>
	
					<Box>
						<Image src={ImgBlog.src} alt="Foguete" height={ImgBlog.height} width={ImgBlog.width}></Image>
					</Box>
				</Box>

			</Container>
		</>
	);
}