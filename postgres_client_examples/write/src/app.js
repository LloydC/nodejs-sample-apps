// HOW TO USE MODULE PG FROM VERSION 6.3.0
const { Client } = require('pg')
const client = new Client({
	database: 'class_example_1',
  host: 'localhost',
  user: 'lloydchambrier'// also 'password:' if you have one setup
})

client.connect()

client.query('insert into hats (name,type) values(\'Purple New Era\',\'cap\')', (err) => {
  console.log(err ? err.stack : 'new hat added to the database') // Hello World!
  client.end()
})

// HOW TO USE MODULE PG FROM VERSION 4.4.3 TO 6.2.0(deprecated in 6.3.0)
// var pg = require('pg');
//
// var connectionString = "postgres://jon:1234@localhost/class_example";
// pg.connect(connectionString, function (err, client, done) {
// 	client.query('insert into hats values (\'chicken\', \'feathers\', 10, false)', function (err) {
// 		if(err) {
// 			throw err;
// 		}
//
// 		done();
// 		pg.end(); // the client will idle for another 30 seconds, temporarily preventing the app from closing, unless this function is called
// 	});
// });
