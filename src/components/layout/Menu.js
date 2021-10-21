import { SwipeableDrawer, ListItem, ListItemIcon, ListItemText, Box, List, InputAdornment, IconButton, InputBase, makeStyles, ImageListItem  } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';


import { connect } from 'react-redux';
import { removeFavoriteAnime } from '../../actions';
import { useState } from 'react';

import NotificationSnackbar from "../animes/NotificationSnackbar";

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
    
  });

function Menu(props) {
    const [getSnackbar,  setSnackbar] = useState({
        open: false,
        message: ""
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
                            <div className={classes.backgroundInputSearch}>
                                <InputBase   
                                    placeholder="search your favorite anime" 
                                    type="text" 
                                    fullWidth
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton size="small" edge="end">
                                                <SearchIcon  />
                                            </IconButton>
                                        </InputAdornment>
                                    } 
                                />
                            </div>
                            
                            <List className={classes.colorListItem}>
                                <ListItem  key={"menu"} >
                                    <ListItemIcon disabled >
                                        <FavoriteIcon className={classes.colorListItem} />
                                    </ListItemIcon>
                                    <ListItemText primary={"Favorite Animes"} />
                                    
                                </ListItem>
                                
                                
                                    { favorites.map((favoriteItem, index) => {
                                        return(
                                            <ListItem key={favoriteItem.id} component="ul">
                                                <ImageListItem>
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

                                                <IconButton onClick={(e) => RemoveItemMenu(e, favoriteItem.id, favoriteItem.title)}>
                                                    <DeleteIcon color="secondary" />
                                                </IconButton>
                                            </ListItem>
                                        )
                                    })}   
                                
                            </List>
                        </Box>
                        { getSnackbar.open &&  <NotificationSnackbar open={getSnackbar.open} message={getSnackbar.message} afterClose={closeSnackbar} /> }
                    </SwipeableDrawer>   
    );
}

const mapStateToProps = store => ({
    favorites: store.favoriteState.favorites
});

const mapDispatchToProps = dispatch => (
  {
    removeFavorite: animeId => dispatch(removeFavoriteAnime(animeId)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Menu);