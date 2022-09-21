import Head from "next/head";
import Image from "next/image";


import construction from "../../../public/images/screwdriver.gif";
import { BoxStyled, TypographyStyled } from "../../styles/constructionStyles";
export default function Contruction() {
	return (
		<>
			<Head>
				<title>JuniorInit | Construção</title>
			</Head>
			<BoxStyled>
				<TypographyStyled variant="h2">
                Em construção
				</TypographyStyled>
				<Image src={construction} alt="Gif de um homem contruindo uma parede" height={250} width={250}></Image>
			</BoxStyled>
		</>
	);
		
}