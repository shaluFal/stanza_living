import React, { Component } from 'react';
import Select from 'react-select';
import moment from 'moment';
import _ from 'lodash';
import { Box, Grid } from '@mui/material';
import { Map, InfoWindow, GoogleApiWrapper, Marker, Polyline, Polygon } from 'google-maps-react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import InfoWindowData from './InfoWindowData';
import { MapImag } from './MapImages';

let googleMap = null;
let allRequests = [];
let directionsService = null;
let directionsRenderer = null;

class ViewMapProperties extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      initialCenter: {
        lat: 17.4466,
        lng: 78.3913,
      },
      zoom: 11,
      activeMarker: {},
    };
  }

  componentDidMount() {
    this.handleLocations();
  }

  onMarkerClick = (props, marker, e) => {
    this.setState(
      {
        activeMarkerData: props.device,
        activeMarkerType: props.deviceType,
        activeMarker: marker,
      },
      () => {
        this.setState({ showingInfoWindow: true });
      }
    );
  };

  getMarker = (markerData, type, animation = null) => {
    const { google } = this.props;
    return (
      <Marker
        key={Math.random()}
        name={markerData.customer_name}
        position={{ lng: markerData.latitude, lat: markerData.longitude }}
        onClick={this.onMarkerClick}
        device={markerData}
        deviceType={type}
        animation={animation}
        title={markerData.facilityName}
        icon={{
          url: MapImag[type],
          anchor: new google.maps.Point(0, 0),
          scaledSize: new google.maps.Size(40, 40),
        }}
      />
    );
  };

  handleLocations = () => {
    const data = this.props.locations;

    allRequests = [];
    data.forEach((marker) => {
      const activeMarker = this.getMarker(marker, 'Property', null);
      allRequests.push(activeMarker);
    });

    let center = {
      lat: 17.4466,
      lng: 78.3913,
    };

    if (data?.length > 0)
      center = {
        lng: data[0].latitude,
        lat: data[0].longitude,
      };

    this.setState({
      showLocations: true,
      initialCenter: center,
    });
  };

  render() {
    return (
      <>
        <Row>
          <Col md="10">
            <Map
              google={this.props.google}
              zoom={this.state.zoom}
              onReady={(mapProps, map) => {
                googleMap = map;
                directionsService = new window.google.maps.DirectionsService();
                directionsRenderer = new window.google.maps.DirectionsRenderer({
                  suppressMarkers: true,
                });
              }}
              rotateControl
              initialCenter={this.state.initialCenter}
              center={this.state.initialCenter}
              // containerStyle={{
              //   width: '30%',
              // }}
            >
              {this.state.showLocations ? allRequests : null}
              <InfoWindow
                onOpen={this.windowHasOpened}
                onClose={() => {
                  this.setState({
                    showingInfoWindow: false,
                    activeMarker: null,
                  });
                }}
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
              >
                <InfoWindowData
                  activeMarkerType={this.state.activeMarkerType}
                  activeMarkerData={this.state.activeMarkerData}
                />
              </InfoWindow>
            </Map>
          </Col>
        </Row>
      </>
    );
  }
}

const LoadingContainer = (props) => <div className="loading" />;

const mapStateToProps = () => {
  return {};
};

const WrappedContainer = GoogleApiWrapper({
  apiKey: 'AIzaSyCX6jqzkUVQ_jOE9R7AvUoG8SBr6IBmbZc',
  LoadingContainer,
})(ViewMapProperties);

export default connect(mapStateToProps, {})(WrappedContainer);
