import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/Home";
import Navigation from "./routes/navigation/Navigation";
import Authentication from "./routes/Authentication";
import { Shop } from "./routes/Shop";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path="shop" element={<Shop />} />
				<Route path="auth" element={<Authentication />} />
			</Route>
		</Routes>
	);
};

export default App;
