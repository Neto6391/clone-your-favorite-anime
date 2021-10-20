import { IconButton, Snackbar } from "@material-ui/core";
import { Fragment, useState } from "react";
import CloseIcon from '@material-ui/icons/Close';

function NotificationSnackbar(props) {

    const [state, setState] = useState({
        open: props.open,
        message: props.message,
        vertical: 'top',
        horizontal: 'right',
    });
    const { vertical, horizontal, open, message } = state;

    const closeSnackbarHandler = () => {
        setState({ ...state, open: false });
        props.afterClose();
    };

    const action = (
        <Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            severity="info"
            onClick={closeSnackbarHandler}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Fragment>
      );


    return (
        <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            autoHideDuration={2000}
            onClose={closeSnackbarHandler}
            message={message}
            key={vertical + horizontal}
            action={action}
            sx={{background: 'red'}}
      />
    );
}

export default NotificationSnackbar;