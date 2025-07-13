import { alpha, Card, styled } from "@mui/material";
import type { ReactNode } from "react";

interface CardSkillProps {
    children: ReactNode;
    // Define any props if needed
}
const CardSkill = ({ children}: CardSkillProps) => {

    const StyledCard = styled(Card)(({theme}) => ({
        border: `1px solid ${alpha(theme.palette.primary.contrastText, 0.1)}`,
        backgroundColor: alpha(theme.palette.primary.contrastText, 0.7),
        color: theme.palette.primary.main,
        padding: theme.spacing(6),
        textAlign: "center",
        width: "30%",
        height: "30%",
        
    }));

    return (
        <>
            <StyledCard variant="outlined">
                {children}
            </StyledCard>
        </> 
    )
}

export default CardSkill;

