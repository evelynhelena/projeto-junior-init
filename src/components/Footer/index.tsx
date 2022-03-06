import { Container } from "@mui/material";
import Link from "next/link";
import { IconsComponent } from "../IconsComponent";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import styles from "./footer.module.scss";
export function Footer() {
    return (
        <Container maxWidth="lg" className={styles.container}>
            <section className={styles.footer}>
                <div className={styles.ancoras}>
                    <div className={styles.invidualAncora}>
                        <span>Sobre</span>
                        <Link href="#">
                            <a>Quem somos</a>
                        </Link>
                    </div>
                    <div className={styles.invidualAncora}>
                        <span>Tutoriais</span>
                        <Link href="#">
                            <a>Tudo sobre JS</a>
                        </Link>
                    </div>
                    <div className={styles.invidualAncora}>
                        <span>Fala com a gente</span>
                        <Link href="#">
                            <a>juniorinit@gmail.com</a>
                        </Link>
                    </div>
                </div>
                <div className={styles.divader}></div>
                <div className={styles.socialMedias}>
                    <div>

                        <span>Siga-nos nas redes sociais</span>
                    </div>
                    <div>
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
                    </div>
                </div>
            </section>
        </Container>
    )
}