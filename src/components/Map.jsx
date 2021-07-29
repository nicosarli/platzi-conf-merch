import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
  const mapStyle = {
    height: '50vh',
    width: '100%',
  };

  const defaultCenter = {
    lat: 19.426761,
    lng: -99.1718796,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBf2_3QJBt7JgEkoxX8BdioG19or78Rt_Q">
      <GoogleMap mapContainerStyle={mapStyle} zoom={17} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
