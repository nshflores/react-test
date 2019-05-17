import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ChartLine from 'react-google-charts';
import Button from '@material-ui/core/Button';
import Card from "@material-ui/core/Card";
import CardHeaderRaw from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";

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
    margin: "5% 25%"
  }
};

class Chart extends Component {

  onStartFetch = () => {
    this.intervalId = setInterval(() => {
      this.props.dispatch({ type: 'EVENT/DRONE_START_FETCH' });
      console.log('state', this.props);
    }, 4000);
    console.log(`New intervalId ${this.intervalId}`)
  }

  componentWillMount () {
    this.props.dispatch({ type: 'EVENT/DRONE_START_FETCH' });
  }
  

  componentDidMount() {
    this.onStartFetch();
  }

  componentWillUnmount() {
    console.log(this.intervalId, 'the component will unmount');
    clearInterval(this.intervalId);
  }

  render() {
    const { classes, drone } = this.props;
    const droneDataToChart = drone.data.map(e => {
      return [new Date(e.timestamp), e.metric]
    });

    const ButtonLink = props => <Link to='/' {...props}></Link>

    return (
      <Card className={classes.card}>
        <CardHeader title="GoogleMaps Position" />
        <CardContent>
          <ChartLine
            width={'100%'}
            height={'70vh'}
            chartType="LineChart"
            loader={<div>Loading chart</div>}
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

          <Button variant="contained" size="large" color="primary" component={ButtonLink}>
              Go to Map
          </Button> 
        </CardContent>
      </Card>
    );
  }
}

function mapStateToProps (state, props) {
  return {
    ...props,
    ...state
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Chart));
