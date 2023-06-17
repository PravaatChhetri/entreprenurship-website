import React, { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import axios from "axios";

const apitoken =
	"a011c6bc3920f5046b16031c19216beba64cca2f4815f1d225e44e7601646b1e00c7d76b6dc0a15fc43da74a8b7619efcbeaaa0bb2a525983ac43c43580a03fc7423112c6462c902049b516f484e78c4eef140969f14ccc1be970885872619e120579a2d8cba9cf1754f7571ec8c407f8dedbd8f7454560747635f3020efae7e";

const Counter = () => {
	const becGraduatesRef = useRef(null);
	const aecGraduatesRef = useRef(null);
	const totGraduatesRef = useRef(null);
	const eventsRef = useRef(null);
	const incubatesRef = useRef(null);
	const startupsRef = useRef(null);


	var bec = 35;
	var aec = 21;
	var tot = 31;
	var eve = 20;
	var incub = 6;
	var sups = 35;

	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:1337/api/stats", {
				headers: { Authorization: `Bearer ${apitoken}` },
			})
			.then((response) => {
				setData(response.data.data);
				bec = data[0].attributes.becGraduates;
				aec = data[0].attributes.aecGraduates;
				tot = data[0].attributes.totGraduates;
				eve = data[0].attributes.events;
				incub = data[0].attributes.incubates;
				sups = data[0].attributes.startups;
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const { ref, inView } = useInView({
		threshold: 0.5,
		triggerOnce: true,
	});

	useEffect(() => {
		if (inView && data.length > 0) {
			animateValue(becGraduatesRef.current, 0, data[0].attributes.becGraduates, 1500);
			animateValue(aecGraduatesRef.current, 0, data[0].attributes.aecGraduates, 2000);
			animateValue(totGraduatesRef.current, 0, data[0].attributes.totGraduates, 1200);
			animateValue(eventsRef.current, 0, data[0].attributes.events, 2000);
			animateValue(incubatesRef.current, 0, data[0].attributes.incubates, 2000);
			animateValue(startupsRef.current, 0, data[0].attributes.startups, 2000);
		}
	}, [inView]);

	const animateValue = (element, start, end, duration) => {
		let startTimestamp = null;
		const step = (timestamp) => {
			if (!startTimestamp) startTimestamp = timestamp;
			const progress = Math.min((timestamp - startTimestamp) / duration, 1);
			const value = Math.floor(progress * (end - start) + start);
			element.innerHTML = value;
			if (progress < 1) {
				window.requestAnimationFrame(step);
			}
		};
		window.requestAnimationFrame(step);
	};

	return (
		<div
			ref={ref}
			className="flex flex-wrap w-full py-8 px-8 text-white bg-gradient-to-b from-orange-500 to-[#f3bf84]"
		>
			<div className="flex flex-col items-center justify-center w-1/3 lg:w-1/6">
				<div ref={becGraduatesRef} className="text-4xl font-bold text-white counter">
					{bec}
				</div>
				<div className="text-lg">BEC Graduates</div>
			</div>
			
			<div className="flex flex-col items-center justify-center w-1/3 lg:w-1/6">
				<div ref={aecGraduatesRef} className="text-4xl font-bold text-white counter">
					{aec}
				</div>
				<div className="text-lg">AEC Graduates</div>
			</div>

			<div className="flex flex-col items-center justify-center w-1/3 lg:w-1/6">
				<div ref={totGraduatesRef} className="text-4xl font-bold text-white counter">
					{tot}
				</div>
				<div className="text-lg">TOT Graduates</div>
			</div>

			<div className="flex flex-col items-center justify-center w-1/3 lg:w-1/6">
				<div ref={eventsRef} className="text-4xl font-bold text-white counter">
					{eve}
				</div>
				<div className="text-lg">Events</div>
			</div>

			<div className="flex flex-col items-center justify-center w-1/3 lg:w-1/6">
				<div ref={incubatesRef} className="text-4xl font-bold text-white counter">
					{incub}
				</div>
				<div className="text-lg">Incubates</div>
			</div>

			<div className="flex flex-col items-center justify-center w-1/3 lg:w-1/6">
				<div ref={startupsRef} className="text-4xl font-bold text-white counter">
					{sups}
				</div>
				<div className="text-lg">Start-Ups</div>
			</div>
		</div>
	);
};

export default Counter;
