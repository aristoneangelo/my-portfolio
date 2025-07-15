import { styled, Typography } from "@mui/material";
import type { ReactNode } from "react";


interface StyledSectionTitleProps {
  children: ReactNode;
  underlineWidth?: string;    
  underlineSide?: 'left' | 'right';
}

// Componente tipado
const StyledSectionTitle = ({
  children,
  underlineWidth = '50%',
  underlineSide = 'left',
}: StyledSectionTitleProps) => {

  // Styled component recebe props via função
  const StyledTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.secondary.main,
    position: 'relative',
    display: 'inline-block',
    textAlign: 'left',
    [`&::after`]: {
      content: '""',
      position: 'absolute',
      bottom: 0,
      [underlineSide]: 0, // aplica left ou right dinamicamente
      width: underlineWidth,
      height: '2px',
      backgroundColor: theme.palette.secondary.main,
    },
  }));

  return (
    <StyledTypography variant="h6" gutterBottom>
      {children}
    </StyledTypography>
  );
};

export default StyledSectionTitle;