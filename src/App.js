import React from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

import { setCurrentUser, setLoading } from "./features/authSlice";

// Import Parse minified version
import Parse from 'parse';

// Your Parse initialization configuration goes here
const PARSE_APPLICATION_ID = '2pn9703HOxQyGkBkb0v8C0IhJDScs2taBFHGqq0r';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'vD0dmcLEn9vlLjVEz4vBzmwovKtquqbThjhTl7je';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;


function App() {

	const dispatch = useDispatch();
	React.useEffect(() => {
		const checkUserStatus = () => {
			dispatch(setLoading(true));
			const currentUser =  Parse.User.current();
			if(currentUser){
				dispatch(setCurrentUser({email: currentUser.get('username')}))
				console.log("username :", currentUser.get('firstName'))
			}else{
				dispatch(setCurrentUser(false));
			}
			dispatch(setLoading(false));
		}
		return () => checkUserStatus()
	}, [dispatch])

	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/About" element={<About />} />
				<Route path="/Chat" element={<Chat />} />
				<Route path="/Login" element={<Login />} />
				<Route path="/SignUp" element={<SignUp />} />
				<Route path="/SignIn" element={<SignIn />} />
			</Routes>
		</>
	);
}

export default App;
