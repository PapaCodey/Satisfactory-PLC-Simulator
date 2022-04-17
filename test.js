/*-----------------------------------------------------------------------------------------
This is proprietary code for the University of South Carolina Aiken CSCI 591 / 592 capstone project
commisioned by Dragos employee Mackenize Morris
Project: Leveraging Satisfactory for Programmable Logic Controller(PLC) Simulation and Cyber Security Testing
Developers and Contact Information: Samuel R. Boyd (srboyd@usca.edu) & Cody N. Collum (ccollum@usca.edu / codynathanielc@gmail.com)
Last Edited: April 29th, 2022
The following code is responsible for spinning up the Node.JS web server that hosts a REST API responsible for handling the HTTP requests made by Satisfactory
and the VTScada HMI that is necessary for this project.
-----------------------------------------------------------------------------------------*/

// The following lines of code establish the file system, the bodyParser, the express.js framework, and the port number for the webserver
const fs = require('fs');                                               //File System
const express = require('express');                                     //Including the express.js framework
const bodyParser = require("body-parser");                              //Including the bodyparser
const app = express();                                                  //Creating the app variable using express.js framework for the HTTP requests
const port = 3000;                                                      //Assigning the port number for the web server

// The following lines assign the bodyparser for use in the express.js app variable
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text({ type: 'text/html' }))

// The following lines create, or 'spin-up' the web server
app.listen(port, () => console.log('listening at 3000'));
app.use(express.static('public'));
app.use(express.json({limit: '1gb'}));

// The following lines handle a basic HTTP POST request to the path web server path '/api' 
app.post('/api', function(request, response) {

	console.log('A POST request was recieved at /api!');
	console.log(request.body);
    console.log("Going to write into existing file");

// The following lines open a new file with name database.txt and write values to it
	fs.writeFile('database.txt', request.body, function(err) {
   if (err) {
      return console.error(err);
   }
   console.log("Data written successfully!");
   response.end();
	});
});

// The following lines handle HTTP GET requests to the web server
app.get('/api', function(request, response) {
	console.log('A GET request was recieved under /api!');
// Read the database.txt file and print all of its content on the console while returning in GET request response
   fs.readFile('database.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("Asynchronous read: " + data.toString());
    response.send(data);
   });
});



/* The following lines are responsible for handeling HTTP GET requests from the HMI and LUA Computer to get the status of machine 1
   In this current implementation, the status returned corresponds to the value of the constructor
*/
app.get('/getStatus1', function (req, res, next) {
    console.log('request received')
    const contents = fs.readFileSync('database.txt', 'utf8')


    const a = contents.substr(1, 1)
    res.send(a)

});

/* The following lines are responsible for handeling HTTP GET requests from the HMI and LUA Computer to get the status of machine 2
   In this current implementation, the status returned corresponds to the value of the assembler
*/
app.get('/getStatus2', function (req, res, next) {
    console.log('request received')
    const contents = fs.readFileSync('database.txt', 'utf8')
 

        const a = contents.substr(2, 1)
        res.send(a)
    
});

/* The following lines are responsible for handeling HTTP GET requests from the HMI and LUA Computer to get the status of machine 3
   In this current implementation, the status returned corresponds to the value of assembler2
*/
app.get('/getStatus3', function (req, res, next) {
    console.log('request received')
    const contents = fs.readFileSync('database.txt', 'utf8')


    const a = contents.substr(3, 1)
    res.send(a)

});

/* The following lines are responsible for handeling HTTP GET requests from the HMI and LUA Computer to update the state of machine 1
   In this current implementation, the status returned corresponds to the value of the constructor
*/
app.get('/updateState3', function (req, res, next) {
    console.log('request received')
    const contents = fs.readFileSync('database.txt', 'utf8')
    var a = []
    var string = ""
    
    for (let j = 0; j < contents.length; j++) {
       a[j] = contents.substr(j, 1)

    }
    if (a[a.length - 1] == 0) {
        a[a.length - 1] = 1
    }
    else {
        a[a.length -1] = 0
    }

    for (let i = 0; i < a.length; i++) {
        string = string + a[i].toString()
        
    }
    fs.writeFile('database.txt', string, function (err) {
        if (err) {
            return console.error(err);
        }
        console.log("Data written successfully!");
        res.end();
    });
});

/* The following lines are responsible for handeling HTTP GET requests from the HMI and LUA Computer to update the state of machine 2
   In this current implementation, the status returned corresponds to the value of the assembler
*/
app.get('/updateState2', function (req, res, next) {
    console.log('request received')
    const contents = fs.readFileSync('database.txt', 'utf8')
    var a = []
    var string = ""

    for (let j = 0; j < contents.length; j++) {
        a[j] = contents.substr(j, 1)

    }
    if (a[a.length - 2] == 0) {
        a[a.length - 2] = 1
    }
    else {
        a[a.length - 2] = 0
    }

    for (let i = 0; i < a.length; i++) {

        string = string + a[i].toString()
    }
    fs.writeFile('database.txt', string, function (err) {
        if (err) {
            return console.error(err);
        }
        console.log("Data written successfully!");
        res.end();
    });
});

/* The following lines are responsible for handeling HTTP GET requests from the HMI and LUA Computer to update the state of machine 3
   In this current implementation, the status returned corresponds to the value of the assembler 2
*/
app.get('/updateState1', function (req, res, next) {
    console.log('request received')
    const contents = fs.readFileSync('database.txt', 'utf8')
    var a = []
    var string = ""

    for (let j = 0; j < contents.length; j++) {
        a[j] = contents.substr(j, 1)

    }
    if (a[a.length - 3] == 0) {
        a[a.length - 3] = 1
    }
    else {
        a[a.length - 3] = 0
    }

    for (let i = 0; i < a.length; i++) {
        string = string + a[i].toString()

    }
    fs.writeFile('database.txt', string, function (err) {
        if (err) {
            return console.error(err);
        }
        console.log("Data written successfully!");
        res.end();
    });
});