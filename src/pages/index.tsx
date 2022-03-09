import Head from 'next/head';
import Container from '@mui/material/Container';
import rocket from '../../public/images/rocket.gif';
import rocketFooter from '../../public/images/rocketFooter.gif';
import astronautFooter from '../../public/images/astronautFooter.gif';
import me from '../../public/images/me.jpeg';
import book from '../../public/images/book.svg';
import people from '../../public/images/people.svg';
import computer from '../../public/images/computer.svg';
import tag from '../../public/images/tag.svg';
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
import { styled } from '@mui/styles';
import { Greeting } from '../components/Greeting';
import { Info } from '../components/Info';

const SectionAbout = styled(Box)({
  padding: "10rem 0",
  display: "flex",
  justifyContent: "space-between",
  backgroundImage: 'url("../../public/images/Starts.png")',
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
});

export default function Home() {


  return (
    <>
      <Head>
        <title>JuniorInit | Home</title>
      </Head>
      <Container maxWidth="lg">
        <Box component="section" sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 3 }}>
          <Box>
            <Greeting title="FALA, DEV!" componentType="span" />
            <Typography
              variant="h1"
              component="h1"
              sx={
                {
                  fontSize: "5.375rem",
                  lineHeight: "7.063rem",
                  marginTop: "0.938rem",
                  fontWeight: "bold"
                }
              }
            >
              Notícias sobre o <br /> mundo do

              <Typography
                variant="h1"
                component="span"
                sx={{ color: "var(--purple-100)", fontWeight: "bold" }}
                pl={2}
              >
                JavaScript
              </Typography>
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
              Inscreva-se para garantir nossas atualizações
            </Typography>

            <SubscribeButton />
          </Box>
          <Image src={rocket} alt="Foguete" height={500} width={500}></Image>

        </Box>
      </Container>
      <section className={styles.bgLines}>
        <Container maxWidth="lg">
          <Box
            sx={
              {
                padding: "10rem 0",
                display: "flex",
                justifyContent: "space-between",
                backgroundImage: 'url("../../public/images/Starts.png")',
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }
            }
          >
            <Box>

              <Greeting title="Quem vós fala?" componentType="p" />

              <Typography
                variant="h2"
                component="span"
                sx={{ fontSize: "2.813rem", lineHeight: "4.375rem", fontWeight: "bold" }}
              >
                Hello world, ops Eve!
              </Typography>

              <Info
                title="Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Mi quis phasellus arcu dictum sed consequat sed lacus.
                Diam at maecenas tellus facilisis. Faucibus urna, ultrices sed amet
                curabitur auctor suspendisse etiam dolor. Nullam est donec semper nibh laoreet."
                componentType="p"
              />
              <Info
                title="Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Mi quis phasellus arcu dictum."
                componentType="p"
              />
              <Greeting title="Me siga nas redes!" componentType="p"/>

              <Box 
              className={styles.iconsSocialMedias}
              sx={
                {
                  a:{paddingRight: 1},
                  svg:{
                    height:"3.125rem",width:"3.125rem", transition: "tranform 0.5s",
                    ":hover":{
                      tranform: "rotate(20deg)",
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
            </Box>
            <Box sx={{width:"31.25rem",height: "31.25rem",img:{ borderRadius: "50%"}}}>
              <Image src={me} alt="Evelyn Helena"></Image>
            </Box>
          </Box>
          <div className={styles.boxInfos}>

            <Grid container spacing={3}>
              <Grid xs={12} md={6} mb={3} pr={3} pl={3}>
                <BoxInfos
                  title="Conteúdos práticos"
                  content="Todas as aulas são focadas no que realmente importa na hora de desenvolver um projeto real."
                  path={book}
                  altImg="Icone de livro"
                />
              </Grid>

              <Grid xs={12} md={6} mb={3} pr={3} pl={3}>
                <BoxInfos
                  title="Conteúdos práticos"
                  content="Todas as aulas são focadas no que realmente importa na hora de desenvolver um projeto real."
                  path={people}
                  altImg="Icone de livro"
                />
              </Grid>

              <Grid xs={12} md={6} mb={3} pr={3} pl={3}>
                <BoxInfos
                  title="Conteúdos práticos"
                  content="Todas as aulas são focadas no que realmente importa na hora de desenvolver um projeto real."
                  path={computer}
                  altImg="Icone de livro"
                />
              </Grid>

              <Grid xs={12} md={6} mb={3} pr={3} pl={3}>
                <BoxInfos
                  title="Conteúdos práticos"
                  content="Todas as aulas são focadas no que realmente importa na hora de desenvolver um projeto real."
                  path={tag}
                  altImg="Icone de livro"
                />
              </Grid>
            </Grid>

          </div>
        </Container>
        <div className={styles.rocketFooter}>
          <Image src={rocketFooter} width={500} height={500} alt="rocket footer"></Image>
        </div>
        <div className={styles.astronautFooter}>
          <Image src={astronautFooter} width={500} height={500} alt="rocket footer"></Image>
        </div>
      </section>
    </>
  )
}
