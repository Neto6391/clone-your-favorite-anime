import {  Card, CardActionArea, CardMedia, Grid, IconButton, makeStyles, Typography } from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useState } from "react";
import { connect } from 'react-redux';
import { updateFavoriteAnime, removeFavoriteAnime } from '../../actions';
import ModalToShowAnAnime from "./ModalToShowAnAnime";

import NotificationSnackbar from "./NotificationSnackbar";

const useStyles = makeStyles({
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
        padding: '8px',
        borderRadius: '100px',
        backgroundColor: 'rgba(0, 0, 0, 0.7) !important',
        color: '#ff5252 !important'
    },

    iconFavoriteNoHovered: {
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
        maxWidth: '240px',
        "&:hover": {
            filter: 'contrast(170%)'
        }
    }
    
});


function AnimeItem(props) {
    const classes = useStyles();

    const [isButtonHovered, setHoveredButton] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);

    const [getSnackbar,  setSnackbar] = useState({
        open: false,
        message: ""
    });

    const {
        removeFavorite,
        updateFavorite,
        favorites
      } = props;
    
    const itemIsFavorite = favorites.some(favorite => favorite.id === props.id);

    function toggleFavoriteStatusHandler() {
        if (itemIsFavorite) {
            removeFavorite(props.id);
            openSnackbar(true, `${props.titleCard} is removed in favorites`);
        } else {
            updateFavorite({
                id: props.id,
                title: props.titleCard,
                synopsis: props.synopsis,
                image: props.image,
            });
            openSnackbar(true, `${props.titleCard} is added in favorites`);
        }
    }

    function openSnackbar(open, message) {
        setSnackbar({open, message});
    }

    function closeSnackbar() {
        openSnackbar(false, "");
    }

    function closeModal() {
        setModalOpen(false);
    }

    return (
        <Grid item className={classes.marginCard}>
                        <Card className={classes.action}>
                            <CardActionArea 
                                onClick={() => setModalOpen(true)}
                            >
                            <CardMedia 
                                component="img"
                                height="340"
                                image={props.image.small}
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
                                    onClick={toggleFavoriteStatusHandler}
                                >     
                                    <FavoriteIcon 
                                        className={
                                            favorites.some(favorite => favorite.id === props.id) ? 
                                                isButtonHovered ? classes.iconFavoriteNoHovered : classes.iconFavoriteHovered : 
                                                isButtonHovered ? classes.iconFavoriteHovered : classes.iconFavoriteNoHovered
                                        }  
                                        fontSize="large" 
                                    />   
                                </IconButton>
                                
                        </Card>
            { getSnackbar.open &&  <NotificationSnackbar open={getSnackbar.open} message={getSnackbar.message} afterClose={closeSnackbar} /> } 
            { !getSnackbar.open && isModalOpen && <ModalToShowAnAnime title={props.titleCard} synopsis={props.synopsis} image={props.image} closeIconbuton={closeModal}  open={isModalOpen} /> }
        </Grid>
    );
}

const mapStateToProps = store => ({
    favorites: store.favoriteState.favorites
});

const mapDispatchToProps = dispatch => (
  {
    updateFavorite: anime => dispatch(updateFavoriteAnime(anime)),
    removeFavorite: animeId => dispatch(removeFavoriteAnime(animeId)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(AnimeItem);

