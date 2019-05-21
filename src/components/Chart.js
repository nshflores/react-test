import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ChartLine from 'react-google-charts';
import PageLoading from './PageLoading';
import Loader from './Loader';
import Button from '@material-ui/core/Button';
import Card from "@material-ui/core/Card";
import CardHeaderRaw from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import * as actions from "../store/actions";

const cardStyles = theme => ({
  root: {
    background: theme.palette.primary.main
  },
  title: {
    color: "white"
  }
});
const CardHeader = withStyles(cardStyles)(CardHeaderRaw);

const styles = {
  card: {
    margin: "1em 10%"
  }
};

class Chart extends Component {

  componentWillMount() {
    this.props.dispatch({ type: actions.DRONE_START_FETCH });
  }

  componentWillUnmount() {
    this.props.dispatch({ type: actions.DRONE_CANCEL_FETCH })
  }

  render() {
    const { classes, drone } = this.props;
    const { isLoading, droneDataToChart } = drone; 

    const ButtonLink = props => <Link to='/' {...props}></Link>

    if (isLoading) {
      return <PageLoading />
    }

    return (
      <Card className={classes.card}>
        <CardHeader title="GoogleMaps Position" />
        <CardContent>
          <ChartLine
            width={'100%'}
            height={'70vh'}
            chartType="LineChart"
            loader={<Loader />}
            data={[
              [
                { type: 'date', label: 'Timestamp' },
                'Metric'
              ],
              ...droneDataToChart
            ]}
            options={{
              hAxis: {
                title: 'Time',
              },
              vAxis: {
                title: 'Popularity',
              },
              series: {
                1: { curveType: 'function' },
              },
            }}
            rootProps={{ 'data-testid': '2' }}
          >

          </ChartLine>
          <br />
          <Button variant="contained" size="large" color="primary" component={ButtonLink}>
              Go back
          </Button> 
        </CardContent>
      </Card>
    );
  }
}

function mapStateToProps (state) {
  const { drone } = state;
  const droneDataToChart = drone.data.map(e => {
    return [new Date(e.timestamp), e.metric]
  });
  return {
    ...state,
    drone: {
      droneDataToChart
    }
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Chart));
