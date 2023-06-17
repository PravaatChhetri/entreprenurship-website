import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Program from './pages/Program';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Mentors from './pages/Mentors';
import Notification from './pages/Notification';
import Services from './pages/Services';
import Dashboard from './pages/Dashboard';
import ProgramRegistration from './pages/ProgramRegistration';
import Navbar from './component/Navbar';
import ServiceRegistration from './pages/ServiceRegistration';

// function App() {
//   return (
//     <div className="App">

//       <BrowserRouter>
//       <Navbar/>
//         <Routes>
//           <Route path="/" component={Home} />
//           <Route path="/about-us" component={AboutUs} />
//           <Route path="/programmes"  component={Program} />
//           <Route path="/login" component={Login} />
//           <Route path="/registration" component={Registration} />
//           <Route path="/mentors" component={Mentors} />
//           <Route path="/notification" component={Notification} />
//           <Route path="/services" component={Services} />
//           <Route path="/dashboard" component={Dashboard} />
//           <Route path="/program-registration" component={ProgramRegistration} />
//         </Routes>
//         <Footer/>

//       </BrowserRouter>


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
							<ServiceRegistration />
					}
					/>
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
					<Route path="*" element={<div className='flex justify-center items-center h-[100vh]'>
            <h1 className='text-center text-[72px] font-bold text-[#603500]'> 404 Page Not Found</h1>
            </div>}/>
			</Routes>
		</Router>
	);
};
     

export default App;
