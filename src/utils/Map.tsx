
import { MapContainer, Marker, TileLayer, useMapEvent } from "react-leaflet";
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import  coordinateDTO  from "./coordinates.model";
import { useState } from "react";


let defaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor:[16,37]
    

})

L.Marker.prototype.options.icon = defaultIcon;
export default function Map(props: mapProps) {
    const [coordinates, setCoordinates] = useState<coordinateDTO[]>(props.coordinates); 
    return (
        <MapContainer
            center={[17.45596, 78.4016137]} zoom={14} style={{height:props.height}}>
            <TileLayer attribution="React Movies" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <MapClick setCoordinates={coordinates => {
                setCoordinates([coordinates]);
                props.handleMapClick(coordinates);
            }} />
            {coordinates?.map((coordinate,index)=> <Marker key={index}
                position={[coordinate.lng, coordinate.lng]} />)}
        </MapContainer>

    )
}

function MapClick(props: mapClickProps) {
    useMapEvent('click', e => {
        props.setCoordinates({ lat: e.latlng.lat,lng:e.latlng.lng })
    })
    return null;
}

export interface mapClickProps {
    setCoordinates(coordinates:coordinateDTO):void;
}
export interface mapProps {
    height: string;
    coordinates: coordinateDTO[];
    handleMapClick(coordinates: coordinateDTO):void
}

Map.defaultProps = {
    height:'500px'
}