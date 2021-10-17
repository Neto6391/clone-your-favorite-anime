
import { Grid, makeStyles } from '@material-ui/core';

import MainNavigation from './MainNavigation';

const useStyles = makeStyles({
    backgroundColor: {
        background: '#121010'
    },
  });

function Layout(props) {
    const classes = useStyles();
    return (
        <div className={classes.backgroundColor}>
            <Grid container
                direction="row"
            
                alignItems="center"
                
                spacing={0}>
                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1} position={0} justifyContent="center" alignItems="center">
                        <MainNavigation />
                    </Grid>

                    <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
                        <main>
                            { props.children }
                        </main>
                        
                    </Grid>
            </Grid>
        </div>
        
    );
}

export default Layout;