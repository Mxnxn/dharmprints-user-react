import React, { useState, forwardRef, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSnackbar, SnackbarContent } from "notistack";
import Collapse from "@material-ui/core/Collapse";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";

import { FiChevronDown, FiChevronUp, FiX } from "react-icons/fi";

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up("sm")]: {
            minWidth: "344px !important",
        },
    },
    cardSuccess: {
        backgroundColor: "#2DCE89",
        width: "100%",
    },
    cardFailure: {
        backgroundColor: "#f5365c",
        width: "100%",
    },

    actionRoot: {
        padding: "8px 8px 8px 16px",
        justifyContent: "space-between",
    },
    icons: {
        marginLeft: "auto",
    },
    expand: {
        padding: "8px 8px",
        color: "#fff",
        height: 30,
        width: 30,
        transform: "rotate(0deg)",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: "rotate(180deg)",
    },
    collapse: {
        padding: 16,
    },
    checkIcon: {
        fontSize: 20,
        color: "#b3b3b3",
        paddingRight: 4,
    },
    button: {
        padding: 0,
        textTransform: "none",
    },
}));

const SnackMessage = forwardRef((props, ref) => {
    const classes = useStyles(props.variant);
    const { closeSnackbar } = useSnackbar();
    const [expanded, setExpanded] = useState(true);

    const handleExpandClick = useCallback(() => {
        setExpanded((oldExpanded) => !oldExpanded);
    }, []);

    const handleDismiss = useCallback(() => {
        closeSnackbar(props.id);
    }, [props.id, closeSnackbar]);

    return (
        <SnackbarContent ref={ref} className={classes.root}>
            <Card className={props.variant ? classes.cardSuccess : classes.cardFailure}>
                <CardActions classes={{ root: classes.actionRoot }}>
                    <span style={{ fontSize: 18 }} className="text-white">
                        {props.head}
                    </span>
                    <div className={classes.icons}>
                        <IconButton className={classes.expand} aria-label="Show more" onClick={handleExpandClick}>
                            {expanded ? <FiChevronUp /> : <FiChevronDown />}
                        </IconButton>
                        <IconButton className={classes.expand} onClick={handleDismiss}>
                            <FiX />
                        </IconButton>
                    </div>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <Paper className={classes.collapse}>
                        <span style={{ fontSize: 18 }}>{props.message}</span>
                        {/* <Button size="small" className={classes.button}>
                            <FiCheck /> Download now
                        </Button> */}
                    </Paper>
                </Collapse>
            </Card>
        </SnackbarContent>
    );
});

export default SnackMessage;
