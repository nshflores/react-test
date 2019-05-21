import React, { Component } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import { CardHeader } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import PlaceIcon from "./PlaceIcon";
import ShowChartIcon from "./ShowChartIcon";

const styles = {
  card: {
    minWidth: 275,
    margin: "1em 1em",
    display: "block"
  },
  linkButton: {
    textDecoration: "none"
  },
  title: {
    fontSize: 14,
    textAlign: "center"
  },
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100%',
    width: '100%',
  },
  paragraph: {
    textAlign: "center"
  }
};

class Home extends Component {
  state = {
    direction: "row",
    justify: "center",
    alignItems: "center",
    spacing: 16
  };
  render() {
    const { classes } = this.props;
    const PlaceIconStyles = {
      color: "red",
      size: "6em",
      style: {
        display: "block",
        margin: "0 auto"
      }
    };
    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid
            container
            className={classes.demo}
            justify="center"
            spacing={Number(16)}
          >
            <Grid>
              <Link className={classes.linkButton} to="/maps">
                <Card className={classes.card}>
                  <CardHeader
                    className={classes.title}
                    title="Drone position"
                  />
                  <CardContent>
                    <PlaceIcon {...PlaceIconStyles} />
                    <Typography className={classes.paragraph} paragraph>
                      Track on realtime the drone's travel.
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
            <Grid>
              <Link className={classes.linkButton} to="/chart">
                <Card className={classes.card}>
                  <CardHeader className={classes.title} title="Drone chart" />
                  <CardContent>
                    <ShowChartIcon {...PlaceIconStyles} />
                    <Typography className={classes.paragraph} paragraph>
                      Watch the drone's metrics on realtime.
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Home);
