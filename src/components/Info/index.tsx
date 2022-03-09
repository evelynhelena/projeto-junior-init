import Typography from '@mui/material/Typography';

interface InfoProps {
    title: string;
    componentType: "p" | "span";
}


export function Info({ title, componentType }: InfoProps) {
    return (
        <Typography
            sx={
                {
                    fontSize: "1.5rem",
                    color: "var(--gray-100)",
                    maxWidth: "50rem",
                    lineHeight: "2.75rem",
                    marginTop: "1.875rem"
                }
            }
        >
            {title}
        </Typography>
    )
}