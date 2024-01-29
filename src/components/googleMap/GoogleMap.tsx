import {
  GoogleMap,
  Marker,
  useGoogleMap,
  useJsApiLoader,
} from "@react-google-maps/api";

type coordinates = {
  lat: number;
  lng: number;
};

type googleMapProp = {
  coordinate: coordinates;
  ondragEnd: (e: google.maps.MapMouseEvent) => void;
};

const CGoogleMap = (prop: googleMapProp): JSX.Element => {
  const containerStyle = {
    width: "500px",
    height: "350px",
  };
  const center = {
    lat: 6.927079,
    lng: 79.861244,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLEMAP_API,
  });

  if (isLoaded) {
    return (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={prop.coordinate.lat ? prop.coordinate : center}
        zoom={11}
      >
        <Marker
          position={prop.coordinate.lng ? prop.coordinate : center}
          draggable={true}
          onDragEnd={prop.ondragEnd}
        ></Marker>
      </GoogleMap>
    );
  } else {
    return <></>;
  }
};

export default CGoogleMap;
