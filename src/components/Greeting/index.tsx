import { GreetingStyled } from "./styles";

interface GreetingProps {
    title: string;
    componentType: "p" | "span";
    mTop?: number; 
}

export function Greeting({ title, componentType ,mTop}: GreetingProps) {
	return (
		<GreetingStyled component={componentType} mTop={mTop}>
			{title}
		</GreetingStyled>
	);
}