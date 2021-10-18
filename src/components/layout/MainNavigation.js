import { useState } from 'react';

import { IconButton, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import Menu from './Menu';

const useStyles = makeStyles({
    alignButton: {
        padding: '12px',
    },

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
        <div className={classes.alignButton}>
            <IconButton disableRipple size="medium" style={{ backgroundColor: "transparent" }} onClick={setMenuToShowUp}>
                <MenuIcon className={classes.backgroundMenuColor} fontSize="large" />
            </IconButton>
            <Menu open={isMenuShow} openMenu={setMenuToShowUp} closeMenu={closeMenu}/>
            {/* { isMenuShow && <Menu closeMenu={closeMenu}/> } */}
        </div>
    );
}

export default MainNavigation;