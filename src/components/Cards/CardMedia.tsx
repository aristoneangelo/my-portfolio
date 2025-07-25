
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MuiCardMedia from "@mui/material/CardMedia";
import { styled } from "@mui/material";

interface CardMediaProps{
    img: string,
    alt: string
    title: string,
    desc: string,
    skills: [],
}

const CardMedia = ({img, alt, title, desc, skills }: CardMediaProps) => {
    //const StyledCardImg = styled(MuiCardMedia)(({theme}) => ({
        
    //}))
    const StyledCardButton = styled("Button")(({theme}) => ({
        background: theme.palette.primary.contrastText,
        borderRadius: 10,
        color: theme.palette.primary.main,
        padding: 4,
        fontFamily: "sans-serif",
        fontSize: 12,
        border: '1px solid ${theme.palette.primary.main}'
    }))
    return (
    <>
        <Card sx={{ maxWidth: 345, background:"#000000ff "}} padding={2}>
            <CardActionArea 
                sx={{
                    filter: 'brightness(0.5)',
                    transition: 'filter 0.3s ease',
                    '&:hover': {
                    filter: 'brightness(1)'
                    }
                    }}>
                <MuiCardMedia
                    component="img"
                    height="180"
                    image={img}
                    alt={alt}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {desc}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {skills.map(skill =>
                    <StyledCardButton size="small" color="primary" >
                    {skill}
                    </StyledCardButton>
                )}
            </CardActions>
        </Card>
    </>
)
}

export default CardMedia;