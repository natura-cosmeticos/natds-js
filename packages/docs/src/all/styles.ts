import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    marginBottom: "50px"
  },
  appBar: {
    margin: "0 0 15px",
    "&:last-child": {
      marginBottom: "0px"
    }
  },
  chipContainer: {
    margin: "0 0 15px",
    "&:last-child": {
      marginBottom: "0px"
    },
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "300px",
  },
  textField: {
    maxWidth: "300px"
  },
  tabContainer: {
    maxWidth: "300px",
    margin: "0 0 15px",
    "&:last-child": {
      marginBottom: "0px"
    }
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "300px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));
