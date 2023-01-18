function orbitalPeriod(satellites) {
	debugger;
	const GM = 398600.4418;
	const ER = 6367.4447;

	return satellites.map(({ avgAlt, name }) => {
		const axis = avgAlt + ER;
		const orbitalPeriod = Math.round(
			2 * Math.PI * Math.sqrt(Math.pow(axis, 3) / GM)
		);
		return {
			name,
			orbitalPeriod,
		};
	});
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
