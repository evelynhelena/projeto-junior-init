import Image from 'next/image';
import { Box, Typography } from '@mui/material';

interface BoxInfosProps {
    path: string;
    title: string;
    content: string;
    altImg: string;
}

export function BoxInfos({ path, title, content, altImg }: BoxInfosProps) {
    return (
        <Box sx={{ padding: 3, backgroundColor: "var(--black-800)", borderRadius: 3 }}>
            <Box sx={
                {
                    backgroundColor: "var(--purple-100)",
                    display: "flex",
                    width: "3.875rem",
                    height: "3.875rem",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "50%",
                }
            }
            >
               <Image alt={altImg} src={path} width={46} height={40.77}></Image>
            </Box>
            <Typography variant="h2"
                sx={
                    {
                        fontSize: "2.188rem",
                        lineHeight: "5rem"
                    }
                }
            >
                {title}
            </Typography>
            <Typography component="p"  sx={
                {
                    fontSize:"1.2rem",
                    lineHeight: 2, 
                    fontWeight:300

                }
            }>
                {content}
            </Typography>
        </Box>
    )
}