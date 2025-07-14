import { styled } from "@mui/material";

interface StyledSkillsIconsProps {
    src: string;
}

const StyledSkillIcon = ({ src }: StyledSkillsIconsProps) => {

    const SkillIcon = styled("img")(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "25%",
        height: "25%",
        padding: theme.spacing(2),
        borderRadius: theme.shape.borderRadius,
        backgroundColor: "transparent",
        boxShadow: theme.shadows[1],

    }));

    return (
        <>
            <SkillIcon src={src}  />
        </>
    )
}

export default StyledSkillIcon;

