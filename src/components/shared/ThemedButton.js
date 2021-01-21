import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles(() => ({
    root: {
        marginRight: "1rem",
        textTransform: "none",
    },
    label: {
        fontFamily: "Dosis",
    }
}));

const ThemedButton = ({primary, label}) => {

    const classes = useStyles();

    return (
        <Button variant={"contained"} className={primary && classes.primary}
                classes={{root: classes.root, label: classes.label}}
                size="small"
                color={primary ? "primary" : "secondary"}
        >
            {label}
        </Button>
    )
}

export default ThemedButton;