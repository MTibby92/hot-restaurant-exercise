// Dependencies
// =============================================================
var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')


// Sets up the Express App
// =============================================================
var app = express()
var PORT = process.env.PORT || 3000


// Sets up the Express app to handle data parsing
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text())
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))


// (DATA)
// =============================================================
var tables = [{
    customerName: 'TEST',
    customerEmail: 'TEST',
    customerID: 'TEST',
    phoneNumber: 'TEST'
}, {
    customerName: 'TEST',
    customerEmail: 'TEST',
    customerID: 'TEST',
    phoneNumber: 'TEST'
}, {
    customerName: 'TEST',
    customerEmail: 'TEST',
    customerID: 'TEST',
    phoneNumber: 'TEST'
}, {
    customerName: 'TEST',
    customerEmail: 'TEST',
    customerID: 'TEST',
    phoneNumber: 'TEST'
}, {
    customerName: 'TEST',
    customerEmail: 'TEST',
    customerID: 'TEST',
    phoneNumber: 'TEST'
}]


var waitList = [{
    customerName: 'TEST',
    customerEmail: 'TEST',
    customerID: 'TEST',
    phoneNumber: 'TEST'
}, {
    customerName: 'TEST',
    customerEmail: 'TEST',
    customerID: 'TEST',
    phoneNumber: 'TEST'
}]

// Basic route that sends the user first to the AJAX Page
// =============================================================
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/table', function (req, res) {
	res.sendFile(path.join(__dirname, 'table.html'))
})

app.get('/reserve', function (req, res) {
	res.sendFile(path.join(__dirname, 'reserve.html'))
})

app.get('/test', function (req, res) {
	res.sendFile(path.join(__dirname, 'test.html'))
})

app.get('/api/tables', function (req, res) {
	res.json(tables)
})

app.get('/api/waitlist', function (req, res) {
	res.json(waitList)
})

app.post('/api/new', function (req, res) {
	var newReservation = req.body;
	// newReservation.routeName = newReservation.name.replace(/\s+/g, '').toLowerCase();

	console.log(newReservation);

	if (tables.length <= 4) {
		tables.push(newReservation)
	} else {
		waitList.push(newReservation)
	}
	
	res.json(newReservation);
})


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT)
})
