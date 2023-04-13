import React from 'react'
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '35vw',
  height: '35vw'
};


function MapContainer(location = {
  locationName:"Roux Institute",
  lat: 43.6615206,
  lng: -70.2466249
}) {
  let currentLocation = location.location;
  //console.log(currentLocation)
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBq6A5uqteMK_iK8T-d8YlMFmCw3CyQCWA"
  })

  const center = {
    lat: currentLocation.lat,
    lng: currentLocation.lng
  };

  const [map, setMap] = React.useState(null)
  const [showingWindow, updateWindow] = React.useState({}) 

  const onMarkerClick = (props) => {
    updateWindow({
      showingInfoWindow: true
    });
  };

  const onInfoWindowClose = () =>
    updateWindow({
      showingInfoWindow: false
    });

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onUnmount={onUnmount}
      >
        <Marker
        position={center}
        onClick={onMarkerClick}
        />
        {showingWindow.showingInfoWindow === true && (
          <InfoWindow
            position={center}
            onCloseClick={onInfoWindowClose}
          >
        <div>
        <h4>{currentLocation.locationName}</h4>
      </div>
    </InfoWindow>
      )}
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MapContainer)