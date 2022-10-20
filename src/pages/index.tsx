import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import Prismic from "@prismicio/client";
import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { RichText } from "prismic-dom";

import astronautFooter from "../../public/images/astronautFooter.gif";
import rocketFooter from "../../public/images/rocketFooter.gif";
import { BoxInfos } from "../components/BoxInfos";
import { Greeting } from "../components/Greeting";
import { Header } from "../components/Header";
import { IconsComponent } from "../components/IconsComponent";
import { Paragraph } from "../components/Paragraph";
import { SubscribeButton } from "../components/SubscribeButton";
import { getPrismicClient } from "../services/prismic";
import { BgLinesStyled } from "../styles/GlobalStyles";
import { BoxAboutBlogStyled, BoxImageAstronautStyled, BoxImageRocketStyled, BoxSocialmidiasStyled, ContainerStyled, GridImageMeStyled, SubscribeInfoStyled, TypographyAboutBlogStyled, TypographyMyNameStyled } from "../styles/homeStyle";

interface HomeContent {
  slug: string;
  greeting: string;
  title: string;
  titleDiferentColor: string;
  call: string;
  urlImage: string;
  abouttext: string;
  folow: string;
  apresentation: string;
  myname: string;
  imageMe: string;
}

interface HomeProps {
  homeContent: HomeContent[];
  cardData: CardProps[];
}

interface CardProps {
  titlecard: string;
  cardContent: string;
  iconFile: string;
  alt: string;
  id: number;
}

export default function Home({ homeContent, cardData}: HomeProps) {
	const data = homeContent[0];

	return (
		<>
			<Head>
				<title>JuniorInit | Home</title>
			</Head>
			<Header />
			<Container maxWidth="lg">
				<BoxAboutBlogStyled>
					<Box>
						<Greeting title={data.greeting} componentType="span" />
						<TypographyAboutBlogStyled variant="h1">
							{data.title} <br /><span> {data.titleDiferentColor}</span>
						</TypographyAboutBlogStyled>
						<SubscribeInfoStyled component="p">
							{data.call}
						</SubscribeInfoStyled>

						<SubscribeButton />
					</Box>
					<Box sx={{
						display: {
							xs: "none", md: "flex",
						}
					}}>

						<Image src={data.urlImage} alt="Foguete" height={500} width={500}></Image>
					</Box>

				</BoxAboutBlogStyled>
			</Container>
			<BgLinesStyled>
				<ContainerStyled maxWidth="lg">
					<Grid container spacing="3" item={true}>
						<Grid item={true} xs={12} md={7} mb={2} pr={3}>

							<Greeting title={data.apresentation} componentType="p" />

							<TypographyMyNameStyled variant="h2">
								{data.myname}
							</TypographyMyNameStyled>

							<Paragraph
								title={data.abouttext}
							/>

							<Greeting title={data.folow} componentType="p" mtop="4rem"/>

							<BoxSocialmidiasStyled>
								<IconsComponent slug="https://www.linkedin.com/in/evelyn-helena" section="about">
									<LinkedInIcon />
								</IconsComponent>
								<IconsComponent slug="https://www.instagram.com/evelynhelena13/" section="about">
									<InstagramIcon />
								</IconsComponent>
								<IconsComponent slug="https://www.youtube.com/channel/UCWp8rdXvy9nCX4MhSsfXJbw" section="about">
									<YouTubeIcon />
								</IconsComponent>
								<IconsComponent slug="https://github.com/evelynhelena" section="about">
									<GitHubIcon />
								</IconsComponent>
							</BoxSocialmidiasStyled>
						</Grid>
						<GridImageMeStyled item={true} xs={12} md={5}>
							<Image src={data.imageMe} width={500} height={500} alt="Evelyn Helena"></Image>
						</GridImageMeStyled>
					</Grid>

					<Box>
						<Grid container spacing={3}>
							{cardData.map(card => (
								<Grid item={true} xs={12} md={6} key={card.id}>
									<BoxInfos
										title={card.titlecard}
										content={card.cardContent}
										path={card.iconFile}
										altImg={card.alt}
									/>
								</Grid>
							))}
						</Grid>
					</Box>

				</ContainerStyled>
				<BoxImageRocketStyled sx={{	display: {xs: "none", md: "flex",}}}>
					<Image src={rocketFooter} alt="Rocket footer"></Image>
				</BoxImageRocketStyled>
				
				<BoxImageAstronautStyled sx={{display: { xs: "none", md: "flex" }}}>
					<Image src={astronautFooter} alt="Astronaut footer"></Image>
				</BoxImageAstronautStyled>
			</BgLinesStyled>
		</>
	);
}

interface CardData {
  text: string;
  titlecard: CardData[];
  cardcontent: CardData[];
}

interface CardData {
  text: string;
  iconfile: {
    url: string;
    alt: string;
    id: number;
  };
}

export const getStaticProps: GetStaticProps = async () => {
	const prismic = getPrismicClient();
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const response = await prismic.query<any>([
		Prismic.predicates.at("document.type", "home")
	], {
		pageSize: 100,
	});

	const homeContent = response.results.map(hc => {
		return {
			slug: hc.id,
			greeting: hc.data.greeting[0].text,
			title: hc.data.title[0].text,
			titleDiferentColor: hc.data.titlecolor[0].text,
			call: hc.data.call[0].text,
			urlImage: hc.data.rocketprinciple.url,
			abouttext: RichText.asHtml(hc.data.abouttext),
			folow: hc.data.folow[0].text,
			apresentation: hc.data.apresentation[0].text,
			myname: hc.data.myname[0].text,
			imageMe: hc.data.imageme.url,
		};
	});

	const cardData = response.results[0].data.cards.map((card: CardData, index: number) => {
		return {
			titlecard: card.titlecard[0].text,
			cardContent: card.cardcontent[0].text,
			iconFile: card.iconfile.url,
			alt: card.iconfile.alt,
			id: index,
		};
	});

	return { props: { homeContent, cardData } };
};