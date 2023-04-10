import React from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';


const containerStyle = {
    position: 'relative',  
    width: '30vw',
    height: '30vw'
}

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends React.Component{
  constructor (props) {
    super(props)
    this.location = props.location
    this.state = {
      showingInfoWindow: false,  // Hides or shows the InfoWindow
      activeMarker: {},          // Shows the active marker upon click
      selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
    };
  }
  componentDidMount(){
    this.onMarkerClick = this.onMarkerClick.bind(this)
    this.onClose = this.onClose.bind(this);
  }
    
    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: this.location.lat,
            lng: this.location.lng
          }
        }
        containerStyle={containerStyle}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={this.location.locationName}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper((props) => ({
    apiKey: "AIzaSyBq6A5uqteMK_iK8T-d8YlMFmCw3CyQCWA"
  }))(MapContainer);