import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export const BoxContent = styled(Box)`
    padding: 1.25rem;
    background-color: var(--black-800);
    border-radius: 0.625rem;
    height:100%;
`;

export const IconContent = styled(Box)`
    background-color: var(--purple-100);
	display: flex;
	width: 3.875rem;
	height: 3.875rem;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
`;

export const TitleCard = styled(Typography)`
   font-size: 2.188rem;
   line-height: 5rem;
`;

export const SubTitleCard = styled(Typography)`
   font-size:1.2rem;
   line-height: 2rem; 
   font-weight:300;
`;

