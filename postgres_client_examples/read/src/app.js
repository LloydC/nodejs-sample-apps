// HOW TO USE MODULE PG FROM VERSION 6.3.0
const { Client } = require('pg')
const client = new Client({
	database: 'class_example_1',
  host: 'localhost',
  user: 'lloydchambrier'
})

client.connect()

client.query('select * from hats', (err, res) => {
  console.log(err ? err.stack : res.rows) //
  client.end()
})

// HOW TO USE MODULE PG FROM VERSION 4.4.3 TO 6.2.0(deprecated in 6.3.0)

// const { Client } = require('pg')
// const pg = new Client()
// const connectionString = "postgres://lloydchambrier@localhost/class_example_1";

// pg.connect(connectionString, function (err, client, done) {
// 	client.query('select * from hats', function (err, result) {
// 		console.log(result.rows);
//
// 		done();
// 		pg.end(); // the client will idle for another 30 seconds, temporarily preventing the app from closing, unless this function is called
// 	});
// });
