import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import SadIcon from './SadIcon';

const styles = {
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100%',
    width: '100%',
    color: 'black'
  }
}

function NotFound(props) {
  const { classes } = props;
  const SadIconStyle = {
    color: 'gray',
    size: '3m'
  }
  return (
    <div className={classes.root}>
      <SadIcon {...SadIconStyle} />
      <h1 style={{ color: SadIconStyle.color }}>404 - Not found!</h1>
    </div>
  );
}

export default withStyles(styles)(NotFound);