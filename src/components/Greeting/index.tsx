import { GreetingStyled } from "./styles";

interface GreetingProps {
    title: string;
    componentType: "p" | "span";
    mtop?: string; 
}

export function Greeting({ title, componentType ,mtop}: GreetingProps) {
	return (
		<GreetingStyled component={componentType} mtop={mtop}>
			{title}
		</GreetingStyled>
	);
}