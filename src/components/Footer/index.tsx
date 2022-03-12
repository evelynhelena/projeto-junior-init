import { Box, Container, Grid } from "@mui/material";
import Link from "next/link";
import { IconsComponent } from "../IconsComponent";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
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
    ]

    return (
        <Container maxWidth="lg" sx={{ marginTop: 12, marginBottom: 2 }}>
            <Box component="section">
                <Grid container spacing="3">

                    {dataFooter.map((el) => (
                        <Grid item={true} key={el.id} xs={12} md={4} sx={{ textAlign: "center" }}>
                            <Box sx={
                                {
                                    span: {
                                        display: 'block',
                                        fontSize: '1.563rem',
                                        lineHeight: '3.125',
                                        color: "var(--cyan-100)"
                                    },
                                    a: {
                                        fontSize: "1rem",
                                        lineHeight: "1.5rem",
                                        fontWeight: '300',
                                    }
                                }

                            }>
                                <span>{el.span}</span>
                                <Link href={el.slug}>
                                    <a>{el.link}</a>
                                </Link>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box sx={{ margin: '3rem 0', padding: '1px', backgroundColor: 'var(--white)' }}></Box>

            <Box>
                <Grid container spacing="3" sx={{textAlign: 'center'}}>
                    <Grid item={true} xs={12} md={6} mb={2}>
                        <Box sx={
                            {
                                span: {
                                    fontSize: '1.5rem',
                                    fontWeight: '300',
                                    paddingRight: 2,
                                },
                                a: {
                                    paddingRight: 2,
                                    svg: {
                                        fontSize: '2.5rem',
                                    }
                                }
                            }

                        }>
                            <span>Siga-nos nas redes sociais</span>
                        </Box>
                    </Grid>
                    <Grid item={true} xs={12} md={6}>
                        <Box sx={
                            {
                                span: {
                                    fontSize: '1.5rem',
                                    fontWeight: '300',
                                    paddingRight: 2,
                                },
                                a: {
                                    paddingRight: 2,
                                    svg: {
                                        fontSize: '2.5rem',
                                    }
                                }
                            }

                        }>
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
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}