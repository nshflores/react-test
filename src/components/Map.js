import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import GoogleMapReact from "google-map-react";
import PageLoading from './PageLoading';
import Card from "@material-ui/core/Card";
import Button from '@material-ui/core/Button';
import CardHeaderRaw from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import * as actions from "../store/actions";
import './styles/Map.css'
import config from '../config';

const AnyReactComponent = ({ text }) => <div style={{ fontWeight: 'bold', color: 'red', fontSize: '2em' }}>{text}</div>;

const cardStyles = theme => ({
  root: {
    background: theme.palette.primary.main,
  },
  title: {
    color: "white",
    borderRadius: 0
  }
});
const CardHeader = withStyles(cardStyles)(CardHeaderRaw);

const styles = {
  card: {
    margin: "1em 10%"
  }
};

class Map extends Component {

  componentDidMount() {
    this.props.dispatch({ type: actions.DRONE_START_FETCH });
  }

  componentWillUnmount() {
    this.props.dispatch({ type: actions.DRONE_CANCEL_FETCH })
  }

  render() {
    console.log(config)
    const { drone: { zoom, isLoading, latitude, longitude } } = this.props;

    const ButtonLink = props => <Link to='/' {...props}></Link>

    if (isLoading) {
      return <PageLoading />
    }

    return (
      <Card className="Card">
        <CardHeader title="Drone's position"/>
        <CardContent>
          <div style={{ height: "70vh", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: config.googleMaps.apiKey
              }}
              center={{
                lat: latitude,
                lng: longitude
              }}
              defaultZoom={zoom}
            >
              <AnyReactComponent
                lat={latitude}
                lng={longitude}
                text={`*`}
              />
            </GoogleMapReact>
          </div>
          
          <br/>
          <Button variant="contained" size="large" color="primary" component={ButtonLink}>
              Go back
          </Button> 
        </CardContent>
      </Card>
    );
  }
}

function mapStateToProps (state) {
  const { drone: { zoom, isLoading, data } } = state;
  
  return {
    ...state,
    drone: {
      zoom: zoom || 7,
      isLoading: isLoading || false,
      latitude: data && data.length ? data[data.length - 1].latitude : 0,
      longitude: data && data.length ? data[data.length - 1].longitude : 0
    }
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Map));
