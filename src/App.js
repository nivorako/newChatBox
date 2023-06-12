import React from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import Private from "./pages/private/Private";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Chat from "./pages/private/Chat";
import Message from "./pages/private/Message";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {

	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/About" element={<About />} />
				<Route path="/private" element={<Private/>} >
					<Route index element={<Chat />} />
					<Route path="Chat" element={<Chat />} />
					<Route path="Message" element={<Message />} />
				</Route>
				<Route path="/SignUp" element={<SignUp />} />
				<Route path="/SignIn" element={<SignIn />} />
			</Routes>
		</>
	);
}

export default App;
