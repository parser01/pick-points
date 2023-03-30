import { GoogleMap, Marker } from "@react-google-maps/api";
import "./Map.scss";

export default function Map({ center }) {
	return (
		<GoogleMap
			zoom={18}
			center={center}
			mapContainerClassName="map-container"
		>
			<Marker position={center} />
		</GoogleMap>
	);
}
