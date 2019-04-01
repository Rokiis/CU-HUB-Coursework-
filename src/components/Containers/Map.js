/* global google */
import React from "react";
import { compose, withProps } from "recompose";
import firebase from "../Firebase/firebase";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import update from "immutability-helper";
export default class Map extends React.PureComponent {
  state = {
    markers: [
      {
        defaultAnimation: null,
        destination: null,
        info: null,
        isMarkerShown: null,
        isOpen: null,
        key: null,
        position: {
          lat: null,
          lng: null
        },
        radius: null,
        weight: null
      }
    ]
  };
  componentWillMount() {
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    db.collection("markers")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          var { markers } = this.state;
          markers = update(markers, {
            $push: [doc.data()]
          });
          this.setState({ markers });
        });
      });
  }
  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  };
  addMarker = e => {
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    const markerRef = db.collection("markers").add({
      position: this.state.markers[this.state.markers.length - 1].position,
      isMarkerShown: this.state.markers[this.state.markers.length - 1]
        .isMarkerShown,
      info: "",
      defaultAnimation: this.state.markers[this.state.markers.length - 1]
        .defaultAnimation,
      key: this.state.markers[this.state.markers.length - 1].key,
      radius: 10,
      weight: 10,
      opacity: 10,
      destination: "",
      isOpen: false
    });
  };

  handleMapClick = e => {
    let latitude = e.latLng.lat();
    let longtitude = e.latLng.lng();
    var { markers } = this.state;
    markers = update(markers, {
      $push: [
        {
          isMarkerShown: true,
          position: { lat: latitude, lng: longtitude },
          defaultAnimation: 2,
          key: Date.now() // Add a key property for: http://fb.me/react-warning-keys
        }
      ]
    });
    this.setState({ markers });
    this.addMarker();
  };

  render() {
    const MyMapComponent = compose(
      withProps({
        googleMapURL:
          "https://maps.googleapis.com/maps/api/js?key=AIzaSyBA5_zCZx0WQLfF5tnv9n1xRs9cWah7TbY&v=3.exp&libraries=geometry,drawing,places,visualization",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `55em` }} />,
        mapElement: <div style={{ height: `100%`, width: `50%` }} />
      }),
      withScriptjs,
      withGoogleMap
    )(props => (
      <GoogleMap
        isMarkerShown={this.state.isMarkerShown}
        onClick={this.handleMapClick}
        defaultZoom={14}
        defaultCenter={{ lat: 52.4055645, lng: -1.515488 }}
      >
        {this.state.markers.map((marker, index) => {
          return (
            <Marker {...marker} onClick={props.onToggleOpen}>
              {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen} />}
            </Marker>
          );
        })}
      </GoogleMap>
    ));

    return <MyMapComponent />;
  }
}
