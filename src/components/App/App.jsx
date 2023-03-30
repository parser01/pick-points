import "./App.scss";
import { useLoadScript } from "@react-google-maps/api";
import PickPointsList from "../PickPointsList/PickPointsList";
import Map from "../Map/Map";
import { pickPoints } from "../../data";
import { useState } from "react";

const pickPointsActive = pickPoints.map((point, index) => {
	if (index === 0) {
		return { ...point, active: true };
	}
	return { ...point, active: false };
});

export default function App() {
	const [points, setPoints] = useState(pickPointsActive);

	const activePoint = points.find((point) => point.active);
	const activePointCoords = {
		lat: activePoint.latitude,
		lng: activePoint.longitude,
	};

	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
	});

	if (loadError) {
		return <div>Map cannot be loaded right now, sorry.</div>;
	}

	if (!isLoaded) {
		return <div>Loading...</div>;
	}

	const handlePointClick = (id) => {
		const newPoints = points.map((point) => {
			if (point.id === id) {
				return { ...point, active: true };
			}
			return { ...point, active: false };
		});
		setPoints(newPoints);
	};

	return (
		<div className="app">
			<PickPointsList points={points} handlePointClick={handlePointClick} />
			<Map center={activePointCoords} />
		</div>
	);
}
