import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Chat from "./pages/Chat";
import Login from "./pages/Login";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/About" element={<About />} />
				<Route path="/Chat" element={<Chat />} />
				<Route path="/Login" element={<Login />} />
			</Routes>
		</>
	);
}

export default App;