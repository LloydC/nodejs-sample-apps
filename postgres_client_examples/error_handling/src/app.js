//// HOW TO USE MODULE PG FROM VERSION 6.3.0
// Same as read example, there's actually no benefit to not having
// an error handler in the first place as it'll only make it
//  harder for you to debug what's wrong when something bad happens.


// HOW TO USE MODULE PG FROM VERSION 4.4.3 TO 6.2.0(deprecated in 6.3.0)
// var http = require('http');
// var pg = require('pg');
//
// var connectionString = "postgres://jon:1234@localhost/class_example";
// pg.connect(connectionString, function (err, client, done) {
// 	if (err) {
// 		if (client) {
// 			done(client);
// 		}
// 		return;
// 	}
//
// 	client.query('select * from hats', function (err, result) {
// 		if (err) {
// 			done(client);
// 			return;
// 		} else {
// 			done();
// 		}
//
// 		console.log(result.rows);
// 	});
// });
