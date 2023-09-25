import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const Map = (props) => {
// ---------------------------------------------
  // I) VARIABLES & HOOKS
  // ---------------------------------------------
  const {h, w} = props;
  const containerStyle = {
    width: w,
    height: h,
  };

  const center = {
    lat: -34.18303,
    lng: -70.71659,
  };

  // ---------------------------------------------
  // II) HANDLERS & AUX FUNCTIONS
  // ---------------------------------------------

  const apiKey = import.meta.env.MAPKEY;
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  // ---------------------------------------------
  // III) JSX
  // ---------------------------------------------
    return (
        <div>
            {isLoaded ? (
                <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
                >
                {
                  <Marker key="marker_1"
                    title= 'Clinica Veterinaria Pepita'
                    position={{
                      lat: -34.18303,
                      lng: -70.71659,
                  }}
                />
                }
                <></>
                </GoogleMap>
            ) : (
                <></>
            )}
        </div>
    )
}

export default Map