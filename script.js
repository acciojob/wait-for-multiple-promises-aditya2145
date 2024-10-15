//your JS code here. If required.
const randomPromise = new Promise((resolve, reject) => {
	const time = Math.random() + 1;
	setTimeout(() => {
		resolve(time.toFixed(3));
	}, time*1000)
});

async function populateTable() {
	const promises = [randomPromise, randomPromise, randomPromise];
	const result = await Promise.all(promises);

	const tbody = document.getElementById('output');
	tbody.innerHTML = '';

	result.forEach((time, index) => {
		const promiseName = `Promise ${index + 1}`;
		const row = `<tr>
						<td>${promiseName}</td>
						<td>${time}</td>
					</tr>`;
		tbody.insertAdjacentHTML('beforeend', row)
	});

	const totalTime = result.reduce((acc, curr) => acc + parseFloat(curr), 0).toFixed(3);
	const totalRow = `<tr>
						<td>Total</td>
						<td>${totalTime}</td>
	                  </tr>`;
	tbody.insertAdjacentHTML('beforeend', totalRow);
}
populateTable();

