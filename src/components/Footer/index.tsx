import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Container, Grid } from "@mui/material";
import Link from "next/link";

import { IconsComponent } from "../IconsComponent";
import { BoxDividerStyled, BoxFolowStyled, BoxLinkStyled, GridStyled } from "./styles";
export function Footer() {

	const dataFooter = [
		{
			id: 1,
			span: "Sobre",
			link: "Quem Somos",
			slug: "#"
		},
		{
			id: 2,
			span: "Tutoriais",
			link: "Tudo sobre JS",
			slug: "#"
		},
		{
			id: 3,
			span: "Fala com a gente",
			link: "juniorinit@gmail.com",
			slug: "#"
		}
	];

	return (
		<Container maxWidth="lg" sx={{ marginTop: 12, marginBottom: 2 }}>
			<Box component="section">
				<Grid container spacing="3">

					{dataFooter.map((el) => (
						<GridStyled item={true} key={el.id} xs={12} md={4}>
							<BoxLinkStyled>
								<span>{el.span}</span>
								<Link href={el.slug}>
									<a>{el.link}</a>
								</Link>
							</BoxLinkStyled>
						</GridStyled>
					))}
				</Grid>
			</Box>
			
			<BoxDividerStyled/>

			<Box>
				<GridStyled container spacing="3">
					<Grid item={true} xs={12} md={6} mb={2}>
						<BoxFolowStyled>
							<span>Siga-nos nas redes sociais</span>
						</BoxFolowStyled>
					</Grid>
					<Grid item={true} xs={12} md={6}>
						<BoxFolowStyled>
							<IconsComponent slug="https://www.linkedin.com/in/evelyn-helena" section="footer">
								<LinkedInIcon />
							</IconsComponent>
							<IconsComponent slug="https://www.instagram.com/evelynhelena13/" section="footer">
								<InstagramIcon />
							</IconsComponent>
							<IconsComponent slug="https://www.youtube.com/channel/UCWp8rdXvy9nCX4MhSsfXJbw" section="footer">
								<YouTubeIcon />
							</IconsComponent>
							<IconsComponent slug="https://github.com/evelynhelena" section="footer">
								<GitHubIcon />
							</IconsComponent>
						</BoxFolowStyled>
					</Grid>
				</GridStyled>
			</Box>
		</Container>
	);
}