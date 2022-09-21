import { ParagraphStyled } from "./styles";

interface InfoProps {
    title: string;
}


export function Paragraph({ title }: InfoProps) {
	return (
		<ParagraphStyled dangerouslySetInnerHTML = {{__html: title}}/>
	);
}