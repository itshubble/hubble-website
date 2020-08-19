import React from "react";
import { AppBar, Button, Toolbar, makeStyles } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import clsx from "clsx";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    logoButton: {
        height: 64,
        width: 160,
        borderRadius: 0,
    },
    appBar: {
        margin: 0,
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        color: theme.palette.primary,
        background: "white",
    },
    button: {
        padding: 16,
        borderRadius: 0,
    },
    action: {
        paddingLeft: 16,
        paddingRight: 16,
        marginRight: 16,
        borderRadius: 0,
    },
}));

function MainToolbar(props) {
    const classes = useStyles();

    return (
        <AppBar position="fixed" className={clsx(classes.appBar)}>
            <Toolbar className={classes.toolbar}>
                <Box display="flex" flexGrow={1}>
                    <Button className={classes.logoButton}>
                        <img
                            src="assets/images/hubble.png"
                            alt="Hubble logo"
                            height="40px"
                        />
                    </Button>
                    <Button className={classes.button}>Products</Button>
                    <Button className={classes.button}>Company</Button>
                    <Button className={classes.button}>Resources</Button>
                    <Button className={classes.button}>Pricing</Button>
                </Box>
                <Button className={classes.action}>Log In</Button>
                <Button
                    className={classes.action}
                    color="primary"
                    variant="contained"
                >
                    Try for Free
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default withRouter(MainToolbar);
