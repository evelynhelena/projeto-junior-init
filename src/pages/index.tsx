import Head from 'next/head';
import Container from '@mui/material/Container';
import rocket from '../../public/images/rocket.gif';
import Image from 'next/image';
import styles from '../styles/home.module.scss';
import { SubscribeButton } from '../components/SubscribeButton';
export default function Home() {
  return (
    <>
      <Head>
        <title>JuniorInit | Home</title>
      </Head>
      <Container maxWidth="xl" className={styles.container}>
        <div className={styles.content}>
          <p className={styles.greeting}>FALA, DEV!</p>
          <h1>Notícias sobre o <br /> mundo do <span>JavaScript</span></h1>
          <p className={styles.info}>Inscreva-se para garantir nossas atualizações</p>

          <SubscribeButton/>
        </div>
        <div>
          <Image src={rocket} alt="Foguete" height={500} width={500}></Image>
        </div>
      </Container>
    </>
  )
}
