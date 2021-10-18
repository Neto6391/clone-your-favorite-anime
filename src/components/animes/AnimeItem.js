import {  Card, CardActionArea, CardMedia, Grid, IconButton, makeStyles, Typography } from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';

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
        position: 'absolute'
    },

    iconFavorite: {
        color: '#e0e0e0 !important', //quando ativar '#ff5252'
        padding: '8px',
        borderRadius: '100px',
        backgroundColor: 'rgba(255, 0, 0, 0.7) !important', //quando ativar rgba(0, 0, 0, 0.7)'
        "& :hover": {
            color: '#ff5252 !important', // quando desativar #e0e0e0
            backgroundColor: 'rgba(0, 0, 0, 0.7) !important' // quando desativar 'rgba(255, 0, 0, 0.7)'
        }
    },

    hoverButtonEffect: {
        ":hover": {
            color: '#e0e0e0 !important',
            backgroundColor: 'rgba(0, 0, 0, 0.9) !important' // quando desativar 'rgba(255, 0, 0, 0.7)'
        }
    }
  });

function AnimeItem(props) {
    const classes = useStyles();

    return (
        <Grid item className={classes.marginCard}>
                        <Card className={classes.sizeCard}>
                            <CardActionArea onClick={() => console.log('teste!')}>
                            <CardMedia 
                                component="img"
                                height="340"
                                image="https://media.kitsu.io/anime/poster_images/1/large.jpg"
                                alt={ props.titleCard }
                            />
                                
                                    
                            
                            <Typography variant="body1" align="center" color="textPrimary">
                                { props.titleCard }
                            </Typography>
                            </CardActionArea>                             
                            <IconButton className={classes.iconButtonFavorite} size="small">
                                <FavoriteIcon className={classes.iconFavorite}  fontSize="large" />
                            </IconButton>
                        </Card>
        </Grid>
    );
}

export default AnimeItem;

