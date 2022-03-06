import Head from 'next/head';
import Container from '@mui/material/Container';
import rocket from '../../public/images/rocket.gif';
import me from '../../public/images/me.jpeg';
import Image from 'next/image';
import styles from '../styles/home.module.scss';
import { SubscribeButton } from '../components/SubscribeButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from 'next/link';
export default function Home() {
  return (
    <>
      <Head>
        <title>JuniorInit | Home</title>
      </Head>
      <Container maxWidth="xl" className={styles.container}>
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
        <Container maxWidth="xl" className={styles.container}>
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
                <Link href="#">
                  <a><LinkedInIcon /></a>
                </Link>
                <Link href="#">
                  <a><InstagramIcon /></a>
                </Link>
                <Link href="#">
                  <a><YouTubeIcon /></a>
                </Link>
              </div>
            </div>
            <div className={styles.imageMe}>
              <Image src={me} alt="Evelyn Helena"></Image>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
