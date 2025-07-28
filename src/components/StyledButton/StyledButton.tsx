import { styled} from '@mui/material/styles';
import type { ReactNode } from 'react';
  
interface StyledButtonProps {
    children: ReactNode;
    onclick: () => void;
}
const StyledButton = ({children, onclick}: StyledButtonProps) => {

    const StyledButton = styled("button")(({theme}) => ({
        backgroundColor: "transparent",
        borderRadius: 50,
        border: `2px solid ${theme.palette.secondary.main}`,
        color: theme.palette.secondary.main,
        padding: "5px 15px",
        width: "100%",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        ":hover": {
            backgroundColor: "#ffffffff",
            color: "#0b022fff",
        }
    }))
    return (
        <>
            <StyledButton onClick={onclick}>
                {children}
            </StyledButton>
        </>
    )
}

export default StyledButton;