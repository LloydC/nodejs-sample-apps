/**
 * usage: from the command line, do:
 * node src/write.js <string> <string> <integer> <boolean>
 * i.e.
 * node src/write.js porkpie felt 3 true
 */
// HOW TO USE MODULE PG FROM VERSION 7.0.0
const { Client } = require('pg')
const client = new Client({
	database: 'class_example_1',
  host: 'localhost',
  user: 'lloydchambrier'// also 'password:' if you have one setup
})

client.connect()
// when writing arguments in terminal, if you have two strings as values
// surround it with '' so the app will know for sure the extent
client.query('insert into hats (name,type) values($1, $2)', process.argv.splice(2), (err) => {
  console.log(err ? err.stack : 'terminal hat added to the database')
  client.end()
})

// HOW TO USE MODULE PG FROM VERSION 4.4.3 TO 6.2.0(deprecated in 6.3.0)
// var pg = require('pg');
//
// var connectionString = "postgres://jon:1234@localhost/class_example";
// pg.connect(connectionString, function (err, client, done) {
// 	client.query('insert into hats values ($1, $2, $3, $4)', process.argv.splice(2), function (err) {
// 		if(err) {
// 			throw err;
// 		}
//
// 		done();
// 		pg.end(); // the client will idle for another 30 seconds, temporarily preventing the app from closing, unless this function is called
// 	});
// });
