import { SwipeableDrawer, ListItem, ListItemIcon, ListItemText, Box, List, InputAdornment, IconButton, InputBase, makeStyles  } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';

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
    function disableMenu() {
        props.closeMenu();
    }

    const classes = useStyles();
    return (
                <SwipeableDrawer
                    classes={{ paper: classes.backgroundPaper }}
                        anchor="left"
                        open={true}
                        onClose={disableMenu}
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
                                            <IconButton color="white" edge="end">
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
                            </List>
                        </Box>
                    </SwipeableDrawer>   
    );
}

export default Menu;