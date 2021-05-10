import { Grid, makeStyles } from '@material-ui/core';

const marginContainer = 5;

const Container: any = (props: any) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={marginContainer} {...props}>
        {props.children}
      </Grid>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

export default Container;
