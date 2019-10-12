import React, { Component } from 'react';
import {Map, TileLayer, Marker, ZoomControl} from 'react-leaflet';
import RoutingMachine from './RoutingMachine';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

class MapComponent extends Component {
  state = {
    lat: 41.390205,
    lng: 2.154007,
    zoom: 12,
  }
  road = [L.latLng(this.props.origin[0],this.props.origin[1]), L.latLng(this.props.destination[0],this.props.destination[1])]
  map = React.createRef();
  defaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
  });
  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map center={position} zoom={this.state.zoom} ref={this.map}>
        {/*<TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />*/}
        <TileLayer url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.png" />
        {this.road.map((point, index) => <Marker key={index} icon={this.defaultIcon} position={point} />)}
        <RoutingMachine
          color="#3d00e0"
          map={this.map}
          road={this.road}
        />
        {/*<ZoomControl position={'topright'}/>*/}
      </Map>
    )
  }
}

export default MapComponent;