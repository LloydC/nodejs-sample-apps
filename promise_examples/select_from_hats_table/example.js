var pg = require('pg');

var selectStuffFromTable = new Promise(function (resolve, reject) {
	pg.connect("postgres://lloydchambrier@localhost/class_example_1", function (err, client, done) {
		if (err) {
			reject(err);
			done();
			return;
		}

		client.query("select * from hats", function (err, result) {
			if (err) {
				reject(err);
				done();
				return;
			}

			resolve(result.rows);
			done();
		});
	});
});


selectStuffFromTable.then(function (rows) {
	console.log("HATS :D :D ");
	console.log("number of rows: " + rows.length);
	console.log(rows);
}, function (error) {
	console.log("oh no an error :c");
	console.log(error);
});
