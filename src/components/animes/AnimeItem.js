import {  Card, CardActionArea, CardMedia, Grid, IconButton, makeStyles, Typography } from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useEffect, useState } from "react";

const useStyles = makeStyles({
    sizeCard: {
        maxWidth: '240px'
    },
    marginCard: {
        margin: '12px',
        marginTop: '0px'
    },

    iconButtonFavorite: {
        top: 15,
        right: 45,
        position: 'absolute',
       
    },

    iconFavoriteHovered: {
        color: '#e0e0e0 !important', //quando ativar '#ff5252'
        padding: '8px',
        borderRadius: '100px',
        backgroundColor: 'rgba(0, 0, 0, 0.7) !important',
        color: '#ff5252 !important'
    },

    iconFavoriteNoHovered: {
        color: '#e0e0e0 !important',
        padding: '8px',
        borderRadius: '100px',
        backgroundColor: 'rgba(255, 0, 0, 0.7) !important',
        color: '#e0e0e0 !important',
    },

    media: {
        height: 140
      },
    action: {
        position: "relative",
        "&:hover": {
            filter: 'contrast(170%)'
        }
    }
    
});



function AnimeItem(props) {
    const classes = useStyles();

    const [isButtonHovered, setHoveredButton] = useState(false);

    useEffect(() => {
        if (props.favorite) {
            setHoveredButton(true);
        }
    }, []);

    return (
        <Grid item className={classes.marginCard}>
                        <Card className={classes.sizeCard, classes.action}>
                            <CardActionArea 
                                onClick={() => console.log('teste!')}
                            >
                            <CardMedia 
                                component="img"
                                height="340"
                                image={props.image}
                                alt={ props.titleCard }
                            />
                                
                            <Typography variant="body1" align="center" color="textPrimary">
                                { props.titleCard }
                            </Typography>
                            </CardActionArea>                             
                                <IconButton 
                                    className={classes.iconButtonFavorite} 
                                    size="small" 
                                    onMouseOver={()=> isButtonHovered ? setHoveredButton(false) : setHoveredButton(true) }
                                    onMouseOut={() => isButtonHovered ? setHoveredButton(false) : setHoveredButton(true) }
                                    // onClick={}
                                > 
                                    { isButtonHovered ? <FavoriteIcon className={classes.iconFavoriteHovered}  fontSize="large" /> : <FavoriteIcon className={classes.iconFavoriteNoHovered}  fontSize="large" /> } 
                                </IconButton>
                                
                        </Card>
        </Grid>
    );
}

export default AnimeItem;

