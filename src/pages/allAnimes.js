import { ButtonBase, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, IconButton, makeStyles, Typography } from "@material-ui/core";
import Layout from "../components/layout/Layout";
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles({
    sizeCard: {
        maxWidth: '240px'
    },
    marginCard: {
        margin: '12px'
    },

    iconButtonFavorite: {
        top: 0,
        right: 0,
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

function AllAnimesPage() {
    const classes = useStyles();
    return (
        <Layout>
            <Grid container 
                direction="column"
                alignItems="center"
                spacing={0}
            >
                <Grid item className={classes.marginCard}>
                    <Card className={classes.sizeCard}>
                        <ButtonBase >
                            <CardActionArea>
                                <CardMedia className={classes.hoverButtonEffect}
                                        component="img"
                                        height="340"
                                        image="https://media.kitsu.io/anime/poster_images/1/large.jpg"
                                        alt="green iguana"
                                    />
                                <IconButton className={classes.iconButtonFavorite}>
                                    <FavoriteIcon className={classes.iconFavorite} fontSize="large" />
                                </IconButton>
                                <Typography variant="body1" color="text.secondary">
                                    Cowboy Bebop
                                </Typography>
                            </CardActionArea>
                             
                           
                        </ButtonBase>
                    </Card>
                </Grid>
            </Grid>
        </Layout>
    );
}

export default AllAnimesPage;