import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
	VictoryAnimation,
	VictoryLine,
	VictoryChart,
	VictoryAxis,
	VictoryTransition,
	VictoryScatter,
	VictoryLabel,
} from "victory";

export const MainPage: FC = (): JSX.Element => {
	const [data, setData] = useState<any[]>([
		{ day: "Понеділок", hours: 5 },
		{ day: "Вівторок", hours: 6 },
		{ day: "Середа", hours: 7 },
		{ day: "Четверг", hours: 8 },
		{ day: "Пятниця", hours: 6 },
		{ day: "Субота", hours: 6 },
	]);

	return (
		<div>
			<VictoryChart>
				<VictoryAxis
					tickValues={["Понеділок", "Вівторок", "Середа", "Четверг", "Пятниця", "Субота"]}
				/>
				<VictoryAxis dependentAxis domain={[0, 12]} />
				<VictoryLine
					data={data}
					x='day'
					y='hours'
					style={{ data: { stroke: "red" } }}
					interpolation='natural'
				/>
			</VictoryChart>
			<Link to={"/auth"}>auth</Link>
		</div>
	);
};
