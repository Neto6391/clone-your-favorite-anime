import { SwipeableDrawer, ListItem, ListItemIcon, ListItemText, Box, List, IconButton, makeStyles, ImageListItem, Typography, Button  } from '@material-ui/core';
// import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";


import { connect } from 'react-redux';
import { removeFavoriteAnime, resetFavoriteAnime } from '../../actions';
import { useState } from 'react';

import NotificationSnackbar from "../animes/NotificationSnackbar";
import ModalToShowAnAnime from '../animes/ModalToShowAnAnime';

const useStyles = makeStyles({
    paper: {
      background: "black"
    },
    backgroundInputSearch: {
        background: "white !important",
        padding: '6px',
        borderRadius: '5px',
        paddingRight: '25px'
    },
    backgroundPaper: {
        backgroundColor: 'black !important'
    },
    colorListItem: {
        color: '#b71c1c'
    },

    hoverItemAnime: {
        "& span:hover": {
            filter: 'grayscale(1)'
        }
        
    }
    
  });

function Menu(props) {
    const [getSnackbar,  setSnackbar] = useState({
        open: false,
        message: ""
    });

    const [modal, setModal] = useState({
        open: false,
        title: "",
        synopsis: "",
        image: {}
    });

    function openMenu() {
        props.openMenu();
    }
    function closeMenu() {
        props.closeMenu();
    }

    
    const classes = useStyles();
    
    const {
        removeFavorite,
        resetFavorite,
        favorites
      } = props;

    function openSnackbar(open, message) {
        setSnackbar({open, message});
    }

    function closeSnackbar() {
        openSnackbar(false, "");
    }

    function RemoveItemMenu(e, animeId, title) {
        e.preventDefault();
        
        removeFavorite(animeId);
        openSnackbar(true, `${title} is removed in favorites`);
    }

    function handleClickOpenModal(e, data) {
        e.preventDefault();
        setModal({...data});
    }

    function closeModal() {
        setModal({
            open: false,
            title: "",
            synopsis: "",
            image: {}
        });
    }

    function resetStateFavorites(e) {
        e.preventDefault();
        resetFavorite();
        openSnackbar(true, `Favorites removed`);
    }


    return (
                <SwipeableDrawer
                    classes={{ paper: classes.backgroundPaper }}
                        anchor="left"
                        open={props.open}
                        onOpen={openMenu}
                        onClose={closeMenu}
                    >
                        <Box
                            sx={{ width: 300   }}
                            role="presentation"
                        >
                            
                            
                            <List className={classes.colorListItem}>
                                <ListItem component="span"  key={"menu"} >
                                    <ListItemIcon disabled >
                                        <FavoriteIcon className={classes.colorListItem} />
                                    </ListItemIcon>
                                    <ListItemText primary="Favorite Animes" />
                                </ListItem>
                                
                                    { favorites.map((favoriteItem, index) => {
                                        return(
                                            <ListItem className={classes.hoverItemAnime} key={favoriteItem.id} component="span" >
                                                    <ListItem button onClick={(e) => handleClickOpenModal(e, {
                                                       open: true,
                                                       title: favoriteItem.title,
                                                       synopsis: favoriteItem.synopsis,
                                                       image: favoriteItem.image
                                                    })} component="span">
                                                        <ImageListItem style={{ marginLeft: -26 }} >
                                                            <img
                                                                src={favoriteItem.image.tiny}
                                                                height="40px"
                                                                width="40px"
                                                                alt={favoriteItem.title}
                                                            />
                                                        </ImageListItem>
                                                        
                                                        <Box sx={{ margin: 30   }}>
                                                            <ListItemText primary={favoriteItem.title} sx={{ justifyContent: 'center' }} />
                                                        </Box>
                                             
                                                    </ListItem>
                                                    
                                                

                                                <IconButton onClick={(e) => RemoveItemMenu(e, favoriteItem.id, favoriteItem.title)}>
                                                    <DeleteIcon style={{ color: 'white' }} />
                                                </IconButton>
                                                
                                            </ListItem>
                                        )
                                    })}
                                { favorites.length > 0 && (<ListItem style={{ justifyContent: 'center' }}>
                                    <Button size="large"  onClick={(e) => resetStateFavorites(e)}>
                                        <DeleteForeverIcon style={{ color: '#b71c1c' }} />
                                        <ListItemText style={{ color: '#b71c1c', marginLeft: 5 }}>
                                            <Typography align="center" variant="subheading">CLEAR</Typography>
                                        </ListItemText>
                                    </Button>
                                </ListItem>)}   
                            </List>
                        </Box>
                        { getSnackbar.open &&  <NotificationSnackbar open={getSnackbar.open} message={getSnackbar.message} afterClose={closeSnackbar} /> }
                        { !getSnackbar.open && modal.open && <ModalToShowAnAnime title={modal.title} synopsis={modal.synopsis} image={modal.image} closeIconbuton={closeModal}  open={modal.open} /> }
                    </SwipeableDrawer>   
    );
}

const mapStateToProps = store => ({
    favorites: store.favoriteState.favorites
});

const mapDispatchToProps = dispatch => (
  {
    removeFavorite: animeId => dispatch(removeFavoriteAnime(animeId)),
    resetFavorite: () => dispatch(resetFavoriteAnime())
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Menu);