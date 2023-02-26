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
	VictoryBar,
	VictoryBrushContainer,
	VictoryZoomContainer,
	VictoryTheme,
} from "victory";
import AuthPage from "./AuthPage";

export const MainPage: FC = (): JSX.Element => {
	const [data, setData] = useState([
		{ day: "Понеділок", y: 10, y0: 15, total: 7 },
		{ day: "Вівторок", y: 7, y0: 17, total: 18 },
		{ day: "Середа", y: 7, y0: 18, total: 15 },
		{ day: "Четверг", y: 8, y0: 15, total: 20 },
		{ day: "Пятниця", y: 11, y0: 16, total: 10 },
		{ day: "Субота", y: 10, y0: 19, total: 30 },
	]);

	return (
		<div>
			<VictoryChart theme={VictoryTheme.material}>
				<VictoryAxis
					dependentAxis
					tickValues={[6, 8, 10, 12, 14, 16, 18, 20, 22]}
					domain={{ y: [5, 22] }}
					tickFormat={(x) => `${x} г.`}
				/>

				<VictoryBar
					alignment='start'
					// labels={({ datum }) => datum.total}
					// animate={{
					// 	duration: 2000,
					// 	onLoad: { duration: 1000 },
					// }}
					cornerRadius={{ top: 3, bottom: 3 }}
					barRatio={0.5}
					data={data}
					y={"y"}
					// x={"day"}
					style={{
						data: {
							fill: ({ datum, index }) => (Number(index) % 2 ? "#5e5ff4" : "#000"),
							fillOpacity: 1,
						},
					}}
				/>
			</VictoryChart>
			<button
				onClick={() => {
					setData([{ day: "Понеділок", y: 10, y0: 15, total: 7 }]);
				}}>
				1d
			</button>
			<button
				onClick={() => {
					setData([
						{ day: "Понеділок", y: 10, y0: 15, total: 7 },
						{ day: "Вівторок", y: 7, y0: 17, total: 18 },
						{ day: "Середа", y: 7, y0: 18, total: 15 },
					]);
				}}>
				3d
			</button>
			<button
				onClick={() => {
					setData([
						{ day: "Понеділок", y: 10, y0: 15, total: 7 },
						{ day: "Вівторок", y: 7, y0: 17, total: 18 },
						{ day: "Середа", y: 7, y0: 18, total: 15 },
						{ day: "Четверг", y: 8, y0: 15, total: 20 },
						{ day: "Пятниця", y: 11, y0: 16, total: 10 },
						{ day: "Субота", y: 10, y0: 19, total: 30 },
					]);
				}}>
				1w
			</button>
			<button
				onClick={() => {
					setData([
						{ day: "Понеділок", y: 10, y0: 15, total: 7 },
						{ day: "Вівторок", y: 7, y0: 17, total: 18 },
						{ day: "Середа", y: 7, y0: 18, total: 15 },
						{ day: "Четверг", y: 8, y0: 15, total: 20 },
						{ day: "Пятниця", y: 11, y0: 16, total: 10 },
						{ day: "Субота", y: 10, y0: 19, total: 30 },
						{ day: "Понеділок", y: 10, y0: 15, total: 7 },
						{ day: "Вівторок", y: 7, y0: 17, total: 18 },
						{ day: "Середа", y: 7, y0: 18, total: 15 },
						{ day: "Четверг", y: 8, y0: 15, total: 20 },
						{ day: "Пятниця", y: 11, y0: 16, total: 10 },
						{ day: "Субота", y: 10, y0: 19, total: 30 },
						{ day: "Понеділок", y: 10, y0: 15, total: 7 },
						{ day: "Вівторок", y: 7, y0: 17, total: 18 },
						{ day: "Середа", y: 7, y0: 18, total: 15 },
						{ day: "Четверг", y: 8, y0: 15, total: 20 },
						{ day: "Пятниця", y: 11, y0: 16, total: 10 },
						{ day: "Субота", y: 10, y0: 19, total: 30 },
					]);
				}}>
				3w
			</button>
			<button
				onClick={() => {
					setData([
						{ day: "01.02", y: 10, y0: 15, total: 7 },
						{ day: "02.02", y: 7, y0: 17, total: 18 },
						{ day: "03.02", y: 7, y0: 18, total: 15 },
						{ day: "04.02", y: 8, y0: 15, total: 20 },
						{ day: "05.02", y: 11, y0: 16, total: 10 },
						{ day: "06.02", y: 10, y0: 19, total: 30 },
						{ day: "07.02", y: 10, y0: 15, total: 7 },
						{ day: "08.02", y: 7, y0: 17, total: 18 },
						{ day: "09.02", y: 7, y0: 18, total: 15 },
						{ day: "10.02", y: 8, y0: 15, total: 20 },
						{ day: "11.02", y: 11, y0: 16, total: 10 },
						{ day: "12.02", y: 10, y0: 19, total: 30 },
						{ day: "01.02", y: 10, y0: 15, total: 7 },
						{ day: "01.02", y: 7, y0: 17, total: 18 },
						{ day: "01.02", y: 7, y0: 18, total: 15 },
						{ day: "01.02", y: 8, y0: 15, total: 20 },
						{ day: "01.02", y: 11, y0: 16, total: 10 },
						{ day: "01.02", y: 10, y0: 19, total: 30 },
						{ day: "01.02", y: 10, y0: 15, total: 7 },
						{ day: "01.02", y: 7, y0: 17, total: 18 },
						{ day: "01.02", y: 7, y0: 18, total: 15 },
						{ day: "01.02", y: 8, y0: 15, total: 20 },
						{ day: "01.02", y: 11, y0: 16, total: 10 },
						{ day: "01.02", y: 10, y0: 19, total: 30 },
						{ day: "01.02", y: 10, y0: 15, total: 7 },
						{ day: "01.02", y: 7, y0: 17, total: 18 },
						{ day: "01.02", y: 7, y0: 18, total: 15 },
						{ day: "01.02", y: 8, y0: 15, total: 20 },
						{ day: "01.02", y: 11, y0: 16, total: 10 },
						{ day: "01.02", y: 10, y0: 19, total: 30 },
					]);
				}}>
				1m
			</button>

			<Link to={"/auth"}>auth</Link>
		</div>
	);
};
