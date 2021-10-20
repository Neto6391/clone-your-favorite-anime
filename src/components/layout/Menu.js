import { SwipeableDrawer, ListItem, ListItemIcon, ListItemText, Box, List, InputAdornment, IconButton, InputBase, makeStyles, ImageListItem  } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';

import FavoriteContext from "../../store/store-context";
import { useContext, useEffect } from 'react';
import { red } from '@material-ui/core/colors';

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
    function openMenu() {
        props.openMenu();
    }
    function closeMenu() {
        props.closeMenu();
    }

    

    const classes = useStyles();
    const favoriteContext = useContext(FavoriteContext);

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
                                
                                
                                    { favoriteContext.favorites.map((favoriteItem, index) => {
                                        return(
                                            <ListItem key={favoriteItem.id} component="ul">
                                                <ImageListItem>
                                                    <img
                                                        src={favoriteItem.image.tiny}
                                                        height="40px"
                                                        width="40px"
                                                        alt={favoriteItem.title}
                                                        loading="lazy"
                                                    />
                                                </ImageListItem>
                                                
                                                <Box sx={{ margin: 30   }}>
                                                    <ListItemText primary={favoriteItem.title} sx={{ justifyContent: 'center' }} />
                                                </Box>
                                            </ListItem>
                                        )
                                    })}   
                                
                            </List>
                        </Box>
                    </SwipeableDrawer>   
    );
}

export default Menu;