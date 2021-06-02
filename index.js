require('dotenv').config();
const db = require('./config/db');
const server = require('./server/server');

const port = process.env.PORT || 5000;

server.listen(port, () => {
	console.log(`Server listen on port: ${port}`);
	db.sync()
		.then(() => console.log('Database Connected'))
		.catch(error => console.log('Este es es el error: ', error));
});
