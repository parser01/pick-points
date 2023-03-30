import "./PickPoint.scss";

export default function PickPoint({
	id,
	active,
	address,
	budgets,
	handlePointClick,
}) {
	const handleClick = () => {
		if (!active) {
			handlePointClick(id);
		}
	};

	return (
		<div
			className={active ? "pick-point active" : "pick-point"}
			role="button"
			onClick={handleClick}
		>
			<div className="pick-point__address">{address}</div>
			<div className="pick-point__budgets">
				{budgets.map((budget) => (
					<div className="pick-point__budget" key={budget}>
						{budget}
					</div>
				))}
			</div>
		</div>
	);
}
