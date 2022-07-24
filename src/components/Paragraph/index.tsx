
import { Box } from "@mui/material";

interface InfoProps {
    title: string;
}


export function Paragraph({ title }: InfoProps) {
	return (
		<Box
			sx={
				{
					fontSize: "1.5rem",
					color: "var(--gray-100)",
					lineHeight: "2.75rem",
					marginTop: "1.875rem"
				}
			}
			dangerouslySetInnerHTML = {{__html: title}}
		>
		</Box>
	);
}