const url = 'http://localhost:3000/user'
const userId = document.getElementById('userId')
const axios = require('axios')


const fetchData = () => {
	let data = []
	let users = []

	for (let i = 0; i <= 12; i++) {
		const prom = fetch(url).then(r => r.json)
		data.push(prom)
	}

	return new Promise(resolve => {
		Promise.all(data)
			.then(res =>
				res.map(p => users.push({
					title: p._id,
					content: p.content
				}))
			)
			.then(() => resolve(users))
	})
}

fetchData().then(console.log)

