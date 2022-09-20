import { Box } from "@mui/material";
import { styled } from "@mui/system";

import BgLine from "../../public/images/lines.svg";

export const BgLinesStyled = styled(Box)({
	backgroundImage: `url(${BgLine.src})`,
	backgroundRepeat: "no-repeat",
	backgroundPosition: "left",
});