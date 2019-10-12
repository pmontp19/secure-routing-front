import { MapLayer } from 'react-leaflet';
import L from 'leaflet';
import { withLeaflet } from 'react-leaflet';
import 'leaflet-routing-machine/src';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

class RoutingMachine extends MapLayer {
  createLeafletElement() {
    const { color, map, road } = this.props;
    let leafletElement = L.Routing.control({
      serviceUrl: "//34.248.178.101:5000/route/v1",
      waypoints: road,
      lineOptions: {
        styles: [{
          color,
          opacity: .8,
          weight: 6
        }]
      },
      addWaypoints: false,
      draggableWaypoints: false,
      fitSelectedRoutes: true,
      showAlternatives: true,
      altLineOptions: { styles: [{opacity: 1, color:"#b794f6"}] },
      createMarker: () => { return null; }
    })
      .addTo(map.current.leafletElement);

    leafletElement.hide(); // hide road description

    return leafletElement.getPlan();
  }
}

export default withLeaflet(RoutingMachine);