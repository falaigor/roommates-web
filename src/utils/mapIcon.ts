import Leaflet from "leaflet";
import mapMarkerImg from "../images/pin.svg";

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [83, 58],
  iconAnchor: [19, 40],
});

export default mapIcon;
