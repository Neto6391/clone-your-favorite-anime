import { AppBar, CardMedia, Dialog, Grid, IconButton, Slide, Toolbar, Typography } from "@material-ui/core";
import { forwardRef } from "react";
import CloseIcon from '@material-ui/icons/Close';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function ModalToShowAnAnime(props) {
    function closeMenu() {
        props.closeIconbuton();
    }

    return (
        // <Modal
        //     open={props.open}
        //     onClose={closeMenu}
        //     aria-labelledby="parent-modal-title"
        //     aria-describedby="parent-modal-description"
        // >
        //     <Box sx={{ width: 400, color: 'white' }}>
        //         <h2 id="parent-modal-title">{props.title}</h2>
        //         <p id="parent-modal-description">
        //             {props.synopsis}
        //         </p>
        //     </Box>
        // </Modal>
        <Dialog
        fullScreen
        open={props.open}
        onClose={closeMenu}
        TransitionComponent={Transition}
        PaperProps={{ style: { backgroundColor: "#121010", color: 'white' } }}
      >
        <AppBar style={{ position: 'relative', background: "#b71c1c" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={closeMenu}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      
        <Grid container
            direction="row"
            spacing={0}
            alignContent= 'center'
        > 
        
            <Grid item sm={10} md={3}>
            <CardMedia
                component="img"
                height="544"
                image={props.image.large}
                alt={ props.title }
            />
            </Grid>

            <Grid item sm={12} md={6}>
                <Grid container
                    direction="column"
                    spacing={0}
                    style={{marginLeft: 360, paddingLeft: 24, paddingRight: 24}}
                >
                    <Typography style={{ marginTop: 24, color: "#b71c1c", marginBottom: 17, }} align="left" variant="h4" component="p">
                        { props.title }
                    </Typography>

                    <Typography style={{ marginBottom: 17, marginLeft: 3 }} variant="caption" component="p">
                        Synopsis
                    </Typography>

                    <Typography style={{ marginLeft: 3 }} align="justify" variant="body1" component="p">
                        {props.synopsis}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
      </Dialog>
    );
}

export default ModalToShowAnAnime;