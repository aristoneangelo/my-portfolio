

import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MuiCardMedia from "@mui/material/CardMedia";
import { alpha, Box, Button, styled } from "@mui/material";
import theme from "../../theme";
import GitHubIcon from '@mui/icons-material/GitHub';
import { color } from "motion";
import { red } from "@mui/material/colors";

interface CardMediaProps{
    img: string,
    alt: string
    title: string,
    desc: string,
    repository: string,
    skills: [],
}

const CardMedia = ({img, alt, title, desc, repository, skills}: CardMediaProps) => {
    //const StyledCardImg = styled(MuiCardMedia)(({theme}) => ({
    const primary = theme.palette.primary;
        
    //}))
    const StyledCardButton = styled(Button)(({theme}) => ({
        background:  alpha(primary.light, 0.5),
        borderRadius: 5,
        color: alpha(primary.contrastText, 0.8),
        padding: 4,
        fontFamily: "inherit",
        fontSize: 10,
    }))
    return (
    <>
        <Card sx={{ 
            maxWidth: 372, 
            background: theme.palette.primary.main, 
            border: `1px solid ${alpha(primary.contrastText, 0.2)}`,
            borderRadius: 5,
            paddingBottom:2,
            
            width: '100%',
            filter: 'brightness(0.8)',
            transition: 'filter 0.3s ease',
            '&:hover': {
                filter: 'brightness(1)'
            }
            }} >
            <CardActionArea>
                <MuiCardMedia
                    component="img"
                    height="160"
                    image={img}
                    alt={alt}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" fontFamily={"cursive"} color={primary.contrastText} component="div" >
                        {title}
                    </Typography>
                    <Typography variant="body2" fontFamily={"monospace"} color={alpha(primary.contrastText, 0.5)} >
                        {desc}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {skills.map(skill =>
                    <StyledCardButton size="small" variant="outlined">
                    {skill}
                    </StyledCardButton>
                )}
            </CardActions>
                <Box display={"flex"} paddingLeft={1}>
                    <Button size="small" color="secondary" href={repository} startIcon={<GitHubIcon/>} target="_blank" rel="noopener noreferrer">
                    View Code
                    </Button>
                </Box>
        </Card>
    </>
)
}

export default CardMedia;