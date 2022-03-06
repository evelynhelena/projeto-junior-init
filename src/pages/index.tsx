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
export default function Home() {
  return (
    <>
      <Head>
        <title>JuniorInit | Home</title>
      </Head>
      <Container maxWidth="lg" className={styles.container}>
        <section className={styles.sectionSubscribe}>
          <div className={styles.content}>
            <p className={styles.greeting}>FALA, DEV!</p>
            <h1>Notícias sobre o <br /> mundo do <span>JavaScript</span></h1>
            <p className={styles.info}>Inscreva-se para garantir nossas atualizações</p>

            <SubscribeButton />
          </div>
          <Image src={rocket} alt="Foguete" height={500} width={500}></Image>

        </section>
      </Container>
      <section className={styles.bgLines}>
        <Container maxWidth="lg" className={styles.container}>
          <div className={styles.sectionAbout}>
            <div className={styles.apresentation}>
              <p className={styles.greeting}>Quem vós fala?</p>
              <h2>Hello world, ops Eve!</h2>
              <p className={styles.info}>Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Mi quis phasellus arcu dictum sed consequat sed lacus.
                Diam at maecenas tellus facilisis. Faucibus urna, ultrices sed amet
                curabitur auctor suspendisse etiam dolor. Nullam est donec semper nibh laoreet.
              </p>
              <p className={styles.info}>Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Mi quis phasellus arcu dictum.
              </p>
              <p className={`${styles.greeting} ${styles.follow}`}>Me siga nas redes!</p>
              <div className={styles.iconsSocialMedias}>
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
              </div>
            </div>
            <div className={styles.imageMe}>
              <Image src={me} alt="Evelyn Helena"></Image>
            </div>
          </div>
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
