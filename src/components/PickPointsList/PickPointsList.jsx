import "./PickPointsList.scss";
import PickPoint from "../PickPoint/PickPoint";

export default function PickPointsList({ points, handlePointClick }) {
	return (
		<div className="pick-points-list">
			{points.map((point) => (
				<PickPoint
					key={point.id}
					id={point.id}
					address={point.address}
					budgets={point.budgets}
					active={point.active}
					handlePointClick={handlePointClick}
				/>
			))}
		</div>
	);
}
