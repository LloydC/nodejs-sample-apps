// HOW TO USE MODULE PG FROM VERSION 7.0.0
const { Client } = require('pg')
const client = new Client({
	database: 'class_example_1',
  host: 'localhost',
  user: 'lloydchambrier'// also 'password:' if you have one setup
})

module.exports = function(queryString,queryParameters,onComplete) {
	if (typeof queryParameters == 'function') { // normalize parameters
			onComplete = queryParameters;
			queryParameters = [];
		}
	client.connect()

	client.query(queryString, queryParameters, (err, result) => {

					console.log(err ? err.stack :result.rows);
				});
				client.end();
}


// HOW TO USE MODULE PG FROM VERSION 4.4.3 TO 6.2.0(deprecated in 6.3.0)
// const pg = require('pg');
// var connectionString = "postgres://jon@localhost/class_example";
//
// module.exports = function (queryString, queryParameters, onComplete) {
// 	if (typeof queryParameters == 'function') { // normalize parameters
// 		onComplete = queryParameters;
// 		queryParameters = [];
// 	}
//
// 	pg.connect(connectionString, function (err, client, done) {
// 		if (err) {
// 			console.log('error: connection to database failed. connection string: \"' + connectionString + '\" ' + err);
//
// 			if (client) {
// 				done(client);
// 			}
//
// 			if (onComplete !== undefined) {
// 				onComplete(err);
// 			}
//
// 			return;
// 		}
//
// 		client.query(queryString, queryParameters, function (err, result) {
// 				if (err) {
// 					done(client);
// 					console.log('error: query failed: \"' + queryString + '\", \"' + queryParameters + "\" " + err);
// 				} else {
// 					done();
// 				}
//
// 				if (onComplete !== undefined) {
// 					onComplete(err, result);
// 				}
// 			});
// 	});
// };
