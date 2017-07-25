const query = require('./query_db');

query('select * from hats', (error, result)=> {
	console.log(result.rows);
});
