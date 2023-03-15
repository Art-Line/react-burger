import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Restaurants from "./pages/Restaurants";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="service" element={<Service />} />
					<Route path="restaurants" element={<Restaurants />} />
					<Route path="contact" element={<Contact />} />
					<Route path="cart" element={<Cart />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
