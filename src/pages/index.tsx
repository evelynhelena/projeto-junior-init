import Head from 'next/head';
import { GetStaticProps } from "next"
import Container from '@mui/material/Container';
import rocketFooter from '../../public/images/rocketFooter.gif';
import astronautFooter from '../../public/images/astronautFooter.gif';
import Image from 'next/image';
import styles from '../styles/home.module.scss';
import { SubscribeButton } from '../components/SubscribeButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconsComponent } from '../components/IconsComponent';
import { BoxInfos } from '../components/BoxInfos';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Greeting } from '../components/Greeting';
import { Paragraph } from '../components/Paragraph';
import { getPrismicClient } from '../services/prismic';
import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";

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

export default function Home({ homeContent, cardData }: HomeProps) {
  const data = homeContent[0];
  console.log(data)
  return (
    <>
      <Head>
        <title>JuniorInit | Home</title>
      </Head>
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 3 }}>
          <Box>
            <Greeting title={data.greeting} componentType="span" />
            <Typography
              variant="h1"
              component="h1"
              sx={
                {
                  fontSize: "5.375rem",
                  lineHeight: "7.063rem",
                  marginTop: "0.938rem",
                  fontWeight: "bold",
                  span: {
                    color: "var(--purple-100)"
                  }
                }
              }
            >
              {data.title} <br /><span> {data.titleDiferentColor}</span>
            </Typography>
            <Typography
              component="p"
              sx={
                {
                  fontSize: "1.5rem",
                  color: "var(--gray-100)",
                  maxWidth: "50rem",
                  lineHeight: "2.75rem",
                  marginTop: "1.875rem"
                }
              }
            >
              {data.call}
            </Typography>

            <SubscribeButton />
          </Box>
          <Box sx={{
            display: {
              xs: 'none', md: 'flex',
            }
          }}>

            <Image src={data.urlImage} alt="Foguete" height={500} width={500}></Image>
          </Box>

        </Box>
      </Container>
      <Box className={styles.bgLines}>
        <Container maxWidth="lg" sx={{ marginTop: "6rem" }}>
          <Grid container spacing="3" item={true}>
            <Grid item={true} xs={12} md={7} mb={2} pr={3}>

              <Greeting title={data.apresentation} componentType="p" />

              <Typography
                variant="h2"
                component="span"
                sx={{ fontSize: "2.813rem", lineHeight: "4.375rem", fontWeight: "bold" }}
              >
                {data.myname}
              </Typography>

              <Paragraph
                title={data.abouttext}
              />

              <Greeting title={data.folow} componentType="p" mTop={4} />

              <Box
                sx={
                  {
                    marginTop: 1,
                    marginBottom: 5,
                    a: { paddingRight: 1 },
                    svg: {
                      height: "3.125rem", width: "3.125rem",
                      ":hover": {
                        color: "var(--cyan-100)",
                      }
                    }
                  }
                }
              >
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
              </Box>
            </Grid>
            <Grid item={true} xs={12} md={5} sx=
              {
                {
                  img: { borderRadius: "15%" },
                  marginBottom: "10rem"
                }
              }
            >
              <Image src={data.imageMe} width={500} height={500} alt="Evelyn Helena"></Image>
            </Grid>
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

        </Container>
        <Box
          sx={
            {
              width: "300px",
              height: "300px",
              position: "absolute",
              right: 0, bottom: "-135%",
              display: {
                xs: 'none',
                md: 'flex',
              }
            }

          }
        >

          <Image src={rocketFooter} alt="rocket footer"></Image>
        </Box>
        <Box
          sx={
            {
              width: "300px",
              height: "300px",
              position: "absolute",
              display: { xs: 'none', md: 'flex' }
            }
          }
        >
          <Image src={astronautFooter} alt="rocket footer"></Image>
        </Box>
      </Box>
    </>
  )
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
  const response = await prismic.query<any>([
    Prismic.predicates.at('document.type', 'home')
  ], {
    pageSize: 100,
  });

  const homeContent = response.results.map(hc => {
    console.log(hc)
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
    }
  })

  const cardData = response.results[0].data.cards.map((card: CardData, index: number) => {
    return {
      titlecard: card.titlecard[0].text,
      cardContent: card.cardcontent[0].text,
      iconFile: card.iconfile.url,
      alt: card.iconfile.alt,
      id: index,
    }
  })

  return { props: { homeContent, cardData } }
}