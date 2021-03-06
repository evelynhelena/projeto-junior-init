import Typography from "@mui/material/Typography";

interface GreetingProps {
    title: string;
    componentType: "p" | "span";
    mTop?: number; //Tipo não obrigatório
}

export function Greeting({ title, componentType,mTop }: GreetingProps) {
	return (
		<Typography
			component={componentType}
			sx={
				{
					fontSize:
                        "1.563rem",
					lineHeight: "3.125rem",
					color: "var(--cyan-100)",
					textTransform: "uppercase",
					marginTop: mTop
				}
			}
		>
			{title}
		</Typography>
	);
}