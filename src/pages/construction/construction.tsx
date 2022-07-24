import { Typography } from "@mui/material";
import Image from "next/image";

import construction from "../../../public/images/screwdriver.gif";
import BoxStyled  from "./styles";
export default function Contruction() {
	return (
		<BoxStyled>
			<Typography variant="h2" sx={{ textTransform: "uppercase"}}>
                Em construção
			</Typography>
			<Image src={construction} alt="Gif de um homem contruindo uma parede" height={250} width={250}></Image>
		</BoxStyled>
	);
}