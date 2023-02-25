import { Route, Routes } from "react-router";
import AuthPage from "./pages/AuthPage";

import { MainPage } from "./pages/MainPage";

function App() {
	return (
		<div>
			<Routes>
				<Route path={"/"} element={<MainPage />}></Route>
				<Route path={"/auth"} element={<AuthPage />}></Route>
			</Routes>
		</div>
	);
}

export default App;
