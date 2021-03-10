// calls in the http module to allow the server to communicate to the server/client
//defines the host of the server
//defines the port the server will listen to


const http = require("http");
const host = 'localhost';
const port = 8080;

//function will respond whenever someone accesses the server with string
const requestListener = function(req, res) {
    res.writeHead(200);
    res.end("potentially functioning server");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
/*
1, creates a server object with http module's createServer function
2, binds the server to listen to the port and host defined earlier
*/