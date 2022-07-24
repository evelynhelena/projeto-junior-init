import Image from "next/image";

import {BoxContent, TitleCard, IconContent, SubTitleCard} from "./styles";



interface BoxInfosProps {
    path: string;
    title: string;
    content: string;
    altImg: string;
}

export function BoxInfos({ path, title, content, altImg }: BoxInfosProps) {
	return (
		<BoxContent>
			<IconContent>
				<Image alt={altImg} src={path} width={46} height={40.77}></Image>
			</IconContent>
			<TitleCard variant="h2">
				{title}
			</TitleCard>
			<SubTitleCard>
				{content}
			</SubTitleCard>
		</BoxContent>
	);
}