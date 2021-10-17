import { useState } from 'react';

import { IconButton, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import Menu from './Menu';

const useStyles = makeStyles({

    backgroundMenuColor: {
        color: '#b71c1c'
    },
    
  });

function MainNavigation() {
    const classes = useStyles();
    const [isMenuShow, setMenuToShow] = useState(false);

    function setMenuToShowUp() {
        setMenuToShow(true);
    }

    function closeMenu() {
        setMenuToShow(false);
    }

     return (
        <div>
            <IconButton disableRipple disableFocusRipple style={{ backgroundColor: "transparent" }} onClick={setMenuToShowUp} size="large">
                <MenuIcon className={classes.backgroundMenuColor} fontSize="large" />
                </IconButton>
                { isMenuShow && <Menu closeMenu={closeMenu}/> }
        </div>
    );
}

export default MainNavigation;