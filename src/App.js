import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Program from './pages/Program';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Registration from './pages/Registration';
import Mentors from './pages/Mentors';
import Notification from './pages/Notification';
import Services from './pages/Services';
import Dashboard from './pages/Dashboard';
import ProgramRegistration from './pages/ProgramRegistration';
import Navbar from './components/Navbar';
import ServiceRegistration from './pages/ServiceRegistration';
import Startups from './pages/StartUps';
import Annoucements from './pages/Annoucements';

const Layout = ({ children }) => {
	return (
		<>
			<Navbar>{children}</Navbar>
		</>
	);
};

const App = () => {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						<Layout>
							<Home />
						</Layout>
					}
				/>
				<Route
					path="/about-us"
					element={
						<Layout>
							<AboutUs/>
						</Layout>
					}
				/>
				<Route
					path="/program"
					element={
						<Layout>
							<Program />
						</Layout>
					}
				/>
				<Route
					path="/login"
					element={
						<Layout>
							<Login />
						</Layout>
					}
				/>
				<Route
					path="/signup"
					element={
						<Layout>
							<Signup />
						</Layout>
					}
				/>
				<Route
					path="/registration"
					element={
						<Layout>
							<Registration />
						</Layout>
					}
				/>
				<Route
					path="/mentors"
					element={
						<Layout>
							<Mentors />
						</Layout>
					}
				/>
				<Route
					path="/notification"
					element={
						<Layout>
							<Notification />
						</Layout>
					}
				/>
				<Route
					path="/services"
					element={
						<Layout>
							<Services />
						</Layout>
					}
				/>
				<Route
					path="/services/Incubation-center-registration"
					element={
						<Layout>
							<ServiceRegistration />
						</Layout>
					}
					/>
				<Route path="/startups"
				element={<Layout>
					<Startups/>
				</Layout>}/>
				<Route
					path="/dashboard"
					element={
						<Layout>
							<Dashboard />
						</Layout>
					}
				/>
				<Route
					path="/program-registration"
					element={
						<Layout>
							<ProgramRegistration />
						</Layout>
					}
				/>
				<Route path="/annoucements"
				element={<Layout>
					<Annoucements/>
				</Layout>}/>
					<Route path="*" element={<div className='flex justify-center items-center h-[100vh]'>
            <h1 className='text-center text-[72px] font-bold text-[#603500]'> 404 Page Not Found</h1>
            </div>}/>
			</Routes>
		</Router>
	);
};
     

export default App;
