import { Box, Typography } from "@mui/material";
import Image from "next/image";

import construction from "../../public/images/screwdriver.gif";
export default function Contruction() {
	return (
		<Box sx={
			{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				marginTop: "10rem"
				//height: '50vh'
			}
		}>

			<Typography variant="h2" sx={{ textTransform: "uppercase"}}>
                Em construção
			</Typography>
			<Image src={construction} alt="Gif de um homem contruindo uma parede" height={250} width={250}></Image>
		</Box>
	);
}