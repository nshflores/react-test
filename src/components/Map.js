import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import GoogleMapReact from "google-map-react";
import Card from "@material-ui/core/Card";
import Button from '@material-ui/core/Button';
import CardHeaderRaw from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
const config = require('../config');

const AnyReactComponent = ({ text }) => <div style={{ fontWeight: 'bold', color: 'red', fontSize: '2em' }}>{text}</div>;

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

class Map extends Component {

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.props.dispatch({ type: 'EVENT/DRONE_START_FETCH' });
      console.log('state', this.props);
    }, 4000);
    console.log(`New intervalId ${this.intervalId}`)
  }

  componentWillUnmount() {
    console.log(this.intervalId, 'the component will unmount');
    clearInterval(this.intervalId);
  }

  render() {
    const { classes } = this.props;
    const { drone } = this.props;

    const ButtonLink = props => <Link to='/chart' {...props}></Link>

    return (
      <Card className={classes.card}>
        <CardHeader title="GoogleMaps Position" />
        <CardContent>
          <div style={{ height: "70vh", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: config.googleMaps.apiKey
              }}
              center={{
                lat: drone.latitude,
                lng: drone.longitude
              }}
              defaultZoom={drone.zoom}
            >
              <AnyReactComponent
                lat={drone.latitude}
                lng={drone.longitude}
                text={`*`}
              />
            </GoogleMapReact>
          </div>

          <Button variant="contained" size="large" color="primary" component={ButtonLink}>
              Go to chart
          </Button> 
        </CardContent>
      </Card>
    );
  }
}

function mapStateToProps (state, props) {
  return {
    ...state,
    ...props
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Map));
