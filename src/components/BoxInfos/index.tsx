import Image from "next/image";

import { BoxImageStyled, BoxStyled, TypographyContentSyled, TypographyTitleSyled} from "./styles";

interface BoxInfosProps {
    path: string;
    title: string;
    content: string;
    altImg: string;
}

export function BoxInfos({ path, title, content, altImg }: BoxInfosProps) {
	return (
		<BoxStyled>
			<BoxImageStyled>
				<Image alt={altImg} src={path} width={46} height={40.77}></Image>
			</BoxImageStyled>
			<TypographyTitleSyled variant="h2">
				{title}
			</TypographyTitleSyled>
			<TypographyContentSyled component="p">
				{content}
			</TypographyContentSyled>
		</BoxStyled>
	);
}